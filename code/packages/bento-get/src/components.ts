export type ComponentSchema = {
  name: string
  category: string
  categorySection: string
  fileName: string
  dependencies?: string[]
  bentoDependencies?: string[]
  isOSS: boolean
  moveFilesToFolder?: MoveFileToFolder[]
}

type MoveFileToFolder = {
  file: string
  to: string
}

const OSS_COMPONENTS = [
  'InputWithLabel',
  'CheckboxCards',
  'SignInScreen',
  'GroupedRadio',
  'SwitchCustomIcons',
  'WritePreviewAction',
  'ImagePicker',
  'HList',
  'AvatarsGrouped',
  'ButtonsWithLeftIcons',
  'DatePicker',
  'UsersTable',
  'Chips',
  'SlidingPopover',
  'TabBar',
  'ButtonLoading',
  'NumberSlider',
  'SlideIn',
  'AvatarsTooltip',
  'Meeting',
]

// TODO: this are components that the script fails to parse filenames correctly.
const MISSING_COMPONENTS: Omit<ComponentSchema, 'isOSS'>[] = [
  {
    name: 'Number Slider',
    fileName: 'NumberSlider',
    category: 'animation',
    categorySection: 'microinteractions',
  },
  {
    name: 'Mouse Interactive 3D Cards',
    fileName: 'InteractiveCard',
    category: 'animation',
    categorySection: 'microinteractions',
    moveFilesToFolder: [{ file: 'InteractiveCard', to: '' }],
  },
  {
    name: 'Slide In',
    fileName: 'SlideIn',
    category: 'animation',
    categorySection: 'slide',
    moveFilesToFolder: [{ file: 'SlideIn', to: '' }],
  },
  {
    name: 'Slide Out',
    fileName: 'SlideOut',
    category: 'animation',
    categorySection: 'slide',
    moveFilesToFolder: [{ file: 'SlideOut', to: '' }],
  },
  {
    name: 'Basic Table',
    fileName: 'Basic',
    category: 'elements',
    categorySection: 'tables',
    dependencies: ['@tanstack/react-table'],
    moveFilesToFolder: [
      { file: 'Basic', to: '' },
      { file: 'tableParts', to: 'common' },
    ],
  },
  {
    name: 'DatePicker',
    fileName: 'DatePicker',
    category: 'elements',
    categorySection: 'datepickers',
    dependencies: ['@rehookify/datepicker'],
    moveFilesToFolder: [
      { file: 'DatePicker', to: '' },
      { file: 'dateParts', to: 'common' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'MonthPicker',
    fileName: 'MonthPicker',
    category: 'elements',
    categorySection: 'datepickers',
    dependencies: ['@rehookify/datepicker'],
    moveFilesToFolder: [
      { file: 'MonthPicker', to: '' },
      { file: 'dateParts', to: 'common' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'YearPicker',
    fileName: 'YearPicker',
    category: 'elements',
    categorySection: 'datepickers',
    dependencies: ['@rehookify/datepicker'],
    moveFilesToFolder: [
      { file: 'YearPicker', to: '' },
      { file: 'dateParts', to: 'common' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'Sliding Popover',
    fileName: 'SlidingPopover',
    category: 'elements',
    categorySection: 'dialogs',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'SlidingPopover', to: '' }],
  },
  {
    name: 'React Native API Compatible Alert',
    fileName: 'Alert',
    category: 'elements',
    categorySection: 'dialogs',
    moveFilesToFolder: [{ file: 'Alert', to: '' }],
  },
  {
    name: 'Input with Label',
    fileName: 'InputWithLabel',
    category: 'forms',
    categorySection: 'inputs',
    moveFilesToFolder: [
      { file: 'InputWithLabel', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'One-Time Code Input',
    fileName: 'OneTimeCodeInput',
    category: 'forms',
    categorySection: 'inputs',
    dependencies: ['react-hook-form', '@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'OneTimeCodeInput', to: '' },
      { file: 'InputWithLabel', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'Input with Label and Message',
    fileName: 'InputWithLabelAndMessage',
    category: 'forms',
    categorySection: 'inputs',
    moveFilesToFolder: [
      { file: 'InputWithLabelAndMessage', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'Input with Error',
    fileName: 'InputWithError',
    category: 'forms',
    categorySection: 'inputs',
    moveFilesToFolder: [
      { file: 'InputWithError', to: '' },
      { file: 'inputsParts', to: 'components' },
      { file: 'useForwardFocus', to: 'hooks' },
    ],
  },
  {
    name: 'Input Left Adornment',
    fileName: 'InputWithLeftIcon',
    category: 'forms',
    categorySection: 'inputs',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'InputWithLeftIcon', to: '' },
      { file: 'inputsParts', to: 'components' },
      { file: 'useForwardFocus', to: 'hooks' },
    ],
  },
  {
    name: 'Input Right Adornment',
    fileName: 'InputWithRightIcon',
    category: 'forms',
    categorySection: 'inputs',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'InputWithRightIcon', to: '' },
      { file: 'inputsParts', to: 'components' },
      { file: 'useForwardFocus', to: 'hooks' },
    ],
  },
  {
    name: 'Input Left/Right Adornment',
    fileName: 'InputBothSideIcons',
    category: 'forms',
    categorySection: 'inputs',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'InputBothSideIcons', to: '' },
      { file: 'inputsParts', to: 'components' },
      { file: 'useForwardFocus', to: 'hooks' },
    ],
  },
  {
    name: 'Grouped Input with Buttons',
    fileName: 'InputGroupedIcons',
    category: 'forms',
    categorySection: 'inputs',
    moveFilesToFolder: [
      { file: 'InputGroupedIcons', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'Grouped Input with Buttons (Alt)',
    fileName: 'InputWithRightAddOn',
    category: 'forms',
    categorySection: 'inputs',
    moveFilesToFolder: [
      { file: 'InputWithRightAddOn', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'Phone',
    fileName: 'PhoneInput',
    category: 'forms',
    categorySection: 'inputs',
    dependencies: [
      '@tamagui/lucide-icons',
      'awesome-phonenumber',
      '@tamagui/roving-focus',
    ],
    moveFilesToFolder: [
      { file: 'PhoneInput', to: '' },
      { file: 'inputsParts', to: 'components' },
    ],
  },
  {
    name: 'Sign-up Form - Two Column',
    fileName: 'SignUpTwoSide',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [
      { file: 'SignUpTwoSide', to: '' },
      { file: 'checkboxParts', to: '../checkboxes/common' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  // {
  //   name: 'Jumping Walkthrough',
  //   fileName: 'walkThrough', // missing filename
  //   category: 'panels',
  //   categorySection: 'walkthrough',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  // {
  //   name: 'Fluid Walkthrough',
  //   fileName: 'WalkThroughFluid',
  //   category: 'panels',
  //   categorySection: 'walkthrough',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  {
    name: 'Meeting Time',
    fileName: 'Meeting',
    category: 'user',
    categorySection: 'events',
    dependencies: [
      '@tamagui/lucide-icons',
      '@tamagui/get-font-sized',
      '@tamagui/linear-gradient',
    ],
    moveFilesToFolder: [{ file: 'Meeting', to: '' }],
  },
]
// NOTE: hardcoded list but using getAllComponentsForBentoCli.js
// TODO: use getAllComponentsForBentoCli.js on github action and request schema file as json from url
export const componentsList: ComponentSchema[] = [
  {
    name: 'Loading Animation',
    fileName: 'ButtonLoading',
    category: 'animation',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: 'ButtonLoading', to: '' }],
  },
  {
    name: 'Press Animation',
    fileName: 'ButtonPulse',
    category: 'animation',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: 'ButtonPulse', to: '' }],
  },
  {
    name: 'Icon Animation',
    fileName: 'IconCenterButton',
    category: 'animation',
    categorySection: 'buttons',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Hoverable Avatars',
    fileName: 'AvatarsTooltip',
    category: 'animation',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: 'AvatarsTooltip', to: '' }],
  },
  {
    name: 'Fancy Hoverable Avatars',
    fileName: 'AvatarsTooltipFancy',
    category: 'animation',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: 'AvatarsTooltipFancy', to: '' }],
  },
  {
    name: 'Shopping Cart',
    fileName: 'Fullpage',
    category: 'ecommerce',
    categorySection: 'cart',
    dependencies: ['@ngneat/falso', '@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'Fullpage', to: '' },
      { file: 'IconCenterButton', to: '../../animation/buttons' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'Product with Review',
    fileName: 'ProductWithReview',
    category: 'ecommerce',
    categorySection: 'product_page',
    moveFilesToFolder: [{ file: 'ProductWithReview', to: '' }],
  },
  // {
  //   name: 'Product List',
  //   fileName: 'ProductList',
  //   category: 'ecommerce',
  //   categorySection: 'product_list',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  // {
  //   name: 'Product List Best Items',
  //   fileName: 'ProductListBestItems',
  //   category: 'ecommerce',
  //   categorySection: 'product_list',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  // {
  //   name: 'Prodcut List Grid Thumbs',
  //   fileName: 'ProductListGridThumbs',
  //   category: 'ecommerce',
  //   categorySection: 'product_list',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  // {
  //   name: 'Product List with Features',
  //   fileName: 'ProductListWithFeatures',
  //   category: 'ecommerce',
  //   categorySection: 'product_list',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  // {
  //   name: 'Prodcut List with Label',
  //   fileName: 'ProductListWithLabel',
  //   category: 'ecommerce',
  //   categorySection: 'product_list',
  //   moveFilesToFolder: [{ file: '', to: '' }],
  // },
  {
    name: 'Image Picker',
    fileName: 'ImagePicker',
    category: 'elements',
    categorySection: 'pickers',
    dependencies: [
      '@tamagui/lucide-icons',
      'expo-document-picker',
      'expo-image-picker',
      'react-dropzone',
    ],
    moveFilesToFolder: [
      { file: 'ImagePicker', to: '' },
      { file: 'types', to: '' },
      { file: 'useFilePicker', to: 'hooks' },
    ],
  },
  {
    name: 'Upload File',
    fileName: 'UploadFile',
    category: 'elements',
    categorySection: 'pickers',
    dependencies: [
      '@tamagui/lucide-icons',
      'expo-document-picker',
      'expo-image-picker',
      'react-dropzone',
    ],
    moveFilesToFolder: [
      { file: 'UploadFile', to: '' },
      { file: 'types', to: '' },
      { file: 'useFilePicker', to: 'hooks' },
    ],
  },
  {
    name: 'Grouped Avatars',
    fileName: 'AvatarsGrouped',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [
      { file: 'AvatarsGrouped', to: '' },
      { file: 'Avatar', to: 'components' },
    ],
  },
  {
    name: 'Circular Avatars with custom icons',
    fileName: 'CircularAvatarsWithCustomIcons',
    category: 'elements',
    categorySection: 'avatars',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'CircularAvatarsWithCustomIcons', to: '' },
      { file: 'Avatar', to: 'components' },
    ],
  },
  {
    name: 'Rounded Avatars',
    fileName: 'RoundedAvatars',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [
      { file: 'RoundedAvatars', to: '' },
      { file: 'Avatar', to: 'components' },
    ],
  },
  {
    name: 'Rounded Avatars with Custom Icons',
    fileName: 'RoundedAvatarsWithCustomIcons',
    category: 'elements',
    categorySection: 'avatars',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'RoundedAvatars', to: '' },
      { file: 'Avatar', to: 'components' },
    ],
  },
  {
    name: 'Buttons with Left Icons',
    fileName: 'ButtonsWithLeftIcons',
    category: 'elements',
    categorySection: 'buttons',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'ButtonsWithLeftIcons', to: '' }],
  },
  {
    name: 'Buttons with Loaders',
    fileName: 'ButtonsWithLoaders',
    category: 'elements',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: 'ButtonsWithLoaders', to: '' }],
  },
  {
    name: 'Rounded Buttons',
    fileName: 'RoundedButtons',
    category: 'elements',
    categorySection: 'buttons',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'RoundedButtons', to: '' }],
  },
  {
    name: 'Users Table with Avatar',
    fileName: 'UsersTable',
    category: 'elements',
    categorySection: 'tables',
    dependencies: ['@tanstack/react-table'],
    moveFilesToFolder: [
      { file: 'UsersTable', to: '' },
      { file: 'tableParts', to: 'common' },
    ],
  },
  {
    name: 'Table with Pagination and Sorting Ability',
    fileName: 'SortableTable',
    category: 'elements',
    categorySection: 'tables',
    moveFilesToFolder: [
      { file: 'SortableTable', to: '' },
      { file: 'tableParts', to: 'common' },
      { file: 'makeData', to: 'utils' },
    ],
  },
  {
    name: 'MultiSelectPicker',
    fileName: 'MultiSelectPicker',
    category: 'elements',
    categorySection: 'datepickers',
    dependencies: [
      '@rehookify/datepicker',
      '@tamagui/lucide-icons',
      '@tamagui/get-font-sized',
      '@tamagui/web',
    ],
    moveFilesToFolder: [
      { file: 'MultiSelectPicker', to: '' },
      { file: 'DatePicker', to: '' },
      { file: 'dateParts', to: 'common' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'RangePicker',
    fileName: 'RangePicker',
    category: 'elements',
    categorySection: 'datepickers',
    dependencies: ['@tamagui/lucide-icons', '@rehookify/datepicker', '@tamagui/linear-gradient',],
    bentoDependencies: ['./common/dateParts', './common/useDateAnimation'],
    moveFilesToFolder: [
      { file: 'MultiSelectPicker', to: '' },
      { file: 'DatePicker', to: '' },
      { file: 'dateParts', to: 'common' },
      { file: 'inputsParts', to: '../../forms/inputs/components' },
    ],
  },
  {
    name: 'Simple Chips',
    fileName: 'Chips',
    category: 'elements',
    categorySection: 'chips',
    dependencies: ['@tamagui/get-font-sized'],
    moveFilesToFolder: [
      { file: 'Chips', to: '' },
      { file: 'chipsParts', to: 'components' },
    ],
  },
  {
    name: 'Chips White Text and Pressable',
    fileName: 'ChipsNoTextColor',
    category: 'elements',
    categorySection: 'chips',
    dependencies: ['@tamagui/get-font-sized'],
    moveFilesToFolder: [
      { file: 'ChipsNoTextColor', to: '' },
      { file: 'chipsParts', to: 'components' },
    ],
  },
  {
    name: 'Rounded Chips',
    fileName: 'ChipsRounded',
    category: 'elements',
    categorySection: 'chips',
    dependencies: ['@tamagui/get-font-sized'],
    moveFilesToFolder: [
      { file: 'ChipsRounded', to: '' },
      { file: 'chipsParts', to: 'components' },
    ],
  },
  {
    name: 'Chips with Close Icon',
    fileName: 'ChipsWithCloseIcon',
    category: 'elements',
    categorySection: 'chips',
    dependencies: ['@tamagui/get-font-sized'],
    moveFilesToFolder: [
      { file: 'ChipsWithCloseIcon', to: '' },
      { file: 'chipsParts', to: 'components' },
    ],
  },
  {
    name: 'Chips with Icon',
    fileName: 'ChipsWithIcon',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [
      { file: 'ChipsWithIcon', to: '' },
      { file: 'chipsParts', to: 'components' },
    ],
  },
  {
    name: 'IOS style Alert',
    fileName: 'IosStyleAlert',
    category: 'elements',
    categorySection: 'dialogs',
    moveFilesToFolder: [{ file: 'IosStyleAlert', to: '' }],
  },
  {
    name: 'Alert with icon and tint color',
    fileName: 'AlertWithIcon',
    category: 'elements',
    categorySection: 'dialogs',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal Covers',
    fileName: 'HList',
    category: 'elements',
    categorySection: 'list',
    dependencies: ['@ngneat/falso', '@tamagui/web'],
    moveFilesToFolder: [{ file: 'HList', to: '' }],
  },
  {
    name: 'Chat List',
    fileName: 'ChatList',
    category: 'elements',
    categorySection: 'list',
    dependencies: ['@ngneat/falso', '@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'ChatList', to: '' }],
  },
  {
    name: 'Item Value List',
    fileName: 'ItemValueList',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: 'ItemValueList', to: '' }],
  },
  {
    name: 'Performant Grid with FlatList',
    fileName: 'FlatGrid',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: 'FlatGrid', to: '' }],
  },
  {
    name: 'Phonebook List',
    fileName: 'List',
    category: 'elements',
    categorySection: 'list',
    dependencies: ['@ngneat/falso', '@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'List', to: '' }],
  },
  {
    name: 'Masonry List',
    fileName: 'MasonryListExample',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [
      { file: 'MasonryListExample', to: '' },
      { file: 'MasonryList', to: 'components' },
      { file: 'products', to: 'data' },
      { file: 'chipsParts', to: '../../chips/components' },
    ],
  },
  {
    name: 'CheckBox Cards',
    fileName: 'CheckboxCards',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'CheckboxCards', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Checkbox List',
    fileName: 'CheckboxList',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'CheckboxList', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Grouped Checkbox',
    fileName: 'GroupedCheckbox',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'GroupedCheckbox', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Horizontal Checkboxes',
    fileName: 'HorizontalCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'HorizontalCheckboxes', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Horizontal with Description Checkboxes',
    fileName: 'HorizontalWithDescriptionCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'HorizontalWithDescriptionCheckboxes', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Vertical with Description Checkboxes',
    fileName: 'VerticalWithDescriptionCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/roving-focus'],
    moveFilesToFolder: [
      { file: 'VerticalWithDescriptionCheckboxes', to: '' },
      { file: 'checkboxParts', to: 'common' },
    ],
  },
  {
    name: 'Sign-in Form',
    fileName: 'SignInScreen',
    category: 'forms',
    categorySection: 'layouts',
    dependencies: [
      '@tamagui/lucide-icons',
      // inputParts dependencies
      '@tamagui/web',
      '@tamagui/get-font-sized',
      '@tamagui/get-token',
      '@tamagui/lucide-icons',
    ],
    moveFilesToFolder: [
      { file: 'SignInScreen', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'Sign-in Right Image',
    fileName: 'SignInRightImage',
    category: 'forms',
    categorySection: 'layouts',
    dependencies: [
      '@tamagui/linear-gradient',
      '@tamagui/lucide-icons',
      // inputParts dependencies
      '@tamagui/web',
      '@tamagui/get-font-sized',
      '@tamagui/get-token',
      '@tamagui/lucide-icons',
    ],
    moveFilesToFolder: [
      { file: 'SignInRightImage', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'Sign-up Form',
    fileName: 'SignUpScreen',
    category: 'forms',
    categorySection: 'layouts',
    dependencies: [
      '@tamagui/lucide-icons',
      // inputParts dependencies
      '@tamagui/web',
      '@tamagui/get-font-sized',
      '@tamagui/get-token',
      '@tamagui/lucide-icons',
    ],
    moveFilesToFolder: [
      { file: 'SignUpScreen', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'Short Email Password Layout',
    fileName: 'ShortEmailPassword',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [
      { file: 'ShortEmailPassword', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'Integrated with react-hook-form and Zod',
    fileName: 'SignupValidatedHookForm',
    category: 'forms',
    categorySection: 'layouts',
    dependencies: [
      'zod',
      '@hookform/resolvers/zod',
      'react-hook-form',
      '@tamagui/lucide-icons',
    ],
    moveFilesToFolder: [
      { file: 'SignupValidatedHookForm', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'Integrated with react-ts-form and Zod',
    fileName: 'SignupValidatedTsForm',
    category: 'forms',
    categorySection: 'layouts',
    dependencies: [
      'zod',
      '@ts-react/form',
      '@tamagui/lucide-icons',
      '@tamagui/lucide-icons',
    ],
    moveFilesToFolder: [
      { file: 'SignupValidatedTsForm', to: '' },
      { file: 'layoutParts', to: 'components' },
      { file: 'inputsParts', to: '../inputs/components' },
    ],
  },
  {
    name: 'RadioGroup List',
    fileName: 'GroupedRadio',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'GroupedRadio', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Horizontal RadioGroups',
    fileName: 'Horizontal',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'Horizontal', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Horizontal RadioGroups with description',
    fileName: 'HorizontalWithDescription',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'HorizontalWithDescription', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Cards RadioGroups',
    fileName: 'RadioCards',
    category: 'forms',
    categorySection: 'radiogroups',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'RadioCards', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'List RadioGroups',
    fileName: 'RadioList',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'RadioList', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Vertical RadioGroups',
    fileName: 'Vertical',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'Vertical', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Vertical with Description RadioGroups',
    fileName: 'VerticalWithDescription',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [
      { file: 'VerticalWithDescription', to: '' },
      { file: 'radioParts', to: 'components' },
    ],
  },
  {
    name: 'Switch with Custom Icons',
    fileName: 'SwitchCustomIcons',
    category: 'forms',
    categorySection: 'switches',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/core'],
    moveFilesToFolder: [
      { file: 'SwitchCustomIcons', to: '' },
      { file: 'switchParts', to: 'common' },
    ],
  },
  {
    name: 'Switch with Icon and Title',
    fileName: 'IconTitleSwitch',
    category: 'forms',
    categorySection: 'switches',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'IconTitleSwitch', to: '' }],
  },
  {
    name: 'Comment Box with Preview',
    fileName: 'WritePreviewAction',
    category: 'forms',
    categorySection: 'textareas',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'WritePreviewAction', to: '' }],
  },
  {
    name: 'Comment Box',
    fileName: 'AvatarNameContentAction',
    category: 'forms',
    categorySection: 'textareas',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'AvatarNameContentAction', to: '' }],
  },
  {
    name: 'Comment Box Floating',
    fileName: 'AvatarOutContentAction',
    category: 'forms',
    categorySection: 'textareas',
    moveFilesToFolder: [{ file: 'AvatarOutContentAction', to: '' }],
  },
  {
    name: 'Comment Box Minimal',
    fileName: 'TitleContentMessage',
    category: 'forms',
    categorySection: 'textareas',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'TitleContentMessage', to: '' }],
  },
  {
    name: 'Top Navbar with Swippable Drawer on Smaller Screens',
    fileName: 'TopNavBarWithLogo',
    category: 'shells',
    categorySection: 'navbars',
    dependencies: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [
      { file: 'TopNavBarWithLogo', to: '' },
      { file: 'Drawer', to: '../common' },
    ],
  },
  {
    name: 'Top Navbar with Underline Tabs',
    fileName: 'TopNavBarWithUnderLineTabs',
    category: 'shells',
    categorySection: 'navbars',
    dependencies: [
      '@tamagui/lucide-icons',
      // Drawer dependencies
      '@tamagui/focus-scope',
      '@tamagui/portal',
    ],
    moveFilesToFolder: [
      { file: 'TopNavBarWithUnderLineTabs', to: '' },
      { file: 'Drawer', to: '../common' },
    ],
  },
  {
    name: 'Responsive Sidebar',
    fileName: 'FullSideBar',
    category: 'shells',
    categorySection: 'sidebars',
    dependencies: [
      '@tamagui/lucide-icons',
      '@tamagui/roving-focus',
      // Drawer dependencies
      '@tamagui/focus-scope',
      '@tamagui/portal',
    ],
    moveFilesToFolder: [
      { file: 'FullSideBar', to: '' },
      { file: 'Drawer', to: '../common' },
    ],
  },
  {
    name: 'React Navigation compatible Tabbar with Underline',
    fileName: 'TabBar',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: 'TabBar', to: '' }],
  },
  {
    name: 'Progressive Tabbar with Underline Indicator',
    fileName: 'TabBarSecondExample',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: 'TabBarSecondExample', to: '' }],
  },
  {
    name: 'Swippable Tabbar Support Gesture Drag',
    fileName: 'TabBarSwippable',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: 'TabBarSwippable', to: '' }],
  },
  {
    name: 'Email Preferences',
    fileName: 'LocationNotification',
    category: 'user',
    categorySection: 'preferences',
    dependencies: [
      '@tamagui/linear-gradient',
      '@tamagui/lucide-icons',
      '@tamagui/get-font-sized',
    ],
    moveFilesToFolder: [{ file: 'LocationNotification', to: '' }],
  },
  {
    name: 'Employees Status Tracker',
    fileName: 'StatusTracker',
    category: 'user',
    categorySection: 'events',
    dependencies: ['@tamagui/lucide-icons', '@tamagui/get-font-sized'],
    moveFilesToFolder: [{ file: 'StatusTracker', to: '' }],
  },
  ...MISSING_COMPONENTS,
].map((item) => {
  return { ...item, isOSS: Boolean(OSS_COMPONENTS.includes(item.fileName)) }
})
