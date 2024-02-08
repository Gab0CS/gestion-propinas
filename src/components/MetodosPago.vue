<template>
    <div class="metodos-pago">
      <h2>Elige El Método De Pago</h2>
      <button @click="seleccionarMetodo('tarjeta')" :class="{ 'seleccionado': metodoPago === 'tarjeta' }">Pago con Tarjeta</button>
      <button @click="seleccionarMetodo('efectivo')" :class="{ 'seleccionado': metodoPago === 'efectivo' }">Pago en Efectivo</button>
      <div class="resultado">
        <h3>Método de Pago Seleccionado:</h3>
        <div>{{ metodoPago }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        metodoPago: null
      };
    },
    methods: {
      seleccionarMetodo(metodo) {
        this.metodoPago = metodo;
      }
    }
  };
  </script>
  
  <style scoped>
  .metodos-pago {
    margin-top: 30px;
  }
  
  button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #aaa;
  }
  
  button.seleccionado {
    background-color: #FA8072;
    color: white;
  }
  
  .resultado {
    margin-top: 20px;
  }
  
  .resultado div {
    font-size: 18px;
  }
  </style>