export const docsRoutes = [
  {
    label: 'Getting Started',
    pages: [
      { title: 'Introduction', route: '/docs/intro/introduction' },
      { title: 'Installation', route: '/docs/intro/installation' },
      { title: 'Configuration', route: '/docs/intro/configuration' },
      { title: 'Themes', route: '/docs/intro/themes' },
      { title: 'Props', route: '/docs/intro/props' },
      { title: 'Benchmarks', route: '/docs/intro/benchmarks' },
      { title: 'Releases', route: 'https://github.com/tamagui/tamagui/releases' },
    ],
  },

  {
    label: 'Core',
    pages: [
      { title: 'styled()', route: '/docs/core/styled' },
      { title: 'Variants', route: '/docs/core/variants' },
      { title: 'Animations', route: '/docs/core/animations' },
      { title: 'Stack & Text', route: '/docs/core/stack-and-text' },
      { title: 'Theme', route: '/docs/core/theme' },
      { title: 'useMedia()', route: '/docs/core/use-media' },
      { title: 'useTheme()', route: '/docs/core/use-theme' },
    ],
  },

  {
    label: 'Tamagui',
    pages: [
      { title: 'Stacks', route: '/docs/components/stacks' },
      { title: 'Paragraph', route: '/docs/components/text' },
      { title: 'Headings', route: '/docs/components/headings' },
      { title: 'Button', route: '/docs/components/button' },
      { title: 'Group', route: '/docs/components/group' },
      { title: 'Input, Textarea', route: '/docs/components/inputs' },
      { title: 'Label', route: '/docs/components/label' },
      { title: 'Slider', route: '/docs/components/slider' },
      { title: 'Switch', route: '/docs/components/switch' },
      { title: 'Image', route: '/docs/components/image' },
      { title: 'Card', route: '/docs/components/card' },
      { title: 'Separator', route: '/docs/components/separator' },
      { title: 'Popover', route: '/docs/components/popover' },
      { title: 'Tooltip', route: '/docs/components/tooltip' },
      { title: 'LinearGradient', route: '/docs/components/linear-gradient' },
      { title: 'Spinner', route: '/docs/components/spinner' },
      { title: 'Progress', route: '/docs/components/progress' },
      { title: 'Shapes', route: '/docs/components/shapes' },
      { title: 'Anchor', route: '/docs/components/anchor' },
      { title: 'VisuallyHidden', route: '/docs/components/visually-hidden' },
      { title: 'HTML Elements', route: '/docs/components/html-elements' },
    ],
  },

  {
    label: 'Separate Components',
    pages: [
      { title: 'Drawer', route: '/docs/components/drawer' },
      // { title: 'Menu', route: '/docs/components/menu' },
    ],
  },

  {
    label: 'Extras',
    pages: [{ title: 'Feather Icons', route: '/docs/components/feather-icons' }],
  },

  {
    label: 'Guides',
    pages: [
      { title: 'Design Systems', route: '/docs/guides/design-systems' },
      { title: 'Developing', route: '/docs/guides/developing' },
      { title: 'Next.js', route: '/docs/guides/next-js' },
      { title: 'Expo', route: '/docs/guides/expo' },
      { title: 'create-tamagui-app', route: '/docs/guides/create-tamagui-app' },
    ],
  },
]

export const allDocsRoutes = docsRoutes.flatMap((x) => x.pages)
