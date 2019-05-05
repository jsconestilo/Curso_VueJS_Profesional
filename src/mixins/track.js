/*
Los mixin permite compartir funcionalidad entre componentes.
Esto hace que se reutilice el código.
Para este ejemplo el método selectTrack() se invoca desde el componente track y desde
el trackDetail. ambos hacen lo mismo, vincular la data al componente Player.
Podemos tener funcionalidad compartida de muchos lados.
 */
const trackMixin = {
  // Se define cualquier funcinalidad del Vue Model
  // cualquier cosa que soporte un componente
  methods: {
    selectTrack () {
      // if (!this.track.preview_url) { return }

      // Los hijos pasan información al padre a través de eventos
      this.$emit('select', this.track.id)
      // En este caso se usa el plugin ya que esta info va a otro componente sin parentesco
      // this.$bus.$emit('set-track', this.track)

      // confirmar una mutación para que modifique el estado global de la aplicación
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
