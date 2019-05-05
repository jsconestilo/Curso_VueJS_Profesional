<template lang="pug">
  .container(v-if="track && track.id")
    .columns
      .column.is-3.has-text-centered
        pm-loader(v-show="isLoading")
        p.image
          img(:src="track.album.images[0].url")
        p.button-bar
          a.button.is-primary.is-large
            span.icon(@click="selectTrack")
              i.fas.fa-play
      .column.is-8
        .panel
          .panel-heading
            // h1.title {{ track.name }}
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
                nav.level
                  .level-left
                    a.level-item
        // pm-track(:track="track")
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'

// import trackService from '@/services/track'
// import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  // components: { PmTrack, PmLoader },
  components: { PmLoader },
  // name: 'TrackDetail',
  mixins: [ trackMixin ],
  data () {
    return {
      // track: {},
      isLoading: true
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    // Se emplea el objeto $route para acceder a información del propio router, en este caso al parametro id de la url
    const id = this.$route.params.id
    // Si la cancion no existe, o su id no existe o su id es diferente a la de url
    // Si se busca
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id: id })
        .then(() => {
          console.log('Track loaded...')
          this.isLoading = false
        })
    } else {
      this.isLoading = false
    }
    /* trackService.getById(id)
      .then(res => {
        console.log(res)
        this.isLoading = false
        this.track = res
      }) */
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
