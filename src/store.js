import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      totalPropinas: null,
      propinasHoy: '',
      divisionPropinas: [],
      pagosRealizados: [],
      numeroIngresado: '$ 0.00'
    };
  },
  mutations: {
    actualizarTotalPropinas(state, nuevoTotal) {
      state.totalPropinas = nuevoTotal;
    },
    actualizarPropinasHoy(state, nuevasPropinas) {
      state.propinasHoy = nuevasPropinas;
    },
    actualizarDivisionPropinas(state, nuevaDivision) {
      state.divisionPropinas = nuevaDivision;
    },
    actualizarPagosRealizados(state, nuevosPagos) {
      state.pagosRealizados = nuevosPagos;
    },
    actualizarNumeroIngresado(state, numero) {
      state.numeroIngresado = numero;
    }
  },
  actions: {
  },
  getters: {
  }
});
