import preval from 'preval.macro';
// all React DOM properties from https://github.com/facebook/react/blob/91a2e8173f1fadd2dfd4b12753ebcdc60986d42d/packages/react-dom/src/shared/DOMProperty.js
// all React Simple Events from https://github.com/facebook/react/blob/91a2e8173f1fadd2dfd4b12753ebcdc60986d42d/packages/react-dom/src/events/DOMEventProperties.js
// global event handlers https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers

const config: Record<string, string> = preval`
const config = {};
// convert kebab pattern html attributes to React camelCase attributes.
const reactlize = (attr)=> attr.replace(/[\-\:]([a-z])/g, val => val[1].toUpperCase());
const attributes = 
[
  // react attributes which are not camlCase.
  ['accept-charset', 'accpetCharset'],
  ['class', 'className'],
  ['for', 'htmlfor'],
  ['http-equiv', 'httpEquiv'],
  // enumerated DOM attributes that accept true and false and coerced to strings.
  ['contentEditable', 'contentEditable'],
  ['draggable', 'draggable'],
  ['spellCheck', 'spellCheck'],
  ['value', 'value'],
  // enumerated SVG attributes that accept true and false
  // see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
  ['autoReverse', 'autoReverse'],
  ['externalResourcesRequired', 'externalResourcesRequired'],
  ['focusable', 'focusable'],
  ['preserveAlpha', 'preserveAlpha'],
  // HTML boolean attributes that are lowercase
  ['allowfullscreen', 'allowFullScreen'],
  ['async', 'async'],
  ['autofocus', 'autoFocus'],
  ['autoplay', 'autoPlay'],
  ['controls', 'controls'],
  ['default', 'default'],
  ['defer', 'defer'],
  ['disabled', 'disabled'],
  ['disablepictureinpicture', 'disablePictureInPicture'],
  ['disableremoteplayback', 'disableRemotePlayback'],
  ['formnovalidate', 'formNoValidate'],
  ['hidden', 'hidden'],
  ['loop', 'loop'],
  ['nomodule', 'noModule'],
  ['novalidate', 'noValidate'],
  ['open', 'open'],
  ['playsinline', 'playsInline'],
  ['readonly', 'readOnly'],
  ['required', 'required'],
  ['reversed', 'reversed'],
  ['scoped', 'scoped'],
  ['seamless', 'seamless'],
  // Microdata
  ['itemscope', 'itemScope'],
  // React props that React team set as DOM properties rather than attributes. They are all booleans.
  ['checked', 'checked'],
  ['multiple', 'multiple'],
  ['muted', 'muted'],
  ['selected', 'selected'],
  // HTML attributes that behave like booleans but accept a string value.
  ['capture', 'capture'],
  ['download', 'download'],
  // HTML attributes that must be positive number.
  ['cols', 'cols'],
  ['rows', 'rows'],
  ['size', 'size'],
  ['span', 'span'],
  ['rowspan', 'rowSpan'],
  ['start', 'start'],
  ['crossorigin', 'crossOrigin'],
  ['src', 'src'],
  ['href', 'href'],
  ['action', 'action'],
  ['formaction', 'formAction'],
  ['tabindex','tabIndex'],
  ...[
    'accent-height',
    'alignment-baseline',
    'arabic-form',
    'baseline-shift',
    'cap-height',
    'clip-path',
    'clip-rule',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'dominant-baseline',
    'enable-background',
    'fill-opacity',
    'fill-rule',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'glyph-name',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'horiz-adv-x',
    'horiz-origin-x',
    'image-rendering',
    'letter-spacing',
    'lighting-color',
    'marker-end',
    'marker-mid',
    'marker-start',
    'overline-position',
    'overline-thickness',
    'paint-order',
    'panose-1',
    'pointer-events',
    'rendering-intent',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'strikethrough-position',
    'strikethrough-thickness',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'underline-position',
    'underline-thickness',
    'unicode-bidi',
    'unicode-range',
    'units-per-em',
    'v-alphabetic',
    'v-hanging',
    'v-ideographic',
    'v-mathematical',
    'vector-effect',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'word-spacing',
    'writing-mode',
    'xmlns:xlink',
    'x-height',
    'xlink:actuate',
    'xlink:arcrole',
    'xlink:role',
    'xlink:show',
    'xlink:title',
    'xlink:type',
    'xml:base',
    'xml:lang',
    'xml:space',
    'xlink:href',
  ].map(attr => [attr, reactlize(attr)])
];
attributes.forEach(([html, rc]) => {
  config[html] = rc;
});

const handlers = [
  'copy',
  'cut',
  'paste',
  'toggle',
  'encrypted',
  'abort',
  // 'animationCancel', // not supported in React
  'animationEnd',
  'animationIteration',
  'animationStart',
  'auxClick',
  'blur',
  'error',
  'focus',
  'cancel',
  'canPlay',
  'canPlayThrough',
  'change', // React onChange does not use browser behavior
  'click',
  'close',
  'contextMenu',
  // 'cuechange',  // not supported in React
  'drag',
  'dragEnd',
  'dragEnter',
  'dragExit',
  'dragLeave',
  'dragOver',
  'dragStart',
  'drop',
  'durationChange',
  'emptied',
  'ended',
  // 'formdata', // not supported in React
  'gotPointerCapture',
  'input',
  'invalid',
  'keyDown',
  'keyPress',
  'keyUp',
  'load',
  'loadedData',
  'loadedMetadata',
  // 'loadEnd', // not supported in React
  'loadStart',
  'lostPointerCapture',
  'mouseDown',
  'mouseEnter',
  'mouseLeave',
  'mouseMove',
  'mouseOut',
  'mouseOver',
  'mouseUp',
  // 'mouseWheel',
  'wheel',
  'pause',
  'play',
  'playing',
  'pointerDown',
  'pointerMove',
  'pointerUp',
  'pointerCancel',
  'pointerOver',
  'pointerOut',
  'pointerEnter',
  'pointerLeave',
  // 'pointerLockChange', // not supported in React
  // 'pointerLockError', // not supported in React
  'progress',
  'rateChange',
  'reset',
  // 'resize', // not supported in React
  'scroll',
  'seeked',
  'seeking',
  'select',
  'selectStart',
  // 'selectionChange', // not supported in React
  // 'show', // not supported in React
  // 'sort', // not supported in React
  'stalled',
  'submit',
  'suspend',
  'timeUpdate',
  'volumeChange',
  'touchCancel',
  'touchEnd',
  'touchMove',
  'touchStart',
  // 'transitionCancel', // not supported in React
  'transitionEnd',
  // 'transitionRun', // not supported in React
  // 'transitionStart', // not supported in React
  'waiting',
].map(el => {
  const reactHandler = 'on' + el[0].toUpperCase() + el.substring(1);
  return [ 'on' + el.toLowerCase(), reactHandler];
});
handlers.push(['ondblclick','onDoubleClick']);
handlers.forEach(([html, rc]) => {
  config[html] = rc;
});
module.exports = config;
`;

export default config;
