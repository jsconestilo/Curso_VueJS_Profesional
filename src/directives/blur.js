const blur = {}

function setBlur (el, binding) {
  // binding es el valor que se le pasa a la directiva como v-show="valor"
  if (!binding.value) {
    el.style.filter = 'blur(3px)'
    el.style.cursor = 'not-allowed'
    el.querySelectorAll('button').forEach(function (a) {
      a.setAttribute('disabled', true)
    })
  }
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind: function (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
