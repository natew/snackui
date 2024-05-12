import React from 'react'
import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { TextInput } from 'react-native'
export declare const Input: import('@tamagui/core').TamaguiComponent<
  Omit<
    import('@tamagui/core').GetFinalProps<
      import('@tamagui/core').TamaguiComponentPropsBaseBase &
        import('react-native').TextInputProps,
      import('@tamagui/core').StackStyleBase,
      {
        size?: import('@tamagui/core').SizeTokens | undefined
        disabled?: boolean | undefined
        unstyled?: boolean | undefined
      }
    >,
    | 'theme'
    | 'debug'
    | 'accept'
    | 'acceptCharset'
    | 'action'
    | 'allowFullScreen'
    | 'allowTransparency'
    | 'alt'
    | 'as'
    | 'async'
    | 'autoComplete'
    | 'autoPlay'
    | 'capture'
    | 'cellPadding'
    | 'cellSpacing'
    | 'charSet'
    | 'challenge'
    | 'checked'
    | 'cite'
    | 'classID'
    | 'cols'
    | 'colSpan'
    | 'controls'
    | 'coords'
    | 'crossOrigin'
    | 'data'
    | 'dateTime'
    | 'default'
    | 'defer'
    | 'disabled'
    | 'download'
    | 'encType'
    | 'form'
    | 'formAction'
    | 'formEncType'
    | 'formMethod'
    | 'formNoValidate'
    | 'formTarget'
    | 'frameBorder'
    | 'headers'
    | 'height'
    | 'high'
    | 'href'
    | 'hrefLang'
    | 'htmlFor'
    | 'httpEquiv'
    | 'integrity'
    | 'keyParams'
    | 'keyType'
    | 'kind'
    | 'label'
    | 'list'
    | 'loop'
    | 'low'
    | 'manifest'
    | 'marginHeight'
    | 'marginWidth'
    | 'max'
    | 'maxLength'
    | 'media'
    | 'mediaGroup'
    | 'method'
    | 'min'
    | 'minLength'
    | 'multiple'
    | 'muted'
    | 'name'
    | 'noValidate'
    | 'open'
    | 'optimum'
    | 'pattern'
    | 'placeholder'
    | 'playsInline'
    | 'poster'
    | 'preload'
    | 'readOnly'
    | 'required'
    | 'reversed'
    | 'rows'
    | 'rowSpan'
    | 'sandbox'
    | 'scope'
    | 'scoped'
    | 'scrolling'
    | 'seamless'
    | 'selected'
    | 'shape'
    | 'sizes'
    | 'span'
    | 'src'
    | 'srcDoc'
    | 'srcLang'
    | 'srcSet'
    | 'start'
    | 'step'
    | 'summary'
    | 'target'
    | 'type'
    | 'useMap'
    | 'value'
    | 'width'
    | 'wmode'
    | 'wrap'
    | 'grid'
    | 'group'
    | 'separator'
    | `$${string}`
    | `$${number}`
    | `$group-${string}`
    | `$group-${number}`
    | `$group-${string}-hover`
    | `$group-${string}-press`
    | `$group-${string}-focus`
    | `$group-${string}-focusVisible`
    | `$group-${number}-hover`
    | `$group-${number}-press`
    | `$group-${number}-focus`
    | `$group-${number}-focusVisible`
    | `$theme-${string}`
    | `$theme-${number}`
    | 'className'
    | 'children'
    | 'hitSlop'
    | 'pointerEvents'
    | 'display'
    | 'onStartShouldSetResponder'
    | 'onLayout'
    | 'rel'
    | 'dir'
    | 'focusable'
    | 'onMoveShouldSetResponder'
    | 'onResponderEnd'
    | 'onResponderGrant'
    | 'onResponderReject'
    | 'onResponderMove'
    | 'onResponderRelease'
    | 'onResponderStart'
    | 'onResponderTerminationRequest'
    | 'onResponderTerminate'
    | 'onStartShouldSetResponderCapture'
    | 'onMoveShouldSetResponderCapture'
    | 'style'
    | 'id'
    | 'removeClippedSubviews'
    | 'testID'
    | 'nativeID'
    | 'collapsable'
    | 'needsOffscreenAlphaCompositing'
    | 'renderToHardwareTextureAndroid'
    | 'shouldRasterizeIOS'
    | 'isTVSelectable'
    | 'hasTVPreferredFocus'
    | 'tvParallaxProperties'
    | 'tvParallaxShiftDistanceX'
    | 'tvParallaxShiftDistanceY'
    | 'tvParallaxTiltAngle'
    | 'tvParallaxMagnification'
    | 'onTouchStart'
    | 'onTouchMove'
    | 'onTouchEnd'
    | 'onTouchCancel'
    | 'onTouchEndCapture'
    | 'onPointerEnter'
    | 'onPointerEnterCapture'
    | 'onPointerLeave'
    | 'onPointerLeaveCapture'
    | 'onPointerMove'
    | 'onPointerMoveCapture'
    | 'onPointerCancel'
    | 'onPointerCancelCapture'
    | 'onPointerDown'
    | 'onPointerDownCapture'
    | 'onPointerUp'
    | 'onPointerUpCapture'
    | 'accessible'
    | 'accessibilityActions'
    | 'accessibilityLabel'
    | 'aria-label'
    | 'accessibilityRole'
    | 'accessibilityState'
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-disabled'
    | 'aria-expanded'
    | 'aria-selected'
    | 'aria-labelledby'
    | 'accessibilityHint'
    | 'accessibilityValue'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'onAccessibilityAction'
    | 'importantForAccessibility'
    | 'aria-hidden'
    | 'aria-live'
    | 'aria-modal'
    | 'role'
    | 'accessibilityLiveRegion'
    | 'accessibilityLabelledBy'
    | 'accessibilityElementsHidden'
    | 'accessibilityViewIsModal'
    | 'onAccessibilityEscape'
    | 'onAccessibilityTap'
    | 'onMagicTap'
    | 'accessibilityIgnoresInvertColors'
    | 'accessibilityLanguage'
    | 'x'
    | 'y'
    | 'perspective'
    | 'scale'
    | 'scaleX'
    | 'scaleY'
    | 'skewX'
    | 'skewY'
    | 'matrix'
    | 'rotate'
    | 'rotateY'
    | 'rotateX'
    | 'rotateZ'
    | 'contain'
    | 'touchAction'
    | 'cursor'
    | 'outlineColor'
    | 'outlineOffset'
    | 'outlineStyle'
    | 'outlineWidth'
    | 'userSelect'
    | 'scrollbarWidth'
    | 'space'
    | 'spaceDirection'
    | 'animation'
    | 'animateOnly'
    | 'animatePresence'
    | 'transformOrigin'
    | 'filter'
    | 'backdropFilter'
    | 'mixBlendMode'
    | 'backgroundImage'
    | 'backgroundOrigin'
    | 'backgroundPosition'
    | 'backgroundRepeat'
    | 'backgroundSize'
    | 'backgroundColor'
    | 'backgroundClip'
    | 'backgroundBlendMode'
    | 'backgroundAttachment'
    | 'background'
    | 'clipPath'
    | 'caretColor'
    | 'transformStyle'
    | 'mask'
    | 'maskImage'
    | 'textEmphasis'
    | 'borderImage'
    | 'float'
    | 'content'
    | 'overflowBlock'
    | 'overflowInline'
    | 'maskBorder'
    | 'maskBorderMode'
    | 'maskBorderOutset'
    | 'maskBorderRepeat'
    | 'maskBorderSlice'
    | 'maskBorderSource'
    | 'maskBorderWidth'
    | 'maskClip'
    | 'maskComposite'
    | 'maskMode'
    | 'maskOrigin'
    | 'maskPosition'
    | 'maskRepeat'
    | 'maskSize'
    | 'maskType'
    | 'borderInlineColor'
    | 'borderInlineStartColor'
    | 'borderInlineEndColor'
    | 'borderBlockWidth'
    | 'borderBlockStartWidth'
    | 'borderBlockEndWidth'
    | 'borderInlineWidth'
    | 'borderInlineStartWidth'
    | 'borderInlineEndWidth'
    | 'borderBlockStyle'
    | 'borderBlockStartStyle'
    | 'borderBlockEndStyle'
    | 'borderInlineStyle'
    | 'borderInlineStartStyle'
    | 'borderInlineEndStyle'
    | 'marginBlock'
    | 'marginBlockStart'
    | 'marginBlockEnd'
    | 'marginInline'
    | 'marginInlineStart'
    | 'marginInlineEnd'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'objectFit'
    | 'verticalAlign'
    | 'insetBlock'
    | 'insetBlockStart'
    | 'insetBlockEnd'
    | 'insetInline'
    | 'insetInlineStart'
    | 'insetInlineEnd'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
    | 'backfaceVisibility'
    | 'borderBlockColor'
    | 'borderBlockEndColor'
    | 'borderBlockStartColor'
    | 'borderBottomColor'
    | 'borderBottomEndRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderBottomStartRadius'
    | 'borderColor'
    | 'borderCurve'
    | 'borderEndColor'
    | 'borderEndEndRadius'
    | 'borderEndStartRadius'
    | 'borderLeftColor'
    | 'borderRadius'
    | 'borderRightColor'
    | 'borderStartColor'
    | 'borderStartEndRadius'
    | 'borderStartStartRadius'
    | 'borderStyle'
    | 'borderTopColor'
    | 'borderTopEndRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderTopStartRadius'
    | 'opacity'
    | 'alignContent'
    | 'alignItems'
    | 'alignSelf'
    | 'aspectRatio'
    | 'borderBottomWidth'
    | 'borderEndWidth'
    | 'borderLeftWidth'
    | 'borderRightWidth'
    | 'borderStartWidth'
    | 'borderTopWidth'
    | 'borderWidth'
    | 'bottom'
    | 'end'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'rowGap'
    | 'gap'
    | 'columnGap'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'justifyContent'
    | 'left'
    | 'margin'
    | 'marginBottom'
    | 'marginEnd'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginStart'
    | 'marginTop'
    | 'marginVertical'
    | 'maxHeight'
    | 'maxWidth'
    | 'minHeight'
    | 'minWidth'
    | 'overflow'
    | 'padding'
    | 'paddingBottom'
    | 'paddingEnd'
    | 'paddingHorizontal'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingStart'
    | 'paddingTop'
    | 'paddingVertical'
    | 'position'
    | 'right'
    | 'top'
    | 'zIndex'
    | 'direction'
    | 'shadowColor'
    | 'shadowOffset'
    | 'shadowOpacity'
    | 'shadowRadius'
    | 'transform'
    | 'transformMatrix'
    | 'rotation'
    | 'translateX'
    | 'translateY'
    | 'asChild'
    | 'dangerouslySetInnerHTML'
    | 'themeShallow'
    | 'themeInverse'
    | 'tag'
    | 'untilMeasured'
    | 'componentName'
    | 'tabIndex'
    | 'disableOptimization'
    | 'forceStyle'
    | 'disableClassName'
    | 'onPress'
    | 'onLongPress'
    | 'onPressIn'
    | 'onPressOut'
    | 'onHoverIn'
    | 'onHoverOut'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseDown'
    | 'onMouseUp'
    | 'onFocus'
    | 'onBlur'
    | 'hoverStyle'
    | 'pressStyle'
    | 'focusStyle'
    | 'focusVisibleStyle'
    | 'disabledStyle'
    | 'exitStyle'
    | 'enterStyle'
    | 'ref'
    | 'key'
    | 'defaultChecked'
    | 'defaultValue'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
    | 'accessKey'
    | 'autoFocus'
    | 'contentEditable'
    | 'contextMenu'
    | 'draggable'
    | 'hidden'
    | 'lang'
    | 'nonce'
    | 'slot'
    | 'spellCheck'
    | 'title'
    | 'translate'
    | 'radioGroup'
    | 'about'
    | 'datatype'
    | 'inlist'
    | 'prefix'
    | 'property'
    | 'resource'
    | 'rev'
    | 'typeof'
    | 'vocab'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'autoSave'
    | 'color'
    | 'itemProp'
    | 'itemScope'
    | 'itemType'
    | 'itemID'
    | 'itemRef'
    | 'results'
    | 'security'
    | 'unselectable'
    | 'inputMode'
    | 'is'
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-braillelabel'
    | 'aria-brailleroledescription'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colindextext'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedby'
    | 'aria-description'
    | 'aria-details'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-flowto'
    | 'aria-grabbed'
    | 'aria-haspopup'
    | 'aria-invalid'
    | 'aria-keyshortcuts'
    | 'aria-level'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-pressed'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowindextext'
    | 'aria-rowspan'
    | 'aria-setsize'
    | 'aria-sort'
    | 'onCopy'
    | 'onCopyCapture'
    | 'onCut'
    | 'onCutCapture'
    | 'onPaste'
    | 'onPasteCapture'
    | 'onCompositionEnd'
    | 'onCompositionEndCapture'
    | 'onCompositionStart'
    | 'onCompositionStartCapture'
    | 'onCompositionUpdate'
    | 'onCompositionUpdateCapture'
    | 'onFocusCapture'
    | 'onBlurCapture'
    | 'onChange'
    | 'onChangeCapture'
    | 'onBeforeInput'
    | 'onBeforeInputCapture'
    | 'onInput'
    | 'onInputCapture'
    | 'onReset'
    | 'onResetCapture'
    | 'onSubmit'
    | 'onSubmitCapture'
    | 'onInvalid'
    | 'onInvalidCapture'
    | 'onLoad'
    | 'onLoadCapture'
    | 'onError'
    | 'onErrorCapture'
    | 'onKeyDown'
    | 'onKeyDownCapture'
    | 'onKeyPress'
    | 'onKeyPressCapture'
    | 'onKeyUp'
    | 'onKeyUpCapture'
    | 'onAbort'
    | 'onAbortCapture'
    | 'onCanPlay'
    | 'onCanPlayCapture'
    | 'onCanPlayThrough'
    | 'onCanPlayThroughCapture'
    | 'onDurationChange'
    | 'onDurationChangeCapture'
    | 'onEmptied'
    | 'onEmptiedCapture'
    | 'onEncrypted'
    | 'onEncryptedCapture'
    | 'onEnded'
    | 'onEndedCapture'
    | 'onLoadedData'
    | 'onLoadedDataCapture'
    | 'onLoadedMetadata'
    | 'onLoadedMetadataCapture'
    | 'onLoadStart'
    | 'onLoadStartCapture'
    | 'onPause'
    | 'onPauseCapture'
    | 'onPlay'
    | 'onPlayCapture'
    | 'onPlaying'
    | 'onPlayingCapture'
    | 'onProgress'
    | 'onProgressCapture'
    | 'onRateChange'
    | 'onRateChangeCapture'
    | 'onResize'
    | 'onResizeCapture'
    | 'onSeeked'
    | 'onSeekedCapture'
    | 'onSeeking'
    | 'onSeekingCapture'
    | 'onStalled'
    | 'onStalledCapture'
    | 'onSuspend'
    | 'onSuspendCapture'
    | 'onTimeUpdate'
    | 'onTimeUpdateCapture'
    | 'onVolumeChange'
    | 'onVolumeChangeCapture'
    | 'onWaiting'
    | 'onWaitingCapture'
    | 'onAuxClick'
    | 'onAuxClickCapture'
    | 'onClick'
    | 'onClickCapture'
    | 'onContextMenu'
    | 'onContextMenuCapture'
    | 'onDoubleClick'
    | 'onDoubleClickCapture'
    | 'onDrag'
    | 'onDragCapture'
    | 'onDragEnd'
    | 'onDragEndCapture'
    | 'onDragEnter'
    | 'onDragEnterCapture'
    | 'onDragExit'
    | 'onDragExitCapture'
    | 'onDragLeave'
    | 'onDragLeaveCapture'
    | 'onDragOver'
    | 'onDragOverCapture'
    | 'onDragStart'
    | 'onDragStartCapture'
    | 'onDrop'
    | 'onDropCapture'
    | 'onMouseDownCapture'
    | 'onMouseMove'
    | 'onMouseMoveCapture'
    | 'onMouseOut'
    | 'onMouseOutCapture'
    | 'onMouseOver'
    | 'onMouseOverCapture'
    | 'onMouseUpCapture'
    | 'onSelect'
    | 'onSelectCapture'
    | 'onTouchCancelCapture'
    | 'onTouchMoveCapture'
    | 'onTouchStartCapture'
    | 'onPointerOver'
    | 'onPointerOverCapture'
    | 'onPointerOut'
    | 'onPointerOutCapture'
    | 'onGotPointerCapture'
    | 'onGotPointerCaptureCapture'
    | 'onLostPointerCapture'
    | 'onLostPointerCaptureCapture'
    | 'onScroll'
    | 'onScrollCapture'
    | 'onWheel'
    | 'onWheelCapture'
    | 'onAnimationStart'
    | 'onAnimationStartCapture'
    | 'onAnimationEnd'
    | 'onAnimationEndCapture'
    | 'onAnimationIteration'
    | 'onAnimationIterationCapture'
    | 'onTransitionEnd'
    | 'onTransitionEndCapture'
    | 'secureTextEntry'
    | 'onChangeText'
    | 'editable'
    | 'enterKeyHint'
    | 'keyboardType'
    | 'placeholderTextColor'
    | 'selectionColor'
    | 'numberOfLines'
    | 'allowFontScaling'
    | 'blurOnSubmit'
    | 'caretHidden'
    | 'contextMenuHidden'
    | 'multiline'
    | 'onContentSizeChange'
    | 'onEndEditing'
    | 'onSelectionChange'
    | 'onSubmitEditing'
    | 'onTextInput'
    | 'returnKeyType'
    | 'selectTextOnFocus'
    | 'selection'
    | 'textAlign'
    | 'inputAccessoryViewID'
    | 'maxFontSizeMultiplier'
    | 'clearButtonMode'
    | 'clearTextOnFocus'
    | 'dataDetectorTypes'
    | 'enablesReturnKeyAutomatically'
    | 'keyboardAppearance'
    | 'passwordRules'
    | 'rejectResponderTermination'
    | 'selectionState'
    | 'textContentType'
    | 'scrollEnabled'
    | 'lineBreakStrategyIOS'
    | 'smartInsertDelete'
    | 'cursorColor'
    | 'importantForAutofill'
    | 'disableFullscreenUI'
    | 'inlineImageLeft'
    | 'inlineImagePadding'
    | 'returnKeyLabel'
    | 'textBreakStrategy'
    | 'underlineColorAndroid'
    | 'textAlignVertical'
    | 'showSoftInputOnFocus'
    | 'fontFamily'
    | 'fontSize'
    | 'fontStyle'
    | 'fontWeight'
    | 'letterSpacing'
    | 'lineHeight'
    | 'textDecorationLine'
    | 'textDecorationStyle'
    | 'textDecorationColor'
    | 'textTransform'
    | 'fontVariant'
    | 'textOverflow'
    | 'whiteSpace'
    | 'wordWrap'
    | 'clip'
    | 'all'
    | 'inset'
    | 'fill'
    | 'stroke'
    | 'WebkitLineClamp'
    | 'WebkitBoxOrient'
    | 'borderBottomStyle'
    | 'borderTopStyle'
    | 'borderLeftStyle'
    | 'borderRightStyle'
    | 'overflowX'
    | 'overflowY'
    | 'boxSizing'
    | 'boxShadow'
    | 'animationIterationCount'
    | 'borderImageOutset'
    | 'borderImageSlice'
    | 'borderImageWidth'
    | 'columnCount'
    | 'gridRow'
    | 'gridRowEnd'
    | 'gridRowGap'
    | 'gridRowStart'
    | 'gridColumn'
    | 'gridColumnEnd'
    | 'gridColumnGap'
    | 'gridColumnStart'
    | 'lineClamp'
    | 'order'
    | 'orphans'
    | 'tabSize'
    | 'widows'
    | 'zoom'
    | 'accentColor'
    | 'alignTracks'
    | 'animationComposition'
    | 'animationDelay'
    | 'animationDirection'
    | 'animationDuration'
    | 'animationFillMode'
    | 'animationName'
    | 'animationPlayState'
    | 'animationTimeline'
    | 'animationTimingFunction'
    | 'appearance'
    | 'backgroundPositionX'
    | 'backgroundPositionY'
    | 'blockOverflow'
    | 'borderCollapse'
    | 'borderImageRepeat'
    | 'borderImageSource'
    | 'borderSpacing'
    | 'boxDecorationBreak'
    | 'breakAfter'
    | 'breakBefore'
    | 'breakInside'
    | 'captionSide'
    | 'caretShape'
    | 'clear'
    | 'colorAdjust'
    | 'colorScheme'
    | 'columnFill'
    | 'columnRuleColor'
    | 'columnRuleStyle'
    | 'columnRuleWidth'
    | 'columnSpan'
    | 'columnWidth'
    | 'containIntrinsicBlockSize'
    | 'containIntrinsicHeight'
    | 'containIntrinsicInlineSize'
    | 'containIntrinsicWidth'
    | 'containerName'
    | 'containerType'
    | 'contentVisibility'
    | 'counterIncrement'
    | 'counterReset'
    | 'counterSet'
    | 'emptyCells'
    | 'fontFeatureSettings'
    | 'fontKerning'
    | 'fontLanguageOverride'
    | 'fontOpticalSizing'
    | 'fontPalette'
    | 'fontSizeAdjust'
    | 'fontSmooth'
    | 'fontStretch'
    | 'fontSynthesis'
    | 'fontVariantAlternates'
    | 'fontVariantCaps'
    | 'fontVariantEastAsian'
    | 'fontVariantEmoji'
    | 'fontVariantLigatures'
    | 'fontVariantNumeric'
    | 'fontVariantPosition'
    | 'fontVariationSettings'
    | 'forcedColorAdjust'
    | 'gridAutoColumns'
    | 'gridAutoFlow'
    | 'gridAutoRows'
    | 'gridTemplateAreas'
    | 'gridTemplateColumns'
    | 'gridTemplateRows'
    | 'hangingPunctuation'
    | 'hyphenateCharacter'
    | 'hyphenateLimitChars'
    | 'hyphens'
    | 'imageOrientation'
    | 'imageRendering'
    | 'imageResolution'
    | 'initialLetter'
    | 'inputSecurity'
    | 'isolation'
    | 'justifyItems'
    | 'justifySelf'
    | 'justifyTracks'
    | 'lineBreak'
    | 'lineHeightStep'
    | 'listStyleImage'
    | 'listStylePosition'
    | 'listStyleType'
    | 'marginTrim'
    | 'mathDepth'
    | 'mathShift'
    | 'mathStyle'
    | 'maxLines'
    | 'motionDistance'
    | 'motionPath'
    | 'motionRotation'
    | 'objectPosition'
    | 'offsetAnchor'
    | 'offsetDistance'
    | 'offsetPath'
    | 'offsetPosition'
    | 'offsetRotate'
    | 'offsetRotation'
    | 'overflowAnchor'
    | 'overflowClipBox'
    | 'overflowClipMargin'
    | 'overflowWrap'
    | 'overscrollBehaviorBlock'
    | 'overscrollBehaviorInline'
    | 'overscrollBehaviorX'
    | 'overscrollBehaviorY'
    | 'page'
    | 'pageBreakAfter'
    | 'pageBreakBefore'
    | 'pageBreakInside'
    | 'paintOrder'
    | 'perspectiveOrigin'
    | 'printColorAdjust'
    | 'quotes'
    | 'resize'
    | 'rubyAlign'
    | 'rubyMerge'
    | 'rubyPosition'
    | 'scrollBehavior'
    | 'scrollMarginBlockEnd'
    | 'scrollMarginBlockStart'
    | 'scrollMarginBottom'
    | 'scrollMarginInlineEnd'
    | 'scrollMarginInlineStart'
    | 'scrollMarginLeft'
    | 'scrollMarginRight'
    | 'scrollMarginTop'
    | 'scrollPaddingBlockEnd'
    | 'scrollPaddingBlockStart'
    | 'scrollPaddingBottom'
    | 'scrollPaddingInlineEnd'
    | 'scrollPaddingInlineStart'
    | 'scrollPaddingLeft'
    | 'scrollPaddingRight'
    | 'scrollPaddingTop'
    | 'scrollSnapAlign'
    | 'scrollSnapMarginBottom'
    | 'scrollSnapMarginLeft'
    | 'scrollSnapMarginRight'
    | 'scrollSnapMarginTop'
    | 'scrollSnapStop'
    | 'scrollSnapType'
    | 'scrollTimelineAxis'
    | 'scrollTimelineName'
    | 'scrollbarColor'
    | 'scrollbarGutter'
    | 'shapeImageThreshold'
    | 'shapeMargin'
    | 'shapeOutside'
    | 'tableLayout'
    | 'textAlignLast'
    | 'textCombineUpright'
    | 'textDecorationSkip'
    | 'textDecorationSkipInk'
    | 'textDecorationThickness'
    | 'textEmphasisColor'
    | 'textEmphasisPosition'
    | 'textEmphasisStyle'
    | 'textIndent'
    | 'textJustify'
    | 'textOrientation'
    | 'textRendering'
    | 'textShadow'
    | 'textSizeAdjust'
    | 'textUnderlineOffset'
    | 'textUnderlinePosition'
    | 'transformBox'
    | 'transitionDelay'
    | 'transitionDuration'
    | 'transitionProperty'
    | 'transitionTimingFunction'
    | 'unicodeBidi'
    | 'viewTransitionName'
    | 'visibility'
    | 'willChange'
    | 'wordBreak'
    | 'wordSpacing'
    | 'writingMode'
    | 'border'
    | 'borderBlock'
    | 'borderBlockEnd'
    | 'borderBlockStart'
    | 'borderBottom'
    | 'borderInline'
    | 'borderInlineEnd'
    | 'borderInlineStart'
    | 'borderLeft'
    | 'borderRight'
    | 'borderTop'
    | 'caret'
    | 'columnRule'
    | 'columns'
    | 'containIntrinsicSize'
    | 'container'
    | 'flexFlow'
    | 'font'
    | 'gridArea'
    | 'gridTemplate'
    | 'listStyle'
    | 'motion'
    | 'offset'
    | 'outline'
    | 'overscrollBehavior'
    | 'placeContent'
    | 'placeItems'
    | 'placeSelf'
    | 'scrollMargin'
    | 'scrollMarginBlock'
    | 'scrollMarginInline'
    | 'scrollPadding'
    | 'scrollPaddingBlock'
    | 'scrollPaddingInline'
    | 'scrollSnapMargin'
    | 'scrollTimeline'
    | 'textDecoration'
    | 'transition'
    | 'MozAnimationDelay'
    | 'MozAnimationDirection'
    | 'MozAnimationDuration'
    | 'MozAnimationFillMode'
    | 'MozAnimationIterationCount'
    | 'MozAnimationName'
    | 'MozAnimationPlayState'
    | 'MozAnimationTimingFunction'
    | 'MozAppearance'
    | 'MozBackfaceVisibility'
    | 'MozBinding'
    | 'MozBorderBottomColors'
    | 'MozBorderEndColor'
    | 'MozBorderEndStyle'
    | 'MozBorderEndWidth'
    | 'MozBorderLeftColors'
    | 'MozBorderRightColors'
    | 'MozBorderStartColor'
    | 'MozBorderStartStyle'
    | 'MozBorderTopColors'
    | 'MozBoxSizing'
    | 'MozColumnCount'
    | 'MozColumnFill'
    | 'MozColumnRuleColor'
    | 'MozColumnRuleStyle'
    | 'MozColumnRuleWidth'
    | 'MozColumnWidth'
    | 'MozContextProperties'
    | 'MozFontFeatureSettings'
    | 'MozFontLanguageOverride'
    | 'MozHyphens'
    | 'MozImageRegion'
    | 'MozMarginEnd'
    | 'MozMarginStart'
    | 'MozOrient'
    | 'MozOsxFontSmoothing'
    | 'MozPaddingEnd'
    | 'MozPaddingStart'
    | 'MozPerspective'
    | 'MozPerspectiveOrigin'
    | 'MozStackSizing'
    | 'MozTabSize'
    | 'MozTextBlink'
    | 'MozTextSizeAdjust'
    | 'MozTransformOrigin'
    | 'MozTransformStyle'
    | 'MozTransitionDelay'
    | 'MozTransitionDuration'
    | 'MozTransitionProperty'
    | 'MozTransitionTimingFunction'
    | 'MozUserFocus'
    | 'MozUserModify'
    | 'MozUserSelect'
    | 'MozWindowDragging'
    | 'MozWindowShadow'
    | 'msAccelerator'
    | 'msBlockProgression'
    | 'msContentZoomChaining'
    | 'msContentZoomLimitMax'
    | 'msContentZoomLimitMin'
    | 'msContentZoomSnapPoints'
    | 'msContentZoomSnapType'
    | 'msContentZooming'
    | 'msFilter'
    | 'msFlexDirection'
    | 'msFlexPositive'
    | 'msFlowFrom'
    | 'msFlowInto'
    | 'msGridColumns'
    | 'msGridRows'
    | 'msHighContrastAdjust'
    | 'msHyphenateLimitChars'
    | 'msHyphenateLimitLines'
    | 'msHyphenateLimitZone'
    | 'msHyphens'
    | 'msImeAlign'
    | 'msLineBreak'
    | 'msOrder'
    | 'msOverflowStyle'
    | 'msOverflowX'
    | 'msOverflowY'
    | 'msScrollChaining'
    | 'msScrollLimitXMax'
    | 'msScrollLimitXMin'
    | 'msScrollLimitYMax'
    | 'msScrollLimitYMin'
    | 'msScrollRails'
    | 'msScrollSnapPointsX'
    | 'msScrollSnapPointsY'
    | 'msScrollSnapType'
    | 'msScrollTranslation'
    | 'msScrollbar3dlightColor'
    | 'msScrollbarArrowColor'
    | 'msScrollbarBaseColor'
    | 'msScrollbarDarkshadowColor'
    | 'msScrollbarFaceColor'
    | 'msScrollbarHighlightColor'
    | 'msScrollbarShadowColor'
    | 'msScrollbarTrackColor'
    | 'msTextAutospace'
    | 'msTextCombineHorizontal'
    | 'msTextOverflow'
    | 'msTouchAction'
    | 'msTouchSelect'
    | 'msTransform'
    | 'msTransformOrigin'
    | 'msTransitionDelay'
    | 'msTransitionDuration'
    | 'msTransitionProperty'
    | 'msTransitionTimingFunction'
    | 'msUserSelect'
    | 'msWordBreak'
    | 'msWrapFlow'
    | 'msWrapMargin'
    | 'msWrapThrough'
    | 'msWritingMode'
    | 'WebkitAlignContent'
    | 'WebkitAlignItems'
    | 'WebkitAlignSelf'
    | 'WebkitAnimationDelay'
    | 'WebkitAnimationDirection'
    | 'WebkitAnimationDuration'
    | 'WebkitAnimationFillMode'
    | 'WebkitAnimationIterationCount'
    | 'WebkitAnimationName'
    | 'WebkitAnimationPlayState'
    | 'WebkitAnimationTimingFunction'
    | 'WebkitAppearance'
    | 'WebkitBackdropFilter'
    | 'WebkitBackfaceVisibility'
    | 'WebkitBackgroundClip'
    | 'WebkitBackgroundOrigin'
    | 'WebkitBackgroundSize'
    | 'WebkitBorderBeforeColor'
    | 'WebkitBorderBeforeStyle'
    | 'WebkitBorderBeforeWidth'
    | 'WebkitBorderBottomLeftRadius'
    | 'WebkitBorderBottomRightRadius'
    | 'WebkitBorderImageSlice'
    | 'WebkitBorderTopLeftRadius'
    | 'WebkitBorderTopRightRadius'
    | 'WebkitBoxDecorationBreak'
    | 'WebkitBoxReflect'
    | 'WebkitBoxShadow'
    | 'WebkitBoxSizing'
    | 'WebkitClipPath'
    | 'WebkitColumnCount'
    | 'WebkitColumnFill'
    | 'WebkitColumnRuleColor'
    | 'WebkitColumnRuleStyle'
    | 'WebkitColumnRuleWidth'
    | 'WebkitColumnSpan'
    | 'WebkitColumnWidth'
    | 'WebkitFilter'
    | 'WebkitFlexBasis'
    | 'WebkitFlexDirection'
    | 'WebkitFlexGrow'
    | 'WebkitFlexShrink'
    | 'WebkitFlexWrap'
    | 'WebkitFontFeatureSettings'
    | 'WebkitFontKerning'
    | 'WebkitFontSmoothing'
    | 'WebkitFontVariantLigatures'
    | 'WebkitHyphenateCharacter'
    | 'WebkitHyphens'
    | 'WebkitInitialLetter'
    | 'WebkitJustifyContent'
    | 'WebkitLineBreak'
    | 'WebkitMarginEnd'
    | 'WebkitMarginStart'
    | 'WebkitMaskAttachment'
    | 'WebkitMaskBoxImageOutset'
    | 'WebkitMaskBoxImageRepeat'
    | 'WebkitMaskBoxImageSlice'
    | 'WebkitMaskBoxImageSource'
    | 'WebkitMaskBoxImageWidth'
    | 'WebkitMaskClip'
    | 'WebkitMaskComposite'
    | 'WebkitMaskImage'
    | 'WebkitMaskOrigin'
    | 'WebkitMaskPosition'
    | 'WebkitMaskPositionX'
    | 'WebkitMaskPositionY'
    | 'WebkitMaskRepeat'
    | 'WebkitMaskRepeatX'
    | 'WebkitMaskRepeatY'
    | 'WebkitMaskSize'
    | 'WebkitMaxInlineSize'
    | 'WebkitOrder'
    | 'WebkitOverflowScrolling'
    | 'WebkitPaddingEnd'
    | 'WebkitPaddingStart'
    | 'WebkitPerspective'
    | 'WebkitPerspectiveOrigin'
    | 'WebkitPrintColorAdjust'
    | 'WebkitRubyPosition'
    | 'WebkitScrollSnapType'
    | 'WebkitShapeMargin'
    | 'WebkitTapHighlightColor'
    | 'WebkitTextCombine'
    | 'WebkitTextDecorationColor'
    | 'WebkitTextDecorationLine'
    | 'WebkitTextDecorationSkip'
    | 'WebkitTextDecorationStyle'
    | 'WebkitTextEmphasisColor'
    | 'WebkitTextEmphasisPosition'
    | 'WebkitTextEmphasisStyle'
    | 'WebkitTextFillColor'
    | 'WebkitTextOrientation'
    | 'WebkitTextSizeAdjust'
    | 'WebkitTextStrokeColor'
    | 'WebkitTextStrokeWidth'
    | 'WebkitTextUnderlinePosition'
    | 'WebkitTouchCallout'
    | 'WebkitTransform'
    | 'WebkitTransformOrigin'
    | 'WebkitTransformStyle'
    | 'WebkitTransitionDelay'
    | 'WebkitTransitionDuration'
    | 'WebkitTransitionProperty'
    | 'WebkitTransitionTimingFunction'
    | 'WebkitUserModify'
    | 'WebkitUserSelect'
    | 'WebkitWritingMode'
    | 'MozAnimation'
    | 'MozBorderImage'
    | 'MozColumnRule'
    | 'MozColumns'
    | 'MozTransition'
    | 'msContentZoomLimit'
    | 'msContentZoomSnap'
    | 'msFlex'
    | 'msScrollLimit'
    | 'msScrollSnapX'
    | 'msScrollSnapY'
    | 'msTransition'
    | 'WebkitAnimation'
    | 'WebkitBorderBefore'
    | 'WebkitBorderImage'
    | 'WebkitBorderRadius'
    | 'WebkitColumnRule'
    | 'WebkitColumns'
    | 'WebkitFlex'
    | 'WebkitFlexFlow'
    | 'WebkitMask'
    | 'WebkitMaskBoxImage'
    | 'WebkitTextEmphasis'
    | 'WebkitTextStroke'
    | 'WebkitTransition'
    | 'azimuth'
    | 'boxAlign'
    | 'boxDirection'
    | 'boxFlex'
    | 'boxFlexGroup'
    | 'boxLines'
    | 'boxOrdinalGroup'
    | 'boxOrient'
    | 'boxPack'
    | 'gridGap'
    | 'imeMode'
    | 'offsetBlock'
    | 'offsetBlockEnd'
    | 'offsetBlockStart'
    | 'offsetInline'
    | 'offsetInlineEnd'
    | 'offsetInlineStart'
    | 'scrollSnapCoordinate'
    | 'scrollSnapDestination'
    | 'scrollSnapPointsX'
    | 'scrollSnapPointsY'
    | 'scrollSnapTypeX'
    | 'scrollSnapTypeY'
    | 'KhtmlBoxAlign'
    | 'KhtmlBoxDirection'
    | 'KhtmlBoxFlex'
    | 'KhtmlBoxFlexGroup'
    | 'KhtmlBoxLines'
    | 'KhtmlBoxOrdinalGroup'
    | 'KhtmlBoxOrient'
    | 'KhtmlBoxPack'
    | 'KhtmlLineBreak'
    | 'KhtmlOpacity'
    | 'KhtmlUserSelect'
    | 'MozBackgroundClip'
    | 'MozBackgroundInlinePolicy'
    | 'MozBackgroundOrigin'
    | 'MozBackgroundSize'
    | 'MozBorderRadius'
    | 'MozBorderRadiusBottomleft'
    | 'MozBorderRadiusBottomright'
    | 'MozBorderRadiusTopleft'
    | 'MozBorderRadiusTopright'
    | 'MozBoxAlign'
    | 'MozBoxDirection'
    | 'MozBoxFlex'
    | 'MozBoxOrdinalGroup'
    | 'MozBoxOrient'
    | 'MozBoxPack'
    | 'MozBoxShadow'
    | 'MozFloatEdge'
    | 'MozForceBrokenImageIcon'
    | 'MozOpacity'
    | 'MozOutline'
    | 'MozOutlineColor'
    | 'MozOutlineRadius'
    | 'MozOutlineRadiusBottomleft'
    | 'MozOutlineRadiusBottomright'
    | 'MozOutlineRadiusTopleft'
    | 'MozOutlineRadiusTopright'
    | 'MozOutlineStyle'
    | 'MozOutlineWidth'
    | 'MozTextAlignLast'
    | 'MozTextDecorationColor'
    | 'MozTextDecorationLine'
    | 'MozTextDecorationStyle'
    | 'MozUserInput'
    | 'msImeMode'
    | 'OAnimation'
    | 'OAnimationDelay'
    | 'OAnimationDirection'
    | 'OAnimationDuration'
    | 'OAnimationFillMode'
    | 'OAnimationIterationCount'
    | 'OAnimationName'
    | 'OAnimationPlayState'
    | 'OAnimationTimingFunction'
    | 'OBackgroundSize'
    | 'OBorderImage'
    | 'OObjectFit'
    | 'OObjectPosition'
    | 'OTabSize'
    | 'OTextOverflow'
    | 'OTransform'
    | 'OTransformOrigin'
    | 'OTransition'
    | 'OTransitionDelay'
    | 'OTransitionDuration'
    | 'OTransitionProperty'
    | 'OTransitionTimingFunction'
    | 'WebkitBoxAlign'
    | 'WebkitBoxDirection'
    | 'WebkitBoxFlex'
    | 'WebkitBoxFlexGroup'
    | 'WebkitBoxLines'
    | 'WebkitBoxOrdinalGroup'
    | 'WebkitBoxPack'
    | 'WebkitScrollSnapPointsX'
    | 'WebkitScrollSnapPointsY'
    | 'alignmentBaseline'
    | 'baselineShift'
    | 'clipRule'
    | 'colorInterpolation'
    | 'colorRendering'
    | 'dominantBaseline'
    | 'fillOpacity'
    | 'fillRule'
    | 'floodColor'
    | 'floodOpacity'
    | 'glyphOrientationVertical'
    | 'lightingColor'
    | 'marker'
    | 'markerEnd'
    | 'markerMid'
    | 'markerStart'
    | 'shapeRendering'
    | 'stopColor'
    | 'stopOpacity'
    | 'strokeDasharray'
    | 'strokeDashoffset'
    | 'strokeLinecap'
    | 'strokeLinejoin'
    | 'strokeMiterlimit'
    | 'strokeOpacity'
    | 'strokeWidth'
    | 'textAnchor'
    | 'vectorEffect'
  > &
    import('@tamagui/core').StackNonStyleProps &
    import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase> &
    import('@tamagui/core').WithShorthands<
      import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase>
    > &
    import('@tamagui/core').WithPseudoProps<
      import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase> &
        import('@tamagui/core').WithShorthands<
          import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase>
        >
    > &
    import('@tamagui/core').WithMediaProps<
      import('@tamagui/core').WithThemeShorthandsAndPseudos<
        import('@tamagui/core').StackStyleBase,
        {}
      >
    > &
    Omit<
      React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>,
      | 'size'
      | 'value'
      | `$${string}`
      | `$${number}`
      | import('@tamagui/core').GroupMediaKeys
      | `$theme-${string}`
      | `$theme-${number}`
      | keyof import('@tamagui/core').StackStyleBase
      | keyof import('@tamagui/core').StackNonStyleProps
      | keyof import('@tamagui/core').WithPseudoProps<
          import('@tamagui/core').WithThemeValues<
            import('@tamagui/core').StackStyleBase
          > &
            import('@tamagui/core').WithShorthands<
              import('@tamagui/core').WithThemeValues<
                import('@tamagui/core').StackStyleBase
              >
            >
        >
    > &
    React.CSSProperties &
    Omit<
      import('react-native').TextInputProps,
      | 'inputMode'
      | 'secureTextEntry'
      | 'onChangeText'
      | 'editable'
      | 'enterKeyHint'
      | 'keyboardType'
      | 'placeholderTextColor'
      | 'selectionColor'
      | 'numberOfLines'
    > & {
      secureTextEntry?: boolean | undefined
      onChangeText?:
        | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
        | undefined
      editable?: boolean | undefined
      enterKeyHint?:
        | 'search'
        | 'done'
        | 'go'
        | 'next'
        | 'send'
        | 'enter'
        | 'previous'
        | undefined
      keyboardType?: import('react-native').KeyboardTypeOptions | undefined
      inputMode?: import('react-native').InputModeOptions | undefined
      placeholderTextColor?: import('@tamagui/core').ColorTokens | undefined
      selectionColor?: import('@tamagui/core').ColorTokens | undefined
      tag?:
        | 'object'
        | 'button'
        | 'search'
        | 'header'
        | 'summary'
        | 'menu'
        | 'article'
        | 'dialog'
        | 'figure'
        | 'form'
        | 'img'
        | 'main'
        | 'meter'
        | 'option'
        | 'table'
        | (string & {})
        | 'address'
        | 'aside'
        | 'footer'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'nav'
        | 'section'
        | 'blockquote'
        | 'dd'
        | 'div'
        | 'dl'
        | 'dt'
        | 'figcaption'
        | 'hr'
        | 'li'
        | 'ol'
        | 'ul'
        | 'p'
        | 'pre'
        | 'a'
        | 'abbr'
        | 'b'
        | 'bdi'
        | 'bdo'
        | 'br'
        | 'cite'
        | 'code'
        | 'data'
        | 'dfn'
        | 'em'
        | 'i'
        | 'kbd'
        | 'mark'
        | 'q'
        | 'rp'
        | 'rt'
        | 'rtc'
        | 'ruby'
        | 's'
        | 'samp'
        | 'small'
        | 'span'
        | 'strong'
        | 'sub'
        | 'sup'
        | 'time'
        | 'u'
        | 'var'
        | 'wbr'
        | 'area'
        | 'audio'
        | 'map'
        | 'track'
        | 'video'
        | 'embed'
        | 'param'
        | 'picture'
        | 'source'
        | 'canvas'
        | 'noscript'
        | 'script'
        | 'del'
        | 'ins'
        | 'caption'
        | 'col'
        | 'colgroup'
        | 'thead'
        | 'tbody'
        | 'td'
        | 'th'
        | 'tr'
        | 'datalist'
        | 'fieldset'
        | 'input'
        | 'label'
        | 'legend'
        | 'optgroup'
        | 'output'
        | 'progress'
        | 'select'
        | 'textarea'
        | 'details'
        | 'template'
        | undefined
      multiline?: boolean | undefined
      numberOfLines?: number | undefined
    },
  TextInput,
  import('@tamagui/core').TamaguiComponentPropsBaseBase &
    import('react-native').TextInputProps &
    import('@tamagui/core').StackNonStyleProps &
    import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase> &
    import('@tamagui/core').WithShorthands<
      import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase>
    > &
    import('@tamagui/core').WithPseudoProps<
      import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase> &
        import('@tamagui/core').WithShorthands<
          import('@tamagui/core').WithThemeValues<import('@tamagui/core').StackStyleBase>
        >
    > &
    import('@tamagui/core').WithMediaProps<
      import('@tamagui/core').WithThemeShorthandsAndPseudos<
        import('@tamagui/core').StackStyleBase,
        {}
      >
    > &
    Omit<
      React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>,
      | 'size'
      | `$${string}`
      | `$${number}`
      | import('@tamagui/core').GroupMediaKeys
      | `$theme-${string}`
      | `$theme-${number}`
      | 'value'
      | keyof import('@tamagui/core').StackStyleBase
      | keyof import('@tamagui/core').StackNonStyleProps
      | keyof import('@tamagui/core').WithPseudoProps<
          import('@tamagui/core').WithThemeValues<
            import('@tamagui/core').StackStyleBase
          > &
            import('@tamagui/core').WithShorthands<
              import('@tamagui/core').WithThemeValues<
                import('@tamagui/core').StackStyleBase
              >
            >
        >
    > &
    React.CSSProperties &
    Omit<
      import('react-native').TextInputProps,
      | 'numberOfLines'
      | 'selectionColor'
      | 'inputMode'
      | 'secureTextEntry'
      | 'onChangeText'
      | 'editable'
      | 'enterKeyHint'
      | 'keyboardType'
      | 'placeholderTextColor'
    > & {
      secureTextEntry?: boolean | undefined
      onChangeText?:
        | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
        | undefined
      editable?: boolean | undefined
      enterKeyHint?:
        | 'search'
        | 'done'
        | 'go'
        | 'next'
        | 'send'
        | 'enter'
        | 'previous'
        | undefined
      keyboardType?: import('react-native').KeyboardTypeOptions | undefined
      inputMode?: import('react-native').InputModeOptions | undefined
      placeholderTextColor?: import('@tamagui/core').ColorTokens | undefined
      selectionColor?: import('@tamagui/core').ColorTokens | undefined
      tag?:
        | 'object'
        | 'button'
        | 'search'
        | 'header'
        | 'summary'
        | 'menu'
        | 'article'
        | 'dialog'
        | 'figure'
        | 'form'
        | 'img'
        | 'main'
        | 'meter'
        | 'option'
        | 'table'
        | (string & {})
        | 'address'
        | 'aside'
        | 'footer'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'nav'
        | 'section'
        | 'blockquote'
        | 'dd'
        | 'div'
        | 'dl'
        | 'dt'
        | 'figcaption'
        | 'hr'
        | 'li'
        | 'ol'
        | 'ul'
        | 'p'
        | 'pre'
        | 'a'
        | 'abbr'
        | 'b'
        | 'bdi'
        | 'bdo'
        | 'br'
        | 'cite'
        | 'code'
        | 'data'
        | 'dfn'
        | 'em'
        | 'i'
        | 'kbd'
        | 'mark'
        | 'q'
        | 'rp'
        | 'rt'
        | 'rtc'
        | 'ruby'
        | 's'
        | 'samp'
        | 'small'
        | 'span'
        | 'strong'
        | 'sub'
        | 'sup'
        | 'time'
        | 'u'
        | 'var'
        | 'wbr'
        | 'area'
        | 'audio'
        | 'map'
        | 'track'
        | 'video'
        | 'embed'
        | 'param'
        | 'picture'
        | 'source'
        | 'canvas'
        | 'noscript'
        | 'script'
        | 'del'
        | 'ins'
        | 'caption'
        | 'col'
        | 'colgroup'
        | 'thead'
        | 'tbody'
        | 'td'
        | 'th'
        | 'tr'
        | 'datalist'
        | 'fieldset'
        | 'input'
        | 'label'
        | 'legend'
        | 'optgroup'
        | 'output'
        | 'progress'
        | 'select'
        | 'textarea'
        | 'details'
        | 'template'
        | undefined
      multiline?: boolean | undefined
      numberOfLines?: number | undefined
    },
  import('@tamagui/core').StackStyleBase,
  {
    size?: import('@tamagui/core').SizeTokens | undefined
    disabled?: boolean | undefined
    unstyled?: boolean | undefined
  },
  | {
      name: string
      tag: string
      variants: {
        readonly unstyled: {
          readonly false:
            | {
                readonly borderColor: '$borderColor'
                readonly backgroundColor: '$background'
                readonly minWidth: 0
                readonly hoverStyle: {
                  readonly borderColor: '$borderColorHover'
                }
                readonly focusStyle: {
                  readonly borderColor: '$borderColorFocus'
                }
                readonly focusVisibleStyle: {
                  readonly outlineColor: '$outlineColor'
                  readonly outlineWidth: 2
                  readonly outlineStyle: 'solid'
                }
                readonly tabIndex: number
                readonly size: '$true'
                readonly fontFamily: '$body'
                readonly borderWidth: 1
                readonly outlineWidth: 0
                readonly color: '$color'
              }
            | {
                readonly borderColor: '$borderColor'
                readonly backgroundColor: '$background'
                readonly minWidth: 0
                readonly hoverStyle: {
                  readonly borderColor: '$borderColorHover'
                }
                readonly focusStyle: {
                  readonly borderColor: '$borderColorFocus'
                }
                readonly focusVisibleStyle: {
                  readonly outlineColor: '$outlineColor'
                  readonly outlineWidth: 2
                  readonly outlineStyle: 'solid'
                }
                readonly focusable: boolean
                readonly size: '$true'
                readonly fontFamily: '$body'
                readonly borderWidth: 1
                readonly outlineWidth: 0
                readonly color: '$color'
              }
        }
        readonly size: {
          readonly '...size': import('@tamagui/core').SizeVariantSpreadFunction<any>
        }
        readonly disabled: {
          readonly true: {}
        }
      }
      defaultVariants: {
        unstyled: boolean
      }
      isInput?: undefined
      accept?: undefined
      validStyles?: undefined
    }
  | {
      isInput: boolean
      accept: {
        readonly placeholderTextColor: 'color'
        readonly selectionColor: 'color'
      }
      validStyles: {
        whiteSpace?: boolean | undefined
        wordWrap?: boolean | undefined
        textOverflow?: boolean | undefined
        textDecorationDistance?: boolean | undefined
        cursor?: boolean | undefined
        WebkitLineClamp: boolean
        WebkitBoxOrient?: boolean | undefined
        textShadowOffset: boolean
        textShadowRadius: boolean
        userSelect: boolean
        selectable: boolean
        verticalAlign: boolean
        color: boolean
        textDecorationColor: boolean
        textShadowColor: boolean
        textAlign: boolean
        textDecorationLine: boolean
        textDecorationStyle: boolean
        fontFamily: boolean
        fontSize: boolean
        fontStyle: boolean
        fontWeight: boolean
        letterSpacing: boolean
        lineHeight: boolean
        textTransform: boolean
        elevationAndroid?: boolean | undefined
        borderBottomStyle?: boolean | undefined
        borderTopStyle?: boolean | undefined
        borderLeftStyle?: boolean | undefined
        borderRightStyle?: boolean | undefined
        caretColor?: boolean | undefined
        scrollbarWidth?: boolean | undefined
        overflowX?: boolean | undefined
        overflowY?: boolean | undefined
        contain?: boolean | undefined
        pointerEvents?: boolean | undefined
        boxSizing?: boolean | undefined
        boxShadow?: boolean | undefined
        outlineStyle?: boolean | undefined
        outlineOffset?: boolean | undefined
        outlineWidth?: boolean | undefined
        touchAction?: boolean | undefined
        filter?: boolean | undefined
        backdropFilter?: boolean | undefined
        mixBlendMode?: boolean | undefined
        backgroundImage?: boolean | undefined
        backgroundOrigin?: boolean | undefined
        backgroundPosition?: boolean | undefined
        backgroundRepeat?: boolean | undefined
        backgroundSize?: boolean | undefined
        backgroundColor: boolean
        backgroundClip?: boolean | undefined
        backgroundBlendMode?: boolean | undefined
        backgroundAttachment?: boolean | undefined
        background?: boolean | undefined
        clipPath?: boolean | undefined
        transformStyle?: boolean | undefined
        mask?: boolean | undefined
        maskImage?: boolean | undefined
        textEmphasis?: boolean | undefined
        borderImage?: boolean | undefined
        float?: boolean | undefined
        content?: boolean | undefined
        overflowBlock?: boolean | undefined
        overflowInline?: boolean | undefined
        maskBorder?: boolean | undefined
        maskBorderMode?: boolean | undefined
        maskBorderOutset?: boolean | undefined
        maskBorderRepeat?: boolean | undefined
        maskBorderSlice?: boolean | undefined
        maskBorderSource?: boolean | undefined
        maskBorderWidth?: boolean | undefined
        maskClip?: boolean | undefined
        maskComposite?: boolean | undefined
        maskMode?: boolean | undefined
        maskOrigin?: boolean | undefined
        maskPosition?: boolean | undefined
        maskRepeat?: boolean | undefined
        maskSize?: boolean | undefined
        maskType?: boolean | undefined
        animationIterationCount: boolean
        aspectRatio: boolean
        borderImageOutset: boolean
        borderImageSlice: boolean
        borderImageWidth: boolean
        columnCount: boolean
        flex: boolean
        flexGrow: boolean
        flexOrder: boolean
        flexPositive: boolean
        flexShrink: boolean
        flexNegative: boolean
        gridRow: boolean
        gridRowEnd: boolean
        gridRowGap: boolean
        gridRowStart: boolean
        gridColumn: boolean
        gridColumnEnd: boolean
        gridColumnGap: boolean
        gridColumnStart: boolean
        lineClamp: boolean
        opacity: boolean
        order: boolean
        orphans: boolean
        tabSize: boolean
        widows: boolean
        zIndex: boolean
        zoom: boolean
        scale: boolean
        scaleX: boolean
        scaleY: boolean
        scaleZ: boolean
        shadowOpacity: boolean
        x: boolean
        y: boolean
        perspective: boolean
        skewX: boolean
        skewY: boolean
        matrix: boolean
        rotate: boolean
        rotateY: boolean
        rotateX: boolean
        rotateZ: boolean
        borderRadius: boolean
        borderTopLeftRadius: boolean
        borderTopRightRadius: boolean
        borderBottomLeftRadius: boolean
        borderBottomRightRadius: boolean
        borderStartStartRadius: boolean
        borderStartEndRadius: boolean
        borderEndStartRadius: boolean
        borderEndEndRadius: boolean
        width: boolean
        height: boolean
        minWidth: boolean
        minHeight: boolean
        maxWidth: boolean
        maxHeight: boolean
        blockSize: boolean
        minBlockSize: boolean
        maxBlockSize: boolean
        inlineSize: boolean
        minInlineSize: boolean
        maxInlineSize: boolean
        outlineColor?: boolean | undefined
        borderColor: boolean
        borderBlockStartColor: boolean
        borderBlockEndColor: boolean
        borderBlockColor: boolean
        borderBottomColor: boolean
        borderInlineColor: boolean
        borderInlineStartColor: boolean
        borderInlineEndColor: boolean
        borderTopColor: boolean
        borderLeftColor: boolean
        borderRightColor: boolean
        borderEndColor: boolean
        borderStartColor: boolean
        shadowColor: boolean
        backfaceVisibility: boolean
        borderBottomEndRadius: boolean
        borderBottomStartRadius: boolean
        borderBottomWidth: boolean
        borderLeftWidth: boolean
        borderRightWidth: boolean
        borderBlockWidth: boolean
        borderBlockEndWidth: boolean
        borderBlockStartWidth: boolean
        borderInlineWidth: boolean
        borderInlineEndWidth: boolean
        borderInlineStartWidth: boolean
        borderStyle: boolean
        borderBlockStyle: boolean
        borderBlockEndStyle: boolean
        borderBlockStartStyle: boolean
        borderInlineStyle: boolean
        borderInlineEndStyle: boolean
        borderInlineStartStyle: boolean
        borderTopEndRadius: boolean
        borderTopStartRadius: boolean
        borderTopWidth: boolean
        borderWidth: boolean
        transform: boolean
        transformOrigin: boolean
        alignContent: boolean
        alignItems: boolean
        alignSelf: boolean
        borderEndWidth: boolean
        borderStartWidth: boolean
        bottom: boolean
        display: boolean
        end: boolean
        flexBasis: boolean
        flexDirection: boolean
        flexWrap: boolean
        gap: boolean
        columnGap: boolean
        rowGap: boolean
        justifyContent: boolean
        left: boolean
        margin: boolean
        marginBlock: boolean
        marginBlockEnd: boolean
        marginBlockStart: boolean
        marginInline: boolean
        marginInlineStart: boolean
        marginInlineEnd: boolean
        marginBottom: boolean
        marginEnd: boolean
        marginHorizontal: boolean
        marginLeft: boolean
        marginRight: boolean
        marginStart: boolean
        marginTop: boolean
        marginVertical: boolean
        overflow: boolean
        padding: boolean
        paddingBottom: boolean
        paddingInline: boolean
        paddingBlock: boolean
        paddingBlockStart: boolean
        paddingInlineEnd: boolean
        paddingInlineStart: boolean
        paddingEnd: boolean
        paddingHorizontal: boolean
        paddingLeft: boolean
        paddingRight: boolean
        paddingStart: boolean
        paddingTop: boolean
        paddingVertical: boolean
        position: boolean
        right: boolean
        start: boolean
        top: boolean
        inset: boolean
        insetBlock: boolean
        insetBlockEnd: boolean
        insetBlockStart: boolean
        insetInline: boolean
        insetInlineEnd: boolean
        insetInlineStart: boolean
        direction: boolean
        shadowOffset: boolean
        shadowRadius: boolean
        focusVisibleStyle?: boolean | undefined
        enterStyle: boolean
        exitStyle: boolean
        hoverStyle: boolean
        pressStyle: boolean
        focusStyle: boolean
        disabledStyle: boolean
      }
      name?: undefined
      tag?: undefined
      variants?: undefined
      defaultVariants?: undefined
    }
>
//# sourceMappingURL=Input.native.d.ts.map
