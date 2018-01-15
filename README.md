# The Simplest Universal i18n Solution

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## $ Features
* Support browsers and Node.js
* No dependencies (source code < 0.5KB)
* Does not rely on any framework (React / Vue / Angular / ...) or any bundler (Webpack / Parcel / Rollup / ...)
* Extremely simple and flexible

## $ Installation
### ⊙ NPM
`npm i simplest-i18n -S`

### ⊙ CDN
`<script src="//unpkg.com/simplest-i18n"></script>`

## $ Usage

```js
import i18n from 'simplest-i18n'

const t = i18n({
  locale: navigator.language.toLowerCase(), // e.g. here yields 'en-us'
  locales: [
    // it is recommended that set your mother tongue as the first locale (e.g. Simplified Chinese for me)
    'zh-cn',
    'en-us',
    'ja'
  ]
})

console.log(
  t(
    '你好',
    'Hello',
    'こんにちは'
  )
) // outputs 'Hello'
```

***

There are code examples for React and Vue in [`examples/`](./examples/)  
Check it out and run it with the following directives:

```
>_ git clone https://github.com/kenberkeley/simplest-i18n
>_ npm i
>_ npm run react (or npm run vue)
```

[npm-url]: https://www.npmjs.com/package/simplest-i18n
[npm-v-img]: http://img.shields.io/npm/v/simplest-i18n.svg
[npm-dl-img]: http://img.shields.io/npm/dm/simplest-i18n.svg
