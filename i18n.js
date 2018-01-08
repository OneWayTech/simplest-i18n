(function (global, factory) {
  /* eslint-disable */
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.i18n = factory())
  /* eslint-enable */
}(this, function () {
  /**
   * @param  {String}   options.locale
   * @param  {String[]} options.locales
   * @return {Function} t
   * e.g. const t = i18n({ locale: 'jp', locales: ['en', 'cn', 'jp'] })
   */
  return function i18n (options) {
    var locale = options.locale
    var locales = options.locales
    var localeIdx = locales.indexOf(locale)

    if (localeIdx === -1) {
      throw new Error(locale + ' is not included in ' + locales)
    }

    /**
     * @param  {...String[]} translations (must be consistent with `locales`)
     * @return {String}      (translation in `locale`)
     * e.g. t('Hello', '你好', 'こんにちは') => 'こんにちは'
     */
    return function t () {
      var translations = [].slice.call(arguments)
      if (translations.length !== locales.length) {
        throw new Error(translations[0] + ': missing translation(s) in ' + locales.slice(translations.length))
      }
      return translations[localeIdx]
    }
  }
}))
