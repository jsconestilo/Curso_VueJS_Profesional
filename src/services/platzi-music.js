// https://packagecontrol.io/packages/Emoji
// https://github.com/filipelinhares/vuejs-snippets-sublime
// Sin ./ o / webpack interperta que es un archivo de node_module
import trae from 'trae'
// Esto no es una dependencia es una archivo que se encuentra a este mismo nivel de file ./
import configService from './config.js'

// Esto es una instancia de trae para centralizar nuestras peticiones Fetch
const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
})
export default platziMusicService
