<template>
  <div class="panel-numerico">
    <div class="cantidad-ingresada">
      <span class="propinas-hoy">{{ propinasHoy }}</span>
      <button @click="borrarUltimoDigito">Borrar</button>
    </div>
    <div class="teclado">
      <div v-for="numero in numeros" :key="numero" class="tecla" @click="ingresarNumero(numero)">{{ numero }}</div>
    </div>
    <button class="tecla cero" @click="ingresarNumero(0)">0</button>
    <button class="confirmar" @click="ingresarPropinas">Ingresar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propinasHoy: ''
    };
  },
  computed: {
    numeros() {
      return Array.from({ length: 9 }, (_, index) => index + 1);
    }
  },
  methods: {
    ingresarNumero(numero) {
      this.propinasHoy += numero.toString();
    },
    borrarUltimoDigito() {
      this.propinasHoy = this.propinasHoy.slice(0, -1);
    },
    ingresarPropinas() {
      this.$emit('propinasIngresadas', parseInt(this.propinasHoy, 10));
      this.$store.commit('actualizarNumeroIngresado', `$ ${this.propinasHoy}`);
      this.propinasHoy = '';
    }
  }
};
</script>

  
  <style scoped>
  .propinas-hoy{
    width: 60px;
    background-color: #ccc;
  }
  .panel-numerico {
    width: 500px;
    margin: 0 auto;
    background-color: #ccc;
    padding: 20px;
    border-radius: 10px;
  }
  
  .cantidad-ingresada {
    margin-bottom: 10px;
    border-bottom: 2px solid #000;
  }
  
  .cantidad-ingresada span {
    font-size: 24px;
    margin-right: 10px;
  }
  
  .cantidad-ingresada button {
    padding: 10px 15px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: end;
  }
  
  .teclado {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .tecla, .confirmar {
    padding: 20px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
  }
  .confirmar{
    margin-left: 10px;
  }
  
  .tecla:hover, .confirmar:hover {
    background-color: #FA8072;
  }
  
  .cero {
    grid-column: span 2;
  }
  
  .confirmar {
    grid-column: span 3;
  }
  </style>
  