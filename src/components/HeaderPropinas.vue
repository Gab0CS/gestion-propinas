<template>
    <div class="header">
      <button>
        atras
      </button>
      <h1>Pago de Propinas</h1>
      <div class="caja">
        <span class="texto">Efectivo en caja:</span>
        <br>
        <span class="dinero">$ {{ dineroEnCaja.toLocaleString() }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dineroEnCaja: 5500 
      };
    }
  }
  </script>
  
  <style scoped>
  button{
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    margin-left: 5%;
  }
  button::before{
    content: '< ';
  }
  .header {
    color: #000;
    padding: 5px 0 0 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }
  
  .caja {
    font-weight: bold;
  }
  .texto{
    color: rgb(	250, 128, 114);
    margin: 10px auto 50px auto;
  }
  .dinero{
    background-color: 	rgba(	250, 128, 114, 0.3);
    color: rgb(	250, 128, 114);
    font-size: 2rem;
    padding: 2px 10px;
    border-radius: 10px;
  }
  </style>
  