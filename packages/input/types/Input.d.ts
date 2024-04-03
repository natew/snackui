import React from 'react';
import { ColorTokens } from '@tamagui/core';
export declare const Input: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase & {
    readonly placeholderTextColor?: Omit<ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    disabled?: boolean | undefined;
    size?: import("@tamagui/core").SizeTokens | undefined;
    unstyled?: boolean | undefined;
}>, "theme" | "debug" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "grid" | "group" | "separator" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | "style" | "className" | "children" | "hitSlop" | "pointerEvents" | "display" | "onStartShouldSetResponder" | "onLayout" | "rel" | "dir" | "focusable" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "id" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "space" | "spaceDirection" | "animation" | "animateOnly" | "animatePresence" | "transformOrigin" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "asChild" | "dangerouslySetInnerHTML" | "themeShallow" | "themeInverse" | "tag" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "hoverStyle" | "pressStyle" | "focusStyle" | "focusVisibleStyle" | "disabledStyle" | "exitStyle" | "enterStyle" | "ref" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "contentEditable" | "contextMenu" | "draggable" | "hidden" | "lang" | "nonce" | "slot" | "spellCheck" | "title" | "translate" | "radioGroup" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-dropeffect" | "aria-errormessage" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-invalid" | "aria-keyshortcuts" | "aria-level" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-setsize" | "aria-sort" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancelCapture" | "onTouchMoveCapture" | "onTouchStartCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "secureTextEntry" | "onChangeText" | "editable" | "enterKeyHint" | "keyboardType" | "placeholderTextColor" | "selectionColor" | "allowFontScaling" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "multiline" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "returnKeyType" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "maxFontSizeMultiplier" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "textContentType" | "scrollEnabled" | "lineBreakStrategyIOS" | "smartInsertDelete" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "numberOfLines" | "returnKeyLabel" | "textBreakStrategy" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "verticalAlign" | "background" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textTransform" | "fontVariant" | "textOverflow" | "whiteSpace" | "wordWrap" | "clip" | "all" | "inset" | "fill" | "stroke" | "accentColor" | "alignTracks" | "animationComposition" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimeline" | "animationTimingFunction" | "appearance" | "backdropFilter" | "backgroundAttachment" | "backgroundBlendMode" | "backgroundClip" | "backgroundImage" | "backgroundOrigin" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "blockOverflow" | "blockSize" | "borderBlockEndStyle" | "borderBlockEndWidth" | "borderBlockStartStyle" | "borderBlockStartWidth" | "borderBlockStyle" | "borderBlockWidth" | "borderBottomStyle" | "borderCollapse" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderInlineColor" | "borderInlineEndColor" | "borderInlineEndStyle" | "borderInlineEndWidth" | "borderInlineStartColor" | "borderInlineStartStyle" | "borderInlineStartWidth" | "borderInlineStyle" | "borderInlineWidth" | "borderLeftStyle" | "borderRightStyle" | "borderSpacing" | "borderTopStyle" | "boxDecorationBreak" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "caretColor" | "caretShape" | "clear" | "clipPath" | "colorAdjust" | "colorScheme" | "columnCount" | "columnFill" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "containIntrinsicBlockSize" | "containIntrinsicHeight" | "containIntrinsicInlineSize" | "containIntrinsicWidth" | "containerName" | "containerType" | "contentVisibility" | "counterIncrement" | "counterReset" | "counterSet" | "emptyCells" | "filter" | "float" | "fontFeatureSettings" | "fontKerning" | "fontLanguageOverride" | "fontOpticalSizing" | "fontPalette" | "fontSizeAdjust" | "fontSmooth" | "fontStretch" | "fontSynthesis" | "fontVariantAlternates" | "fontVariantCaps" | "fontVariantEastAsian" | "fontVariantEmoji" | "fontVariantLigatures" | "fontVariantNumeric" | "fontVariantPosition" | "fontVariationSettings" | "forcedColorAdjust" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "hangingPunctuation" | "hyphenateCharacter" | "hyphenateLimitChars" | "hyphens" | "imageOrientation" | "imageRendering" | "imageResolution" | "initialLetter" | "inlineSize" | "inputSecurity" | "insetBlockEnd" | "insetBlockStart" | "insetInlineEnd" | "insetInlineStart" | "isolation" | "justifyItems" | "justifySelf" | "justifyTracks" | "lineBreak" | "lineHeightStep" | "listStyleImage" | "listStylePosition" | "listStyleType" | "marginBlockEnd" | "marginBlockStart" | "marginInlineEnd" | "marginInlineStart" | "marginTrim" | "maskBorderMode" | "maskBorderOutset" | "maskBorderRepeat" | "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskComposite" | "maskImage" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "mathDepth" | "mathShift" | "mathStyle" | "maxBlockSize" | "maxInlineSize" | "maxLines" | "minBlockSize" | "minInlineSize" | "mixBlendMode" | "motionDistance" | "motionPath" | "motionRotation" | "objectFit" | "objectPosition" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetPosition" | "offsetRotate" | "offsetRotation" | "order" | "orphans" | "overflowAnchor" | "overflowBlock" | "overflowClipBox" | "overflowClipMargin" | "overflowInline" | "overflowWrap" | "overflowX" | "overflowY" | "overscrollBehaviorBlock" | "overscrollBehaviorInline" | "overscrollBehaviorX" | "overscrollBehaviorY" | "paddingBlockEnd" | "paddingBlockStart" | "paddingInlineEnd" | "paddingInlineStart" | "page" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "paintOrder" | "perspectiveOrigin" | "printColorAdjust" | "quotes" | "resize" | "rubyAlign" | "rubyMerge" | "rubyPosition" | "scrollBehavior" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollSnapAlign" | "scrollSnapMarginBottom" | "scrollSnapMarginLeft" | "scrollSnapMarginRight" | "scrollSnapMarginTop" | "scrollSnapStop" | "scrollSnapType" | "scrollTimelineAxis" | "scrollTimelineName" | "scrollbarColor" | "scrollbarGutter" | "scrollbarWidth" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "tabSize" | "tableLayout" | "textAlignLast" | "textCombineUpright" | "textDecorationSkip" | "textDecorationSkipInk" | "textDecorationThickness" | "textEmphasisColor" | "textEmphasisPosition" | "textEmphasisStyle" | "textIndent" | "textJustify" | "textOrientation" | "textRendering" | "textShadow" | "textSizeAdjust" | "textUnderlineOffset" | "textUnderlinePosition" | "transformBox" | "transformStyle" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "unicodeBidi" | "viewTransitionName" | "visibility" | "widows" | "willChange" | "wordBreak" | "wordSpacing" | "writingMode" | "zoom" | "backgroundPosition" | "border" | "borderBlock" | "borderBlockEnd" | "borderBlockStart" | "borderBottom" | "borderImage" | "borderInline" | "borderInlineEnd" | "borderInlineStart" | "borderLeft" | "borderRight" | "borderTop" | "caret" | "columnRule" | "columns" | "containIntrinsicSize" | "container" | "flexFlow" | "font" | "gridArea" | "gridColumn" | "gridRow" | "gridTemplate" | "insetBlock" | "insetInline" | "lineClamp" | "listStyle" | "marginBlock" | "marginInline" | "mask" | "maskBorder" | "motion" | "offset" | "outline" | "overscrollBehavior" | "paddingBlock" | "paddingInline" | "placeContent" | "placeItems" | "placeSelf" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginInline" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingInline" | "scrollSnapMargin" | "scrollTimeline" | "textDecoration" | "textEmphasis" | "transition" | "MozAnimationDelay" | "MozAnimationDirection" | "MozAnimationDuration" | "MozAnimationFillMode" | "MozAnimationIterationCount" | "MozAnimationName" | "MozAnimationPlayState" | "MozAnimationTimingFunction" | "MozAppearance" | "MozBackfaceVisibility" | "MozBinding" | "MozBorderBottomColors" | "MozBorderEndColor" | "MozBorderEndStyle" | "MozBorderEndWidth" | "MozBorderLeftColors" | "MozBorderRightColors" | "MozBorderStartColor" | "MozBorderStartStyle" | "MozBorderTopColors" | "MozBoxSizing" | "MozColumnCount" | "MozColumnFill" | "MozColumnRuleColor" | "MozColumnRuleStyle" | "MozColumnRuleWidth" | "MozColumnWidth" | "MozContextProperties" | "MozFontFeatureSettings" | "MozFontLanguageOverride" | "MozHyphens" | "MozImageRegion" | "MozMarginEnd" | "MozMarginStart" | "MozOrient" | "MozOsxFontSmoothing" | "MozPaddingEnd" | "MozPaddingStart" | "MozPerspective" | "MozPerspectiveOrigin" | "MozStackSizing" | "MozTabSize" | "MozTextBlink" | "MozTextSizeAdjust" | "MozTransformOrigin" | "MozTransformStyle" | "MozTransitionDelay" | "MozTransitionDuration" | "MozTransitionProperty" | "MozTransitionTimingFunction" | "MozUserFocus" | "MozUserModify" | "MozUserSelect" | "MozWindowDragging" | "MozWindowShadow" | "msAccelerator" | "msBlockProgression" | "msContentZoomChaining" | "msContentZoomLimitMax" | "msContentZoomLimitMin" | "msContentZoomSnapPoints" | "msContentZoomSnapType" | "msContentZooming" | "msFilter" | "msFlexDirection" | "msFlexPositive" | "msFlowFrom" | "msFlowInto" | "msGridColumns" | "msGridRows" | "msHighContrastAdjust" | "msHyphenateLimitChars" | "msHyphenateLimitLines" | "msHyphenateLimitZone" | "msHyphens" | "msImeAlign" | "msLineBreak" | "msOrder" | "msOverflowStyle" | "msOverflowX" | "msOverflowY" | "msScrollChaining" | "msScrollLimitXMax" | "msScrollLimitXMin" | "msScrollLimitYMax" | "msScrollLimitYMin" | "msScrollRails" | "msScrollSnapPointsX" | "msScrollSnapPointsY" | "msScrollSnapType" | "msScrollTranslation" | "msScrollbar3dlightColor" | "msScrollbarArrowColor" | "msScrollbarBaseColor" | "msScrollbarDarkshadowColor" | "msScrollbarFaceColor" | "msScrollbarHighlightColor" | "msScrollbarShadowColor" | "msScrollbarTrackColor" | "msTextAutospace" | "msTextCombineHorizontal" | "msTextOverflow" | "msTouchAction" | "msTouchSelect" | "msTransform" | "msTransformOrigin" | "msTransitionDelay" | "msTransitionDuration" | "msTransitionProperty" | "msTransitionTimingFunction" | "msUserSelect" | "msWordBreak" | "msWrapFlow" | "msWrapMargin" | "msWrapThrough" | "msWritingMode" | "WebkitAlignContent" | "WebkitAlignItems" | "WebkitAlignSelf" | "WebkitAnimationDelay" | "WebkitAnimationDirection" | "WebkitAnimationDuration" | "WebkitAnimationFillMode" | "WebkitAnimationIterationCount" | "WebkitAnimationName" | "WebkitAnimationPlayState" | "WebkitAnimationTimingFunction" | "WebkitAppearance" | "WebkitBackdropFilter" | "WebkitBackfaceVisibility" | "WebkitBackgroundClip" | "WebkitBackgroundOrigin" | "WebkitBackgroundSize" | "WebkitBorderBeforeColor" | "WebkitBorderBeforeStyle" | "WebkitBorderBeforeWidth" | "WebkitBorderBottomLeftRadius" | "WebkitBorderBottomRightRadius" | "WebkitBorderImageSlice" | "WebkitBorderTopLeftRadius" | "WebkitBorderTopRightRadius" | "WebkitBoxDecorationBreak" | "WebkitBoxReflect" | "WebkitBoxShadow" | "WebkitBoxSizing" | "WebkitClipPath" | "WebkitColumnCount" | "WebkitColumnFill" | "WebkitColumnRuleColor" | "WebkitColumnRuleStyle" | "WebkitColumnRuleWidth" | "WebkitColumnSpan" | "WebkitColumnWidth" | "WebkitFilter" | "WebkitFlexBasis" | "WebkitFlexDirection" | "WebkitFlexGrow" | "WebkitFlexShrink" | "WebkitFlexWrap" | "WebkitFontFeatureSettings" | "WebkitFontKerning" | "WebkitFontSmoothing" | "WebkitFontVariantLigatures" | "WebkitHyphenateCharacter" | "WebkitHyphens" | "WebkitInitialLetter" | "WebkitJustifyContent" | "WebkitLineBreak" | "WebkitLineClamp" | "WebkitMarginEnd" | "WebkitMarginStart" | "WebkitMaskAttachment" | "WebkitMaskBoxImageOutset" | "WebkitMaskBoxImageRepeat" | "WebkitMaskBoxImageSlice" | "WebkitMaskBoxImageSource" | "WebkitMaskBoxImageWidth" | "WebkitMaskClip" | "WebkitMaskComposite" | "WebkitMaskImage" | "WebkitMaskOrigin" | "WebkitMaskPosition" | "WebkitMaskPositionX" | "WebkitMaskPositionY" | "WebkitMaskRepeat" | "WebkitMaskRepeatX" | "WebkitMaskRepeatY" | "WebkitMaskSize" | "WebkitMaxInlineSize" | "WebkitOrder" | "WebkitOverflowScrolling" | "WebkitPaddingEnd" | "WebkitPaddingStart" | "WebkitPerspective" | "WebkitPerspectiveOrigin" | "WebkitPrintColorAdjust" | "WebkitRubyPosition" | "WebkitScrollSnapType" | "WebkitShapeMargin" | "WebkitTapHighlightColor" | "WebkitTextCombine" | "WebkitTextDecorationColor" | "WebkitTextDecorationLine" | "WebkitTextDecorationSkip" | "WebkitTextDecorationStyle" | "WebkitTextEmphasisColor" | "WebkitTextEmphasisPosition" | "WebkitTextEmphasisStyle" | "WebkitTextFillColor" | "WebkitTextOrientation" | "WebkitTextSizeAdjust" | "WebkitTextStrokeColor" | "WebkitTextStrokeWidth" | "WebkitTextUnderlinePosition" | "WebkitTouchCallout" | "WebkitTransform" | "WebkitTransformOrigin" | "WebkitTransformStyle" | "WebkitTransitionDelay" | "WebkitTransitionDuration" | "WebkitTransitionProperty" | "WebkitTransitionTimingFunction" | "WebkitUserModify" | "WebkitUserSelect" | "WebkitWritingMode" | "MozAnimation" | "MozBorderImage" | "MozColumnRule" | "MozColumns" | "MozTransition" | "msContentZoomLimit" | "msContentZoomSnap" | "msFlex" | "msScrollLimit" | "msScrollSnapX" | "msScrollSnapY" | "msTransition" | "WebkitAnimation" | "WebkitBorderBefore" | "WebkitBorderImage" | "WebkitBorderRadius" | "WebkitColumnRule" | "WebkitColumns" | "WebkitFlex" | "WebkitFlexFlow" | "WebkitMask" | "WebkitMaskBoxImage" | "WebkitTextEmphasis" | "WebkitTextStroke" | "WebkitTransition" | "azimuth" | "boxAlign" | "boxDirection" | "boxFlex" | "boxFlexGroup" | "boxLines" | "boxOrdinalGroup" | "boxOrient" | "boxPack" | "gridColumnGap" | "gridGap" | "gridRowGap" | "imeMode" | "offsetBlock" | "offsetBlockEnd" | "offsetBlockStart" | "offsetInline" | "offsetInlineEnd" | "offsetInlineStart" | "scrollSnapCoordinate" | "scrollSnapDestination" | "scrollSnapPointsX" | "scrollSnapPointsY" | "scrollSnapTypeX" | "scrollSnapTypeY" | "KhtmlBoxAlign" | "KhtmlBoxDirection" | "KhtmlBoxFlex" | "KhtmlBoxFlexGroup" | "KhtmlBoxLines" | "KhtmlBoxOrdinalGroup" | "KhtmlBoxOrient" | "KhtmlBoxPack" | "KhtmlLineBreak" | "KhtmlOpacity" | "KhtmlUserSelect" | "MozBackgroundClip" | "MozBackgroundInlinePolicy" | "MozBackgroundOrigin" | "MozBackgroundSize" | "MozBorderRadius" | "MozBorderRadiusBottomleft" | "MozBorderRadiusBottomright" | "MozBorderRadiusTopleft" | "MozBorderRadiusTopright" | "MozBoxAlign" | "MozBoxDirection" | "MozBoxFlex" | "MozBoxOrdinalGroup" | "MozBoxOrient" | "MozBoxPack" | "MozBoxShadow" | "MozFloatEdge" | "MozForceBrokenImageIcon" | "MozOpacity" | "MozOutline" | "MozOutlineColor" | "MozOutlineRadius" | "MozOutlineRadiusBottomleft" | "MozOutlineRadiusBottomright" | "MozOutlineRadiusTopleft" | "MozOutlineRadiusTopright" | "MozOutlineStyle" | "MozOutlineWidth" | "MozTextAlignLast" | "MozTextDecorationColor" | "MozTextDecorationLine" | "MozTextDecorationStyle" | "MozUserInput" | "msImeMode" | "OAnimation" | "OAnimationDelay" | "OAnimationDirection" | "OAnimationDuration" | "OAnimationFillMode" | "OAnimationIterationCount" | "OAnimationName" | "OAnimationPlayState" | "OAnimationTimingFunction" | "OBackgroundSize" | "OBorderImage" | "OObjectFit" | "OObjectPosition" | "OTabSize" | "OTextOverflow" | "OTransform" | "OTransformOrigin" | "OTransition" | "OTransitionDelay" | "OTransitionDuration" | "OTransitionProperty" | "OTransitionTimingFunction" | "WebkitBoxAlign" | "WebkitBoxDirection" | "WebkitBoxFlex" | "WebkitBoxFlexGroup" | "WebkitBoxLines" | "WebkitBoxOrdinalGroup" | "WebkitBoxOrient" | "WebkitBoxPack" | "WebkitScrollSnapPointsX" | "WebkitScrollSnapPointsY" | "alignmentBaseline" | "baselineShift" | "clipRule" | "colorInterpolation" | "colorRendering" | "dominantBaseline" | "fillOpacity" | "fillRule" | "floodColor" | "floodOpacity" | "glyphOrientationVertical" | "lightingColor" | "marker" | "markerEnd" | "markerMid" | "markerStart" | "shapeRendering" | "stopColor" | "stopOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "textAnchor" | "vectorEffect"> & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & Omit<React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>, "size" | "value" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & React.CSSProperties & Omit<import("react-native").TextInputProps, "inputMode" | "secureTextEntry" | "onChangeText" | "editable" | "enterKeyHint" | "keyboardType" | "placeholderTextColor" | "selectionColor"> & {
    secureTextEntry?: boolean | undefined;
    onChangeText?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputChangeEventData>) => void) | undefined;
    editable?: boolean | undefined;
    enterKeyHint?: "search" | "done" | "go" | "next" | "send" | "enter" | "previous" | undefined;
    keyboardType?: import("react-native").KeyboardTypeOptions | undefined;
    inputMode?: import("react-native").InputModeOptions | undefined;
    placeholderTextColor?: ColorTokens | undefined;
    selectionColor?: ColorTokens | undefined;
    tag?: "object" | "cite" | "data" | "form" | "label" | "span" | "summary" | "article" | "button" | "dialog" | "figure" | "img" | "main" | "menu" | "option" | "search" | "table" | (string & {}) | "address" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "hr" | "li" | "ol" | "ul" | "p" | "pre" | "a" | "abbr" | "b" | "bdi" | "bdo" | "br" | "code" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "rtc" | "ruby" | "s" | "samp" | "small" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "wbr" | "area" | "audio" | "map" | "track" | "video" | "embed" | "param" | "picture" | "source" | "canvas" | "noscript" | "script" | "del" | "ins" | "caption" | "col" | "colgroup" | "thead" | "tbody" | "td" | "th" | "tr" | "datalist" | "fieldset" | "input" | "legend" | "meter" | "optgroup" | "output" | "progress" | "select" | "textarea" | "details" | "template" | undefined;
    multiline?: boolean | undefined;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & Omit<React.ClassAttributes<HTMLInputElement> & React.HTMLProps<HTMLInputElement>, "size" | "value" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & React.CSSProperties & Omit<import("react-native").TextInputProps, "inputMode" | "secureTextEntry" | "onChangeText" | "editable" | "enterKeyHint" | "keyboardType" | "placeholderTextColor" | "selectionColor"> & {
    secureTextEntry?: boolean | undefined;
    onChangeText?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputChangeEventData>) => void) | undefined;
    editable?: boolean | undefined;
    enterKeyHint?: "search" | "done" | "go" | "next" | "send" | "enter" | "previous" | undefined;
    keyboardType?: import("react-native").KeyboardTypeOptions | undefined;
    inputMode?: import("react-native").InputModeOptions | undefined;
    placeholderTextColor?: ColorTokens | undefined;
    selectionColor?: ColorTokens | undefined;
    tag?: "object" | "cite" | "data" | "form" | "label" | "span" | "summary" | "article" | "button" | "dialog" | "figure" | "img" | "main" | "menu" | "option" | "search" | "table" | (string & {}) | "address" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "hr" | "li" | "ol" | "ul" | "p" | "pre" | "a" | "abbr" | "b" | "bdi" | "bdo" | "br" | "code" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "rtc" | "ruby" | "s" | "samp" | "small" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "wbr" | "area" | "audio" | "map" | "track" | "video" | "embed" | "param" | "picture" | "source" | "canvas" | "noscript" | "script" | "del" | "ins" | "caption" | "col" | "colgroup" | "thead" | "tbody" | "td" | "th" | "tr" | "datalist" | "fieldset" | "input" | "legend" | "meter" | "optgroup" | "output" | "progress" | "select" | "textarea" | "details" | "template" | undefined;
    multiline?: boolean | undefined;
}, import("@tamagui/core").StackStyleBase & {
    readonly placeholderTextColor?: Omit<ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    disabled?: boolean | undefined;
    size?: import("@tamagui/core").SizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
//# sourceMappingURL=Input.d.ts.map