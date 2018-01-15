import Cookie from 'js-cookie'
import i18n from '../'

export const locale = Cookie.get('locale') || 'en'
export const locales = ['cn', 'en', 'ja']

const t = i18n({
  locale,
  locales
})
export default t
