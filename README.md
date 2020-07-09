<div align="center">
<h1> react-domproperty </h1>

<p>Convert HTML DOM attributes to React DOM attributes</p>
</div>

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)

## Why?

- [react-attr-convert](https://github.com/utatti/react-attr-converter) does a great job but it has no longer been maintained.
- [babel-plugin-react-html-attrs](https://github.com/insin/babel-plugin-react-html-attrs) is just overkill for such a simple conversion task.

## Usage

```js
const convert = require('react-domproperty');
// nomral html attribute
convert('autoplay'); // => autoPlay
convert('crossOrigin'); // => crossOrigin
// SVG attribute
convert('xml:base'); // => xmlBase
// event handler
convert('onclick'); // => onClick
// bypass custom attributes
convert('custom-x'); // => custom-x
```

## Supported Attributes

See [attributes](./doc/attributes.md).

## Other

This project uses [ts-rollup-boilerplate](https://github.com/tizee/ts-rollup-boilerplate) as a starter.

## LICENSE

[MIT](./LICENSE)

[package]: https://www.npmjs.com/package/react-domproperty
[version-badge]: https://img.shields.io/npm/v/react-domproperty.svg?style=flat-square
[build]: https://travis-ci.com/tizee/react-domproperty
[build-badge]: https://travis-ci.org/tizee/react-domproperty.svg?branch=master
[coverage]: https://codecov.io/github/tizee/react-domproperty
[coverage-badge]: https://img.shields.io/codecov/c/github/tizee/react-domproperty.svg?style=flat-square
[license]: https://github.com/tizee/react-domproperty/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/react-domproperty.svg?style=flat-square
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
