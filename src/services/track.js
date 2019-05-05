import platziMusicService from './platzi-music.js'

// Creamos un servicio track que interactua con el servicio platzi music
// Por cada servicio hay que crear un objeto (facebook, twitter)
const trackService = {}
// q es una convención para busqueda
trackService.search = function (q) {
  // El tipo de resultados son pistas no albunes o artistas
  // https://platzi-music-api.now.sh/search?q=muchachita&type=track
  const type = 'track'
  // Retorna la promesa (promise chain) para que la use otro componente
  return platziMusicService.get('/search', {
    params: {
      q: q,
      type: type
    }
  }).then(function (res) {
    return res.data
  })
}

trackService.getById = function (id) {
  return platziMusicService.get(`tracks/${id}`)
    .then(res => res.data)
}

export default trackService
