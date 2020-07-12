"use strict";var config={accelerate:"accelerate",intercept:"intercept",exponent:"exponent",offset:"offset",decelerate:"decelerate",additive:"additive",accumulate:"accumulate",tableValues:"tableValues",slope:"slope",fill:"fill",calcMode:"calcMode",type:"type",values:"values",keyTimes:"keyTimes",keySplines:"keySplines",from:"from",to:"to",by:"by",x:"x",y:"y",begin:"begin",dur:"dur",end:"end",min:"min",max:"max",repeatCount:"repeatCount",repeatDur:"repeatDur",restart:"restart",result:"result",width:"width",attributeType:"attributeType",attributeName:"attributeName",height:"height",requiredFeatures:"requiredFeatures",style:"style",lang:"lang",accesskey:"accessKey",autocapitalize:"autoCapitalize",contextmenu:"contextMenu",spellcheck:"spellCheck",dropzone:"dropZone",inputmode:"inputMode",itemprop:"itemProp",itemid:"itemId",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",id:"id","accept-charset":"accpetCharset",class:"className",for:"htmlfor","http-equiv":"httpEquiv",contentEditable:"contentEditable",draggable:"draggable",spellCheck:"spellCheck",value:"value",autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",focusable:"focusable",preserveAlpha:"preserveAlpha",allowfullscreen:"allowFullScreen",async:"async",autofocus:"autoFocus",autoplay:"autoPlay",controls:"controls",default:"default",defer:"defer",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",formnovalidate:"formNoValidate",hidden:"hidden",loop:"loop",nomodule:"noModule",novalidate:"noValidate",open:"open",playsinline:"playsInline",readonly:"readOnly",required:"required",reversed:"reversed",scoped:"scoped",seamless:"seamless",systemLanguage:"systemLanguage",checked:"checked",multiple:"multiple",muted:"muted",selected:"selected",capture:"capture",download:"download",cols:"cols",rows:"rows",size:"size",span:"span",rowspan:"rowSpan",start:"start",crossorigin:"crossOrigin",src:"src",href:"href",action:"action",formaction:"formAction",tabindex:"tabIndex","accent-height":"accentHeight","alignment-baseline":"alignmentBaseline","arabic-form":"arabicForm","baseline-shift":"baselineShift","cap-height":"capHeight","clip-path":"clipPath","clip-rule":"clipRule","color-interpolation":"colorInterpolation","color-interpolation-filters":"colorInterpolationFilters","color-profile":"colorProfile","color-rendering":"colorRendering","dominant-baseline":"dominantBaseline","enable-background":"enableBackground","fill-opacity":"fillOpacity","fill-rule":"fillRule","flood-color":"floodColor","flood-opacity":"floodOpacity","font-family":"fontFamily","font-size":"fontSize","font-size-adjust":"fontSizeAdjust","font-stretch":"fontStretch","font-style":"fontStyle","font-variant":"fontVariant","font-weight":"fontWeight","glyph-name":"glyphName","glyph-orientation-horizontal":"glyphOrientationHorizontal","glyph-orientation-vertical":"glyphOrientationVertical","horiz-adv-x":"horizAdvX","horiz-origin-x":"horizOriginX","image-rendering":"imageRendering","letter-spacing":"letterSpacing","lighting-color":"lightingColor","marker-end":"markerEnd","marker-mid":"markerMid","marker-start":"markerStart","overline-position":"overlinePosition","overline-thickness":"overlineThickness","paint-order":"paintOrder","panose-1":"panose-1","pointer-events":"pointerEvents","rendering-intent":"renderingIntent","shape-rendering":"shapeRendering","stop-color":"stopColor","stop-opacity":"stopOpacity","strikethrough-position":"strikethroughPosition","strikethrough-thickness":"strikethroughThickness","stroke-dasharray":"strokeDasharray","stroke-dashoffset":"strokeDashoffset","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","stroke-miterlimit":"strokeMiterlimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-anchor":"textAnchor","text-decoration":"textDecoration","text-rendering":"textRendering","underline-position":"underlinePosition","underline-thickness":"underlineThickness","unicode-bidi":"unicodeBidi","unicode-range":"unicodeRange","units-per-em":"unitsPerEm","v-alphabetic":"vAlphabetic","v-hanging":"vHanging","v-ideographic":"vIdeographic","v-mathematical":"vMathematical","vector-effect":"vectorEffect","vert-adv-y":"vertAdvY","vert-origin-x":"vertOriginX","vert-origin-y":"vertOriginY","word-spacing":"wordSpacing","writing-mode":"writingMode","xmlns:xlink":"xmlnsXlink","x-height":"xHeight","xlink:actuate":"xlinkActuate","xlink:arcrole":"xlinkArcrole","xlink:role":"xlinkRole","xlink:show":"xlinkShow","xlink:title":"xlinkTitle","xlink:type":"xlinkType","xml:base":"xmlBase","xml:lang":"xmlLang","xml:space":"xmlSpace","xlink:href":"xlinkHref",onbegin:"onBegin",onrepeat:"onRepeat",onunload:"onUnload",oncopy:"onCopy",oncut:"onCut",onpaste:"onPaste",ontoggle:"onToggle",onencrypted:"onEncrypted",onactivate:"onActivate",onabort:"onAbort",onanimationcancel:"onAnimationCancel",onanimationend:"onAnimationEnd",onanimationiteration:"onAnimationIteration",onanimationstart:"onAnimationStart",onauxclick:"onAuxClick",onend:"onEnd",onblur:"onBlur",onerror:"onError",onfocus:"onFocus",oncancel:"onCancel",oncanplay:"onCanPlay",oncanplaythrough:"onCanPlayThrough",onchange:"onChange",onclick:"onClick",onclose:"onClose",oncontextmenu:"onContextMenu",oncuechange:"onCueChange",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",ondurationchange:"onDurationChange",onemptied:"onEmptied",onended:"onEnded",onformdata:"onFormdata",ongotpointercapture:"onGotPointerCapture",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onloadeddata:"onLoadedData",onloadedmetadata:"onLoadedMetadata",onloadend:"onLoadEnd",onloadstart:"onLoadStart",onlostpointercapture:"onLostPointerCapture",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onmousewheel:"onMouseWheel",onwheel:"onWheel",onpause:"onPause",onplay:"onPlay",onplaying:"onPlaying",onpointerdown:"onPointerDown",onpointermove:"onPointerMove",onpointerup:"onPointerUp",onpointercancel:"onPointerCancel",onpointerover:"onPointerOver",onpointerout:"onPointerOut",onpointerenter:"onPointerEnter",onpointerleave:"onPointerLeave",onpointerlockchange:"onPointerLockChange",onpointerlockerror:"onPointerLockError",onprogress:"onProgress",onratechange:"onRateChange",onreset:"onReset",onresize:"onResize",onscroll:"onScroll",onseeked:"onSeeked",onseeking:"onSeeking",onselect:"onSelect",onselectstart:"onSelectStart",onselectionchange:"onSelectionChange",onshow:"onShow",onsort:"onSort",onstalled:"onStalled",onsubmit:"onSubmit",onsuspend:"onSuspend",ontimeupdate:"onTimeUpdate",onvolumechange:"onVolumeChange",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",ontransitioncancel:"onTransitionCancel",ontransitionend:"onTransitionEnd",ontransitionrun:"onTransitionRun",ontransitionstart:"onTransitionStart",onwaiting:"onWaiting",onfocusin:"onFocusIn",onfocusout:"onFocusOut",ondblclick:"onDoubleClick"};module.exports=config;