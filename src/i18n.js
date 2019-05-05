import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About'
  },
  es: {
    search: 'Búsqueda',
    about: 'Nosotros'
  }
}

const i18n = new Vuei18n({
  messages: messages,
  locale: 'en'
})

export default i18n
