export type ComponentSchema = {
  name: string
  category: string
  categorySection: string
  // url: string
  fileName: string
  dependencies?: string[]
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
export const componentsList: Omit<ComponentSchema, 'isOSS'>[] = [
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
    dependencices: ['@tamagui/lucide-icons'],
    moveFilesToFolder: [{ file: 'ImagePicker', to: '' }, { file: 'types', to: ''}, {file: 'useFilePicker', to: 'hooks'}],
  },
  {
    name: 'Upload File',
    fileName: 'UploadFile',
    category: 'elements',
    categorySection: 'pickers',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Grouped Avatars',
    fileName: 'AvatarsGrouped',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Circular Avatars with custom icons',
    fileName: 'CircularAvatarsWithCustomIcons',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Rounded Avatars',
    fileName: 'RoundedAvatars',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Rounded Avatars with Custom Icons',
    fileName: 'RoundedAvatarsWithCustomIcons',
    category: 'elements',
    categorySection: 'avatars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Buttons with Left Icons',
    fileName: 'ButtonsWithLeftIcons',
    category: 'elements',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Buttons with Loaders',
    fileName: 'ButtonsWithLoaders',
    category: 'elements',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Rounded Buttons',
    fileName: 'RoundedButtons',
    category: 'elements',
    categorySection: 'buttons',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Users Table with Avatar',
    fileName: 'UsersTable',
    category: 'elements',
    categorySection: 'tables',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Table with Pagination and Sorting Ability',
    fileName: 'SortableTable',
    category: 'elements',
    categorySection: 'tables',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'MultiSelectPicker',
    fileName: 'MultiSelectPicker',
    category: 'elements',
    categorySection: 'datepickers',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'RangePicker',
    fileName: 'RangePicker',
    category: 'elements',
    categorySection: 'datepickers',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Simple Chips',
    fileName: 'Chips',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Chips White Text and Pressable',
    fileName: 'ChipsNoTextColor',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Rounded Chips',
    fileName: 'ChipsRounded',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Chips with Close Icon',
    fileName: 'ChipsWithCloseIcon',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Chips with Icon',
    fileName: 'ChipsWithIcon',
    category: 'elements',
    categorySection: 'chips',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'IOS style Alert',
    fileName: 'IosStyleAlert',
    category: 'elements',
    categorySection: 'dialogs',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Alert with icon and tint color',
    fileName: 'AlertWithIcon',
    category: 'elements',
    categorySection: 'dialogs',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal Covers',
    fileName: 'HList',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Chat List',
    fileName: 'ChatList',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Item Value List',
    fileName: 'ItemValueList',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Performant Grid with FlatList',
    fileName: 'FlatGrid',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Phonebook List',
    fileName: 'List',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Masonry List',
    fileName: 'MasonryListExample',
    category: 'elements',
    categorySection: 'list',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'CheckBox Cards',
    fileName: 'CheckboxCards',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Checkbox List',
    fileName: 'CheckboxList',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Grouped Checkbox',
    fileName: 'GroupedCheckbox',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal Checkboxes',
    fileName: 'HorizontalCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal with Description Checkboxes',
    fileName: 'HorizontalWithDescriptionCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Vertical with Description Checkboxes',
    fileName: 'VerticalWithDescriptionCheckboxes',
    category: 'forms',
    categorySection: 'checkboxes',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Sign-in Form',
    fileName: 'SignInScreen',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Sign-in Right Image',
    fileName: 'SignInRightImage',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Sign-up Form',
    fileName: 'SignUpScreen',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Short Email Password Layout',
    fileName: 'ShortEmailPassword',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Integrated with react-hook-form and Zod',
    fileName: 'SignupValidatedHookForm',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Integrated with react-ts-form and Zod',
    fileName: 'SignupValidatedTsForm',
    category: 'forms',
    categorySection: 'layouts',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'RadioGroup List',
    fileName: 'GroupedRadio',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal RadioGroups',
    fileName: 'Horizontal',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Horizontal RadioGroups with description',
    fileName: 'HorizontalWithDescription',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Cards RadioGroups',
    fileName: 'RadioCards',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'List RadioGroups',
    fileName: 'RadioList',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Vertical RadioGroups',
    fileName: 'Vertical',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Vertical with Description RadioGroups',
    fileName: 'VerticalWithDescription',
    category: 'forms',
    categorySection: 'radiogroups',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Switch with Custom Icons',
    fileName: 'SwitchCustomIcons',
    category: 'forms',
    categorySection: 'switches',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Switch with Icon and Title',
    fileName: 'IconTitleSwitch',
    category: 'forms',
    categorySection: 'switches',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Comment Box with Preview',
    fileName: 'WritePreviewAction',
    category: 'forms',
    categorySection: 'textareas',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Comment Box',
    fileName: 'AvatarNameContentAction',
    category: 'forms',
    categorySection: 'textareas',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Comment Box Floating',
    fileName: 'AvatarOutContentAction',
    category: 'forms',
    categorySection: 'textareas',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Comment Box Minimal',
    fileName: 'TitleContentMessage',
    category: 'forms',
    categorySection: 'textareas',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Top Navbar with Swippable Drawer on Smaller Screens',
    fileName: 'TopNavBarWithLogo',
    category: 'shells',
    categorySection: 'navbars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Top Navbar with Underline Tabs',
    fileName: 'TopNavBarWithUnderLineTabs',
    category: 'shells',
    categorySection: 'navbars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Responsive Sidebar',
    fileName: 'FullSideBar',
    category: 'shells',
    categorySection: 'sidebars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'React Navigation compatible Tabbar with Underline',
    fileName: 'TabBar',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Progressive Tabbar with Underline Indicator',
    fileName: 'TabBarSecondExample',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Swippable Tabbar Support Gesture Drag',
    fileName: 'TabBarSwippable',
    category: 'shells',
    categorySection: 'tabbars',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Email Preferences',
    fileName: 'LocationNotification',
    category: 'user',
    categorySection: 'preferences',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  {
    name: 'Employees Status Tracker',
    fileName: 'StatusTracker',
    category: 'user',
    categorySection: 'events',
    moveFilesToFolder: [{ file: '', to: '' }],
  },
  ...MISSING_COMPONENTS,
].map((item) => {
  return { ...item, isOSS: OSS_COMPONENTS.includes(item.fileName) }
})
