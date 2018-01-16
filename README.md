# The Simplest Universal i18n Solution

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]
[![build][build-img]][build-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## § Preface
In most cases, **internationalization** is actually translating your website into English  
Which means that you might not need a cumbersome framework to implement this  
And this tiny repo is for you!

## § Features
* Support browsers and Node.js
* No dependencies (compressed [source code](./i18n.js) < 0.5KB, extremely simple and comprehensible)
* Does not rely on any framework (React / Vue / Angular / ...) or any bundler (Webpack / Parcel / Rollup / ...)
* No tedious and verbose documentation (Just this README)

## § Installation
### ⊙ NPM
`npm i simplest-i18n -S`

### ⊙ CDN
`<script src="//unpkg.com/simplest-i18n"></script>`

## § Usage

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
>_ git clone https://github.com/kenberkeley/simplest-i18n.git
>_ npm i
>_ npm run react (or npm run vue)
```

## § Merits

### ⊙ Keep in context

```js
// this demonstrates how most popular i18n frameworks do
const messages = {
  en: {
    greeting: 'Hello {name}, long time no see'
  },
  cn: {
    greeting: '你好，{name}，好久不见了'
  },
  ja: {
    greeting: 'こんにちは、{name}、長い時間は見ていない'
  }
}
*****************************************************************
// in another file (lose direct sight of the original translations)
render () {
  return (
    <h1>{
      format('greeting', { name: this.state.name })
    }</h1>
  )
}
```

```js
// this is how we do with ES6 template literals
render () {
  const { name } = this.state
  return (
    <h1>{
      t(
        `你好，${name}，好久不见`,
        `Hello ${name}, long time no see`,
        `こんにちは、${name}、長い時間は見ていない`
      )
    }</h1>
  )
}
```

From now on, naming things and duplicate keys would not bother you anymore  
(the *key* is actually the original text written in your mother tongue)  
Before that, you might have to use a kinda nonsense  `module1.page1.greeting` (namespace) to avoid these problems

### ⊙ Flexible
How do we solve the pluralization problem?

* Method 0: Simple and crude: appending `(s) / (es)` directly

```js
render () {
  const { num } = this.state
  return (
    <span>{
      t(
        `我有 ${num} 个苹果`,
        `I have ${num} apple(s)`
      )
    }</span>
  )
}
```

* Method 1: Write your own helper function

```js
/**
 * @param  {String} nouns
 * @param  {String} num
 * @return {String}
 * e.g.
 * pluralize('apple|apples', 3) => '3 apples' 
 * pluralize('man|men', 1) => '1 man'
 */
export default function pluralize(nouns, num) {
  return `${num} ${nouns.split('|')[+!(num === 1)]}`
}
```

* Method 2: Search `plural` in [npmjs.com](https://www.npmjs.com) and pick one

> You can control everything in the project! No blackboxes! All functions are pure, simple and composable!

## § Tips

* If you are using Webpack and tired of importing `t` everywhere, try [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) instead (`window.t = t` is ok as you like it)


[npm-url]: https://www.npmjs.com/package/simplest-i18n
[npm-v-img]: http://img.shields.io/npm/v/simplest-i18n.svg
[npm-dl-img]: http://img.shields.io/npm/dm/simplest-i18n.svg
[build-img]: https://travis-ci.org/kenberkeley/simplest-i18n.svg?branch=master
[build-url]: https://travis-ci.org/kenberkeley/simplest-i18n
