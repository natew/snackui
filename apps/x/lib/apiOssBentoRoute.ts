import { getBentoCode } from '~/features/auth/supabaseAdmin'

export async function apiOssBentoRoute(req, res) {
  const slugsArray = Array.isArray(req.query.slug)
    ? req.query.slug
    : typeof req.query.slug === 'string'
      ? [req.query.slug]
      : []

  const codePath = slugsArray.join('/')

  try {
    const fileResult = await getBentoCode(codePath)
    res.setHeader('Content-Type', 'text/plain')
    res.send(fileResult)
  } catch (err) {
    const message = err instanceof Error ? err.message : `${err}`
    console.error(`Error serving API Route: ${message}`, err.stack)
    res.status(401).json({
      error: message,
    })
  }
}
