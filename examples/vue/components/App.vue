<template>
  <div>
    <lang-select />

    {{ $t(
      '你好，世界',
      'Hello, world',
      'こんにちは、世界'
    ) }}
  </div>
</template>
<script>
import LangSelect from './LangSelect'

export default {
  components: { LangSelect },
  mounted () {
    console.log(
      this.$t(
        '欢迎来到中国',
        'Welcome to the US',
        'ようこそ日本へ'
      )
    )
  }
}
</script>
