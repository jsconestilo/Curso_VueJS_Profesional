<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>

import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
/* const tracks = [
  { name: 'Muchacha', artists: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artists: 'El Pepo' },
  { name: 'I was made for loving you', artists: 'Kiss' }
] */
export default {
  name: 'App',
  components: { PmFooter, PmHeader },
  data () {
    return { }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
     margin: 20px 0;
  }

  .is-active {
    border: 1px solid #23d160;
  }
</style>
