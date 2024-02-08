<template>
    <div class="pagar-propinas">
      <h2>Pagar Propinas</h2>
      <button @click="registrarPago">Pagar propinas</button>
      <div v-if="pagosRealizados.length > 0" class="pagos-registrados">
        <h3>Pagos Registrados:</h3>
        <ul>
          <li v-for="(pago, index) in pagosRealizados" :key="index">{{ pago }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pagosRealizados: []
      };
    },
    methods: {
      registrarPago() {
        const fecha = new Date().toLocaleString();
        this.pagosRealizados.push(`Pago registrado el ${fecha}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagar-propinas {
    margin-top: 30px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #FA8072;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
  
  button:hover {
    background-color: #FF6347;
  }
  
  .pagos-registrados {
    margin-top: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  