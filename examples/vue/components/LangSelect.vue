<template>
  <select v-model="locale">
    <option v-for="lang in locales" :key="lang" :value="lang">
      {{ lang }}
    </option>
  </select>
</template>
<script>
import Cookie from 'js-cookie'
import { locale, locales } from '../../t'

export default {
  data: () => ({
    locale,
    locales
  }),
  watch: {
    locale (val) {
      Cookie.set('locale', val)
      location.reload()
    }
  }
}
</script>
