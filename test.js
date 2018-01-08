import test from 'ava'
import i18n from './i18n'

// name as `$t`, avoid conflicting with `t` of ava
const $t = i18n({
  locale: 'cn',
  locales: ['en', 'cn']
})

test('locale must be included in locales', t => {
  t.throws(() => {
    i18n({
      locale: 'jp',
      locales: ['en', 'cn']
    })
  })
})

test('test missing translation', t => {
  t.throws(() => {
    $t('Only English translation')
  })
})

test('normal usage', t => {
  const num = 10
  const translations = [
    `I have ${num} apples`, // en
    `我有 ${num} 个苹果`    // cn
  ]

  t.is(
    $t(translations[0], translations[1]),
    translations[1]
  )
})
