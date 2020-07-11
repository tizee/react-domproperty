import m from '../attributes';
// DOM global attributes
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
describe('Global attributes', () => {
  test('should support global attributes', () => {
    expect(m['accesskey']).toBe('accessKey');
    expect(m['autocapitalize']).toBe('autoCapitalize');
    expect(m['contextmenu']).toBe('contextMenu');
    expect(m['spellcheck']).toBe('spellCheck');
    expect(m['dropzone']).toBe('dropZone');
    expect(m['inputmode']).toBe('inputMode');
    expect(m['itemprop']).toBe('itemProp');
    expect(m['itemid']).toBe('itemId');
    expect(m['itemref']).toBe('itemRef');
    expect(m['itemscope']).toBe('itemScope');
    expect(m['itemtype']).toBe('itemType');
  });
});

// SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
describe('SVG attributes', () => {
  test('core attributes', () => {
    /* id, lang, tabindex, xml:base, xml:lang, xml:space */
    expect(m['id']).toBe('id');
    expect(m['lang']).toBe('lang');
    expect(m['tabindex']).toBe('tabIndex');
    expect(m['xml:base']).toBe('xmlBase');
    expect(m['xml:lang']).toBe('xmlLang');
    expect(m['xml:space']).toBe('xmlSpace');
  });
  test('style attributes', () => {
    expect(m['class']).toBe('className');
    expect(m['style']).toBe('style');
  });
  test('conditional processing attributes', () => {
    expect(m['externalResourcesRequired']).toBe('externalResourcesRequired');
    expect(m['requiredFeatures']).toBe('requiredFeatures');
    expect(m['systemLanguage']).toBe('systemLanguage');
  });
  test('xlink attributes', () => {
    expect(m['xlink:href']).toBe('xlinkHref');
    expect(m['xlink:type']).toBe('xlinkType');
    expect(m['xlink:role']).toBe('xlinkRole');
    expect(m['xlink:arcrole']).toBe('xlinkArcrole');
    expect(m['xlink:title']).toBe('xlinkTitle');
    expect(m['xlink:show']).toBe('xlinkShow');
    expect(m['xlink:actuate']).toBe('xlinkActuate');
  });
  test('presentation attributes', () => {
    expect(m['alignment-baseline']).toBe('alignmentBaseline');
    expect(m['baseline-shift']).toBe('baselineShift');
    // expect(m['clip']).toBe('clip');
    expect(m['clip-path']).toBe('clipPath');
    expect(m['clip-rule']).toBe('clipRule');
    // expect(m['color']).toBe('color');
    expect(m['color-interpolation']).toBe('colorInterpolation');
    expect(m['color-interpolation-filters']).toBe('colorInterpolationFilters');
    expect(m['color-profile']).toBe('colorProfile');
    expect(m['color-rendering']).toBe('colorRendering');
    // expect(m['cursor']).toBe('cursor');
    // expect(m['direction']).toBe('direction');
    // expect(m['display']).toBe('display');
    expect(m['dominant-baseline']).toBe('dominantBaseline');
    expect(m['enable-background']).toBe('enableBackground');
    // expect(m['fill']).toBe('fill');
    expect(m['fill-opacity']).toBe('fillOpacity');
    expect(m['fill-rule']).toBe('fillRule');
    // expect(m['filter']).toBe('filter');
    expect(m['flood-color']).toBe('floodColor');
    expect(m['flood-opacity']).toBe('floodOpacity');
    expect(m['font-family']).toBe('fontFamily');
    expect(m['font-size']).toBe('fontSize');
    expect(m['font-size-adjust']).toBe('fontSizeAdjust');
    expect(m['font-stretch']).toBe('fontStretch');
    expect(m['font-style']).toBe('fontStyle');
    expect(m['font-variant']).toBe('fontVariant');
    expect(m['font-weight']).toBe('fontWeight');
    expect(m['glyph-orientation-horizontal']).toBe(
      'glyphOrientationHorizontal'
    );
    expect(m['glyph-orientation-vertical']).toBe('glyphOrientationVertical');
    expect(m['image-rendering']).toBe('imageRendering');
    // expect(m['kerning']).toBe('kerning');
    expect(m['letter-spacing']).toBe('letterSpacing');
    expect(m['lighting-color']).toBe('lightingColor');
    expect(m['marker-end']).toBe('markerEnd');
    expect(m['marker-mid']).toBe('markerMid');
    expect(m['marker-start']).toBe('markerStart');
    // expect(m['mask']).toBe('mask');
    // expect(m['opacity']).toBe('opacity');
    // expect(m['overflow']).toBe('overflow');
    expect(m['pointer-events']).toBe('pointerEvents');
    expect(m['shape-rendering']).toBe('shapeRendering');
    expect(m['stop-color']).toBe('stopColor');
    expect(m['stop-opacity']).toBe('stopOpacity');
    // expect(m['stroke']).toBe('stroke');
    expect(m['stroke-dasharray']).toBe('strokeDasharray');
    expect(m['stroke-dashoffset']).toBe('strokeDashoffset');
    expect(m['stroke-linecap']).toBe('strokeLinecap');
    expect(m['stroke-linejoin']).toBe('strokeLinejoin');
    expect(m['stroke-miterlimit']).toBe('strokeMiterlimit');
    expect(m['stroke-opacity']).toBe('strokeOpacity');
    expect(m['stroke-width']).toBe('strokeWidth');
    expect(m['text-anchor']).toBe('textAnchor');
    expect(m['text-decoration']).toBe('textDecoration');
    expect(m['text-rendering']).toBe('textRendering');
    // expect(m['transform']).toBe('transform');
    // expect(m['transform-origin']).toBe('transformOrigin');
    expect(m['unicode-bidi']).toBe('unicodeBidi');
    expect(m['vector-effect']).toBe('vectorEffect');
    // expect(m['visibility']).toBe('visibility');
    expect(m['word-spacing']).toBe('wordSpacing');
    expect(m['writing-mode']).toBe('writingMode');
  });
  test('filters attributes', () => {
    // Filter Primitive Attributes
    expect(m['height']).toBe('height');
    expect(m['width']).toBe('width');
    expect(m['x']).toBe('x');
    expect(m['y']).toBe('y');
    expect(m['result']).toBe('result');
    // Transfer Function Attributes
    expect(m['type']).toBe('type');
    expect(m['tableValues']).toBe('tableValues');
    expect(m['slope']).toBe('slope');
    expect(m['intercept']).toBe('intercept');
    expect(m['exponent']).toBe('exponent');
    expect(m['offset']).toBe('offset');
  });
  test('animation attributes', () => {
    // Animation Attribute Target Attributes
    expect(m['attributeType']).toBe('attributeType');
    expect(m['attributeName']).toBe('attributeName');
    // Animation Timing Attributes
    expect(m['begin']).toBe('begin');
    expect(m['dur']).toBe('dur');
    expect(m['end']).toBe('end');
    expect(m['min']).toBe('min');
    expect(m['max']).toBe('max');
    expect(m['restart']).toBe('restart');
    expect(m['repeatCount']).toBe('repeatCount');
    expect(m['repeatDur']).toBe('repeatDur');
    expect(m['fill']).toBe('fill');
    // Animation Value Attributes
    expect(m['calcMode']).toBe('calcMode');
    expect(m['values']).toBe('values');
    expect(m['keyTimes']).toBe('keyTimes');
    expect(m['keySplines']).toBe('keySplines');
    expect(m['from']).toBe('from');
    expect(m['to']).toBe('to');
    expect(m['by']).toBe('by');
    expect(m['autoReverse']).toBe('autoReverse');
    expect(m['accelerate']).toBe('accelerate');
    expect(m['decelerate']).toBe('decelerate');
    // Animation Addition Attributes
    expect(m['additive']).toBe('additive');
    expect(m['accumulate']).toBe('accumulate');
  });
  test('animation event attributes', () => {
    expect(m['onbegin']).toBe('onBegin');
    expect(m['onend']).toBe('onEnd');
    expect(m['onrepeat']).toBe('onRepeat');
  });
});

// Event Handlers
describe('Event attributes', () => {
  test('document event attributes', () => {
    expect(m['onabort']).toBe('onAbort');
    expect(m['onerror']).toBe('onError');
    expect(m['onresize']).toBe('onResize');
    expect(m['onscroll']).toBe('onScroll');
    expect(m['onunload']).toBe('onUnload');
  });
  test('global event attributes', () => {
    expect(m['oncancel']).toBe('onCancel');
    expect(m['oncanplay']).toBe('onCanPlay');
    expect(m['oncanplaythrough']).toBe('onCanPlayThrough');
    expect(m['onchange']).toBe('onChange');
    expect(m['onclick']).toBe('onClick');
    expect(m['oncuechange']).toBe('onCueChange');
    expect(m['ondblclick']).toBe('onDoubleClick');
    expect(m['ondrag']).toBe('onDrag');
    expect(m['ondragend']).toBe('onDragEnd');
    expect(m['ondragenter']).toBe('onDragEnter');
    expect(m['ondragexit']).toBe('onDragExit');
    expect(m['ondragleave']).toBe('onDragLeave');
    expect(m['ondragover']).toBe('onDragOver');
    expect(m['ondragstart']).toBe('onDragStart');
    expect(m['ondrop']).toBe('onDrop');
    expect(m['ondurationchange']).toBe('onDurationChange');
    expect(m['onemptied']).toBe('onEmptied');
    expect(m['onerror']).toBe('onError');
    expect(m['onfocus']).toBe('onFocus');
    expect(m['oninput']).toBe('onInput');
    expect(m['oninvalid']).toBe('onInvalid');
    expect(m['onkeydown']).toBe('onKeyDown');
    expect(m['onkeypress']).toBe('onKeyPress');
    expect(m['onkeyup']).toBe('onKeyUp');
    expect(m['onload']).toBe('onLoad');
    expect(m['onloadeddata']).toBe('onLoadedData');
    expect(m['onloadedmetadata']).toBe('onLoadedMetadata');
    expect(m['onloadstart']).toBe('onLoadStart');
    expect(m['onmousedown']).toBe('onMouseDown');
    expect(m['onmouseenter']).toBe('onMouseEnter');
    expect(m['onmouseleave']).toBe('onMouseLeave');
    expect(m['onmousemove']).toBe('onMouseMove');
    expect(m['onmouseout']).toBe('onMouseOut');
    expect(m['onmouseover']).toBe('onMouseOver');
    expect(m['onmouseup']).toBe('onMouseUp');
    expect(m['onmousewheel']).toBe('onMouseWheel');
    expect(m['onpause']).toBe('onPause');
    expect(m['onplay']).toBe('onPlay');
    expect(m['onplaying']).toBe('onPlaying');
    expect(m['onprogress']).toBe('onProgress');
    expect(m['onratechange']).toBe('onRateChange');
    expect(m['onreset']).toBe('onReset');
    expect(m['onresize']).toBe('onResize');
    expect(m['onscroll']).toBe('onScroll');
    expect(m['onseeked']).toBe('onSeeked');
    expect(m['onseeking']).toBe('onSeeking');
    expect(m['onselect']).toBe('onSelect');
    expect(m['onshow']).toBe('onShow');
    expect(m['onstalled']).toBe('onStalled');
    expect(m['onsubmit']).toBe('onSubmit');
    expect(m['onsuspend']).toBe('onSuspend');
    expect(m['ontimeupdate']).toBe('onTimeUpdate');
    expect(m['ontoggle']).toBe('onToggle');
    expect(m['onvolumechange']).toBe('onVolumeChange');
    expect(m['onwaiting']).toBe('onWaiting');
  });
  test('graphical event attributes', () => {
    expect(m['onactivate']).toBe('onActivate');
    expect(m['onfocusin']).toBe('onFocusIn');
    expect(m['onfocusout']).toBe('onFocusOut');
  });
});
