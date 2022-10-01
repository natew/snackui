import './polyfills'

export * from '@tamagui/animate-presence'
export * from '@tamagui/alert-dialog'
export * from '@tamagui/avatar'
export * from '@tamagui/button'
export * from '@tamagui/card'
export * from '@tamagui/compose-refs'
export * from '@tamagui/create-context'
export * from '@tamagui/dialog'
export * from '@tamagui/font-size'
export * from '@tamagui/helpers-tamagui'
export * from '@tamagui/image'
export * from '@tamagui/label'
export * from '@tamagui/list-item'
export * from '@tamagui/popover'
export * from '@tamagui/popper'
export * from '@tamagui/portal'
export * from '@tamagui/progress'
export * from '@tamagui/scroll-view'
export * from '@tamagui/select'
export * from '@tamagui/separator'
export * from '@tamagui/shapes'
export * from '@tamagui/sheet'
export * from '@tamagui/slider'
export * from '@tamagui/stacks'
export * from '@tamagui/switch'
export * from '@tamagui/text'
export * from '@tamagui/tooltip'
export * from '@tamagui/use-controllable-state'
export * from '@tamagui/use-debounce'
export * from '@tamagui/use-window-dimensions'
export * from '@tamagui/use-force-update'
export * from '@tamagui/visually-hidden'

export * from './views/TamaguiProvider'
export * from './viewTypes'

export * from './views/Anchor'
export * from './views/EnsureFlexed'
export * from './views/Fieldset'
export * from './views/Form'
export * from './views/Grid'
export * from './views/Input'
export * from './views/Group'
export * from './views/Layouts'
export * from './views/LinearGradient'
// export * from './views/Skeleton'
export * from './views/Spinner'
export * from './views/TextArea'

// since we overlap with StackProps and potentially others
// lets be explicit on what gets exported
export type {
  AnimationKeys,
  ColorTokens,
  CreateTamaguiConfig,
  CreateTamaguiProps,
  FontColorTokens,
  FontLetterSpacingTokens,
  FontLineHeightTokens,
  FontSizeTokens,
  FontStyleTokens,
  FontTokens,
  FontTransformTokens,
  FontWeightTokens,
  GenericFont,
  GenericTamaguiConfig,
  GetAnimationKeys,
  GetProps,
  GetVariantProps,
  GenericTextVariants,
  GenericStackVariants,
  Media,
  MediaPropKeys,
  MediaQueries,
  MediaQueryState,
  RNWTextProps,
  RNWViewProps,
  Shorthands,
  Slot,
  Slottable,
  SizeTokens,
  SpaceTokens,
  SpacerProps,
  StackPropsBase,
  TamaguiElement,
  StackPropsBaseShared,
  StaticConfig,
  StaticConfigParsed,
  TamaguiBaseTheme,
  TamaguiComponent,
  TamaguiComponentPropsBase,
  TamaguiConfig,
  FontLanguages,
  TamaguiCustomConfig,
  TamaguiInternalConfig,
  TamaguiProviderProps,
  TextProps,
  TextPropsBase,
  TextPropsBaseShared,
  ThemeKeys,
  ThemeName,
  ThemeParsed,
  ThemeProps,
  Themes,
  ThemeValueFallback,
  Tokens,
  TransformStyleProps,
  VariantSpreadExtras,
  VariantSpreadFunction,
  ZIndexTokens,
} from '@tamagui/core'

export {
  createTamagui,
  // components
  Spacer,
  Stack,
  Text,
  Theme,
  ThemeInverse,
  ThemeReset,
  FontLanguage,
  Unspaced,
  // context,
  TextAncestorContext,
  // constants
  isChrome,
  isClient,
  isServer,
  isTouchable,
  isWeb,
  isWebTouchable,
  // helpers
  calc,
  addMediaQueryListener,
  removeMediaQueryListener,
  mediaQueryConfig,
  createComponent,
  createFont,
  createShorthands,
  createTheme,
  addTheme,
  updateTheme,
  createTokens,
  createVariable,
  getConfig,
  getAnimationDriver,
  getHasConfigured,
  getMedia,
  getStylesAtomic,
  getThemes,
  getTokens,
  getVariable,
  variableToString,
  getVariableValue,
  getVariableName,
  insertFont,
  isObj,
  isTamaguiElement,
  isTamaguiComponent,
  isVariable,
  matchMedia,
  mediaObjectToString,
  mediaState,
  spacedChildren,
  styled,
  themeable,
  withStaticProperties,
  // hooks
  useConstant,
  useGet,
  useEvent,
  useDefaultThemeName,
  useIsMounted,
  useIsomorphicLayoutEffect,
  useIsTouchDevice,
  useMedia,
  usePressable,
  useTheme,
  useThemeName,
  useSafeRef,
  useUnmountEffect,
} from '@tamagui/core'
