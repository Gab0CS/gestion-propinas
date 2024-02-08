<template>
  <div class="divisor-propinas">
    <h2>¿Entre cuántos Quieres Dividir Las <br>Propinas?</h2>
    <br>
    <div class="input-container">
      <input type="number" id="numero-meseros" v-model="numeroMeseros" />
    </div>
    <button @click="dividirPropinas">Dividir</button>
    <div v-if="propinaPorMesero !== null" class="resultado">
     $ {{ propinaPorMesero.toLocaleString() }} x persona
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroMeseros: 1,
      propinaPorMesero: "0.00"
    };
  },
  methods: {
    dividirPropinas() {
      if (this.numeroMeseros <= 0) {
        alert("El número de meseros debe ser mayor que cero");
        return;
      }
      const propinasHoy = this.$store.state.propinasHoy;
      if (propinasHoy === '') {
        alert("Primero ingresa el número de propinas antes de dividir");
        return;
      }
      const totalPropinas = parseFloat(propinasHoy);
      if (isNaN(totalPropinas)) {
        alert("El valor ingresado no es válido");
        return;
      }
      this.propinaPorMesero = (totalPropinas / this.numeroMeseros).toFixed(2);
    }
  }
};
</script>

<style scoped>
.divisor-propinas {
  margin-top: 20px;
}

.input-container {
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
}
.input-container input{
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px 15px;
}
.input-container label {
  margin-right: 10px;
}

.input-container input {
  width: 100px;
}

.resultado {
  margin-top: 10px;
  font-weight: bold;
}
</style>
