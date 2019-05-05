<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
            .navbar-item
              strong Platzi Music Pro
          .navbar-end.navbar-menu
            a.nav-item(@click="selectLang('en')") Inglés
            a.nav-item(@click="selectLang('es')") Español
            router-link.nav-item(to="/") {{ $t('search') }}
            router-link.nav-item(:to="{ name: 'about' }") {{ $t('about') }}
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music Pro
        h2.subtitle Canciones que están buenísimas, como la amiga del cerro.
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer },
  methods: {
    selectLang (language) {
      this.$i18n.locale = language
    }
  }
}
</script>
