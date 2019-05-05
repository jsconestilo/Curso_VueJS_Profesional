<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}
      .content
        small {{ track.duration_ms | ms-to-mn }}
        nav.level
          .level-left
            button.button.level-item.is-primary(@click="selectTrack")
              span.icon.is-small
                i.fas.fa-play
            button.button.level-item.is-warning(@click="goToTrack(track.id)")
              span.icon.is-small
                i.fas.fa-globe
</template>

<script>
import trackMixin from '@/mixins/track'

export default {

  name: 'Track',

  mixins: [ trackMixin ],

  props: {
    track: { type: Object, required: true }
  },

  methods: {
    /* selectTrack () {
      // if (!this.track.preview_url) { return }
      // Los hijos pasan información al padre a través de eventos
      this.$emit('select', this.track.id)
      // En este caso se usa el plugin ya que esta info va a otro componente sin parentesco
      this.$bus.$emit('set-track', this.track)
    }, */
    goToTrack: function (id) {
      // if (!this.track.preview_url) { return }
      // Cuando se instancia el vue-router tenemos dos objetos.
      // $route para especificar la funcionalidad del propio router o acceder a la información de la ruta en cuestión.
      // $router para ejecutar sus funciones (navegar programaticamente)
      // Navegar de una ruta a otra mediante código (nombre de la ruta y sus posibles parametros)
      this.$router.push({ name: 'track', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    border-radius: 0;
    padding: 0;
    border-color: gray;
  }
  .card {
    height: 100%;
  }
</style>
