// Los filtros se pueden instalar de forma local y global
// Convertir duracion de las canciones de segundos a minutos
const msToMn = {}

function convertMsToMn (ms) {
  // Un minuto tiene 6000 milisegundos (division redondeada al entero mas bajo)
  const min = Math.floor(ms / (1000 * 60))
  // Del resto de dividir, (serían los ms restantes) los dividimos entre un segundo (1000 milisegundos)
  const sec = ((ms % 6000) / 1000).toFixed(0)

  return `${(min < 10) ? '0' + min : min}:${(sec < 10) ? '0' + sec : sec} min`
}

msToMn.install = function (Vue) {
  Vue.filter('ms-to-mn', function (val) {
    return convertMsToMn(val)
  })
}

export default msToMn
