import { Database } from '@lib/supabase-types'
import { getArray, getSingle } from '@lib/supabase-utils'
import { tiersPriority } from '@protected/_utils/sponsorship'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Session, SupabaseClient } from '@supabase/supabase-js'
import { NextApiHandler } from 'next'

export type UserContextType = {
  subscriptions?: Awaited<ReturnType<typeof getSubscriptions>> | null
  session: Session
  userDetails?: Awaited<ReturnType<typeof getUserDetails>> | null
  teams: {
    all?: Database['public']['Tables']['teams']['Row'][] | null
    orgs?: Database['public']['Tables']['teams']['Row'][] | null
    personal?: Database['public']['Tables']['teams']['Row'] | null
    main?: Database['public']['Tables']['teams']['Row'] | null
  }
}

const handler: NextApiHandler = async (req, res) => {
  const supabase = createServerSupabaseClient<Database>({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user

  if (!user) {
    res.status(401).json({
      error: 'The user is not authenticated',
    })
    return
  }

  const [userTeams, userDetails, subscriptions] = await Promise.all([
    getUserTeams(supabase),
    getUserDetails(supabase),
    getSubscriptions(supabase),
  ])

  res.json({
    session,
    userDetails,
    subscriptions,
    teams: {
      all: userTeams,
      personal: getPersonalTeam(userTeams),
      orgs: getOrgTeams(userTeams),
      main: getMainTeam(userTeams),
    },
  } satisfies UserContextType)
}

export default handler

const getUserDetails = async (supabase: SupabaseClient<Database>) => {
  const result = await supabase.from('users').select('*').single()
  if (result.error) throw new Error(result.error.message)
  return result.data
}

const getUserTeams = async (supabase: SupabaseClient<Database>) => {
  const result = await supabase.from('teams').select('*')
  if (result.error) throw new Error(result.error.message)
  return result.data
}

const getSubscriptions = async (supabase: SupabaseClient<Database>) => {
  const result = await supabase.from('subscriptions').select('*, prices(*, products(*))')
  if (result.error) throw new Error(result.error.message)
  return result.data
}

function getPersonalTeam(teams: Awaited<ReturnType<typeof getUserTeams>>) {
  return getSingle(teams?.filter((team) => team.is_personal))
}

function getOrgTeams(teams: Awaited<ReturnType<typeof getUserTeams>>) {
  return getArray(teams?.filter((team) => !team.is_personal) ?? [])
}

function getMainTeam(teams: Awaited<ReturnType<typeof getUserTeams>>) {
  const sortedTeams = teams?.sort(
    (a, b) => tiersPriority.indexOf(a.tier as any) - tiersPriority.indexOf(b.tier as any)
  )
  return sortedTeams?.[0]
}
