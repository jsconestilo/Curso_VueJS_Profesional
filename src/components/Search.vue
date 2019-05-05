<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados...

    // Para aplicar transiciones Vue es necesario indicar el nombre de la transición
    // declarada en el archivo de estilos. name-estadotransision-vue
    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.navbar
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                v-model="searchQuery",
                @keyup.enter="search",
                type="text",
                placeholder="Buscar canciones")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p.help.is-info.has-text-right: small {{ searchMessages }}

      .container.results
        // .columns.is-multiline
        transition-group(name="fade", tag="div" class="columns is-multiline")
          .column.is-one-quarter(v-for="t in tracks", :key="t.id")
            // | {{ t.name }} - {{ t.artists[0].name }}
            // El hijo emite un evento, por tanto el padre lo escucha (select)
            // Para que se realice alguna modificación
            // En selectedTrack se almacena el id del elmento seleccionado, por tanto es sencillo saber a que elemento vamos a resaltar
            pm-track(:track="t",
            :class="{ 'is-active': t.id === selectedTrack }",
            v-blur="t.preview_url",
            @select="setSelectedTrack")
      p Todos los derechos reservados
</template>

<script>
// En import no es necesario agrefar la extensión .js
// El . se sustituye por @ gracias a la configuracion de rutas alias en webpack
/* import trackService from './services/track.js'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue' */
import trackService from '@/services/track.js'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

/* const tracks = [
  { name: 'Muchacha', artists: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artists: 'El Pepo' },
  { name: 'I was made for loving you', artists: 'Kiss' }
] */
export default {
  name: 'App',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  computed: {
    searchMessages () {
      return 'Encontrados: ' + this.tracks.length
    }
  },
  watch: {
    // Si la notificación esta activa, en 3 segundos se debe de ocultar
    // Observamos los cambios en la property showNotification que es la encargada de ostrar u ocultar  la notificacion
    showNotification () {
      if (this.showNotification) {
        // Si esta en true, entonces en 3 segundos la pasamos a false
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      // console.log(this.searchQuery)
      // this.tracks = tracks
      if (this.searchQuery === '') { return }
      this.isLoading = true
      this.tracks = []
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          // Si el total de resultados es 0, entonces se establece en true y se mostraria el mensaje de notificacon
          this.showNotification = res.tracks.total === 0
          // Ver en consola el cuerpo del res
          // this.tracks = []
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
     margin: 20px 0;
  }

  .is-active {
    border: 1px solid #23d160;
  }
  span {
    width: 100%;
  }
</style>
