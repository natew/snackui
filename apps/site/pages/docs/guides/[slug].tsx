import { getDocLayout } from '@components/layouts/DocLayout'
import { components } from '@components/MDXComponents'
import { QuickNav } from '@components/QuickNav'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx'
import { ThemeTint } from '@tamagui/logo'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import { Spacer } from 'tamagui'

import { HomeH1 } from '../../../components/HomeH2'
import { SubTitle } from '../../../components/SubTitle'
import type { Frontmatter } from '../../../frontmatter'

type Doc = {
  frontmatter: Frontmatter
  code: any
}

export default function DocGuidesPage({ frontmatter, code }: Doc) {
  if (!frontmatter) {
    return null
  }
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <TitleAndMetaTags title={`${frontmatter.title} — Tamagui Guides`} />
      <HomeH1>{frontmatter.title}</HomeH1>
      <Spacer size="$1" />
      <SubTitle>{frontmatter.description}</SubTitle>
      <ThemeTint>
        <Component components={components as any} />
      </ThemeTint>
      <QuickNav />
    </>
  )
}

DocGuidesPage.getLayout = getDocLayout

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('docs/guides')
  const paths = frontmatters.map(({ slug }) => ({
    params: { slug: slug.replace('docs/guides/', '') },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('docs/guides', context.params.slug)
  return {
    props: {
      frontmatter,
      code,
    },
  }
}
