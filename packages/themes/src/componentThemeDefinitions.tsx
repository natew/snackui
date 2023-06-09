import { maskOptions } from './templates'

const overlayThemes = {
  light: {
    background: 'rgba(0,0,0,0.5)',
  },
  dark: {
    background: 'rgba(0,0,0,0.9)',
  },
}

export const overlayThemeDefinitions = [
  {
    parent: 'light',
    theme: overlayThemes.light,
  },
  {
    parent: 'dark',
    theme: overlayThemes.dark,
  },
]

export const componentThemeDefinitions = {
  ListItem: [
    {
      parent: 'light',
      mask: 'strengthen',
      ...maskOptions.component,
    },
    {
      parent: 'dark',
      mask: 'identity',
      ...maskOptions.component,
    },
  ],

  Card: {
    mask: 'soften',
    ...maskOptions.component,
  },

  Button: {
    mask: 'soften2',
    ...maskOptions.button,
  },

  Checkbox: {
    mask: 'soften2',
    ...maskOptions.component,
  },

  SliderTrackActive: {
    mask: 'soften2',
    ...maskOptions.component,
  },

  Switch: {
    mask: 'soften2',
    ...maskOptions.component,
  },

  TooltipContent: {
    mask: 'soften2',
    ...maskOptions.component,
  },

  DrawerFrame: {
    mask: 'soften',
    ...maskOptions.component,
  },

  Progress: {
    mask: 'soften',
    ...maskOptions.component,
  },

  TooltipArrow: {
    mask: 'soften',
    ...maskOptions.component,
  },

  SliderTrack: {
    mask: 'strengthen',
    ...maskOptions.component,
  },

  SliderThumb: {
    mask: 'inverseSoften',
    ...maskOptions.component,
  },

  Tooltip: {
    mask: 'inverse',
    ...maskOptions.component,
  },

  ProgressIndicator: {
    mask: 'inverse',
    ...maskOptions.component,
  },

  SwitchThumb: {
    mask: 'inverseSoften2',
    ...maskOptions.component,
  },

  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,

  Input: [
    {
      parent: 'light',
      mask: 'strengthenButSoftenBorder',
      ...maskOptions.component,
    },
    {
      parent: 'dark',
      mask: 'softenBorder',
      ...maskOptions.component,
    },
  ],

  TextArea: [
    {
      parent: 'light',
      mask: 'strengthenButSoftenBorder',
      ...maskOptions.component,
    },
    {
      parent: 'dark',
      mask: 'softenBorder',
      ...maskOptions.component,
    },
  ],
}
