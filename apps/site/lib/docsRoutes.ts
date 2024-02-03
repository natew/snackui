export const docsRoutes = [
  {
    pages: [
      { title: 'Introduction', route: '/docs/intro/introduction' },
      { title: 'Installation', route: '/docs/intro/installation' },
      // { title: 'Thinking in Tamagui', route: '/docs/intro/thinking-in-tamagui' },
      // { title: 'Comparison', route: '/docs/intro/comparison' },
      { title: 'Releases', route: 'https://github.com/tamagui/tamagui/releases' },
    ],
  },

  {
    title: 'Core',
    pages: [
      { title: 'Introduction', route: '/docs/core/introduction' },
      { title: 'Configuration', route: '/docs/core/configuration' },
      { title: 'Tokens', route: '/docs/core/tokens' },
      { title: 'View & Text', route: '/docs/core/stack-and-text' },
      { title: 'Props', route: '/docs/intro/props' },
      { title: 'Styles', route: '/docs/intro/styles' },
      { title: 'styled()', route: '/docs/core/styled' },
      { title: 'Variants', route: '/docs/core/variants' },
      { title: 'Themes', route: '/docs/intro/themes' },
      { title: 'Animations', route: '/docs/core/animations' },
      { title: 'Theme', route: '/docs/core/theme' },
      { title: 'useMedia', route: '/docs/core/use-media' },
      { title: 'useTheme', route: '/docs/core/use-theme' },
      { title: 'FontLanguage', route: '/docs/core/font-language' },
      { title: 'Extras', route: '/docs/core/exports' },
    ],
  },

  {
    title: 'Compiler',
    pages: [
      { title: 'About', route: '/docs/intro/why-a-compiler' },
      { title: 'Install', route: '/docs/intro/compiler-install' },
      { title: 'Benchmarks', route: '/docs/intro/benchmarks' },
    ],
  },

  {
    title: 'Tamagui',
    pages: [
      { title: 'Stacks', route: '/docs/components/stacks' },
      { title: 'Headings', route: '/docs/components/headings' },
      { title: 'Text', route: '/docs/components/text' },
    ],
  },

  {
    label: 'Forms',
    pages: [
      { title: 'Button', route: '/docs/components/button' },
      { title: 'Checkbox', route: '/docs/components/checkbox' },
      { title: 'Form', route: '/docs/components/form' },
      { title: 'Input & TextArea', route: '/docs/components/inputs' },
      { title: 'Label', route: '/docs/components/label' },
      { title: 'Progress', route: '/docs/components/progress' },
      { title: 'RadioGroup', route: '/docs/components/radio-group' },
      { title: 'Select', route: '/docs/components/select' },
      { title: 'Slider', route: '/docs/components/slider' },
      { title: 'Switch', route: '/docs/components/switch' },
      { title: 'ToggleGroup', route: '/docs/components/toggle-group' },
    ],
  },

  {
    label: 'Panels',
    pages: [
      { title: 'AlertDialog', route: '/docs/components/alert-dialog' },
      { title: 'Dialog', route: '/docs/components/dialog' },
      { title: 'Popover', route: '/docs/components/popover' },
      { title: 'Sheet', route: '/docs/components/sheet' },
      { title: 'Tooltip', route: '/docs/components/tooltip' },
      { title: 'Toast', route: '/docs/components/toast' },
    ],
  },

  {
    label: 'Organize',
    pages: [
      { title: 'Accordion', route: '/docs/components/accordion' },
      { title: 'Group', route: '/docs/components/group' },
      { title: 'Tabs', route: '/docs/components/tabs' },
    ],
  },

  {
    label: 'Content',
    pages: [
      { title: 'Avatar', route: '/docs/components/avatar' },
      { title: 'Card', route: '/docs/components/card' },
      { title: 'Image', route: '/docs/components/image' },
      { title: 'ListItem', route: '/docs/components/list-item' },
    ],
  },

  {
    label: 'Visual',
    pages: [
      { title: 'LinearGradient', route: '/docs/components/linear-gradient' },
      { title: 'Separator', route: '/docs/components/separator' },
      { title: 'Square & Circle', route: '/docs/components/shapes' },
    ],
  },

  {
    label: 'Etc',
    pages: [
      { title: 'Anchor', route: '/docs/components/anchor' },
      { title: 'HTML Elements', route: '/docs/components/html-elements' },
      { title: 'ScrollView', route: '/docs/components/scroll-view' },
      { title: 'Spinner', route: '/docs/components/spinner' },
      { title: 'Unspaced', route: '/docs/components/unspaced' },
      { title: 'VisuallyHidden', route: '/docs/components/visually-hidden' },
    ],
  },

  {
    title: 'Extras',
    pages: [{ title: 'Lucide Icons', route: '/docs/components/lucide-icons' }],
  },

  {
    title: 'Guides',
    pages: [
      { title: 'Creating Custom Themes', route: '/docs/guides/theme-builder' },
      { title: 'How to Build a Button', route: '/docs/guides/how-to-build-a-button' },
      { title: 'Developing', route: '/docs/guides/developing' },
      { title: 'Next.js', route: '/docs/guides/next-js' },
      { title: 'Expo', route: '/docs/guides/expo' },
      { title: 'Vite', route: '/docs/guides/vite' },
      { title: 'create-tamagui', route: '/docs/guides/create-tamagui-app' },
    ],
  },

  {
    title: 'Tamagui Config',
    pages: [
      { title: 'Colors', route: '/docs/intro/colors' },
      { title: 'Tokens', route: '/docs/intro/tokens' },
      // { title: 'Themes', route: '/docs/intro/themes' },
      // { title: 'Fonts', route: '/docs/intro/themes' },
      // { title: 'Icons', route: '/docs/intro/themes' },
      // { title: 'Animations', route: '/docs/intro/themes' },
      // { title: 'Shorthands', route: '/docs/intro/themes' },
      // { title: 'Media Queries', route: '/docs/intro/themes' },
    ],
  },

  {
    title: 'Community',
    pages: [
      { title: `Community`, route: '/community' },
      { title: `Blog`, route: '/blog' },
      { title: `GitHub`, route: 'https://github.com/tamagui/tamagui' },
      { title: `Twitter`, route: 'https://twitter.com/tamagui_js' },
      { title: `Discord`, route: 'https://discord.gg/4qh6tdcVDa' },
    ],
  },
]

export const allDocsRoutes = docsRoutes.flatMap((x) => x.pages || [])
