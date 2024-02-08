<template>
  <HeaderPropinas />
  <SideBar />
  <PropinasTotales />
</template>

<script>
import SideBar from './components/SideBar'
import HeaderPropinas from './components/HeaderPropinas.vue'
import PropinasTotales from './components/PropinasTotales.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    HeaderPropinas, 
    PropinasTotales
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
