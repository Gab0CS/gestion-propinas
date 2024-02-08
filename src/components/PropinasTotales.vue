<template>
  <div class="total-propinas">
    <div class="col">
      <h2>Total de Propinas</h2>
      <div v-if="numeroIngresado !== null" class="numero-ingresado">{{ numeroIngresado }}</div>
      <DivisorPropinas />
      <MetodosPago/>
    </div>
    <div class="col">
      <PanelNumerico @propinasIngresadas="actualizarPropinasHoy" />
    </div>
    <div class="col">
      <PagosHechos />
    </div>
  </div>
  <div class="pagar-propinas">
      <PagarPropinas/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PanelNumerico from './PanelNumerico.vue';
import DivisorPropinas from './DivisorPropinas.vue';
import MetodosPago from './MetodosPago.vue';
import PagarPropinas from './PagarPropinas.vue';
import PagosHechos from './PagosHechos.vue';

export default {
  components: {
    PanelNumerico,
    DivisorPropinas,
    MetodosPago,
    PagarPropinas,
    PagosHechos
  },
  computed: {
    ...mapState({
      totalPropinas: state => state.totalPropinas,
      numeroIngresado: state => state.numeroIngresado
    })
  },
  created() {
    this.fetchTotalPropinas();
  },
  methods: {
    async fetchTotalPropinas() {
      try {
        const response = await fetch('/api/tips/total');
        if (!response.ok) {
          throw new Error('Error al obtener el total de propinas');
        }
        const data = await response.json();
        this.$store.commit('actualizarTotalPropinas', data.total);
      } catch (error) {
        console.error(error);
      }
    },
    actualizarPropinasHoy(propinas) {
      this.$store.commit('actualizarPropinasHoy', propinas);
    }
  }
}
</script>

<style scoped>
.col {
  max-width: 33%;
  margin: 10px 5%;
}
.col h2 {
  color: #FA8072;
}
.total-propinas {
  margin-left: 10%;
  text-align: center;
  display: flex;
}
.total, .total-hoy {
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
}
.numero-ingresado{
  background-color: rgba(250, 128, 114, 0.3);
  border-radius: 15px;
  font-size: 2rem;
  color: rgb(250, 128, 114);
  padding: 5px 15px;
}
.pagar-propinas{
  width: 100%;
  margin-left: 15%;
}
</style>
