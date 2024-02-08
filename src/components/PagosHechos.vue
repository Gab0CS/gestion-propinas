<template>
    <div class="pagos">
      <h2>Pagos Realizados</h2>
      <ul>
        <li v-for="(pago, index) in pagosRealizados" :key="index">{{ pago }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pagosRealizados: []
      };
    }
  };
  </script>
  
  <style scoped>
  .pagos {
    margin-top: 30px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  