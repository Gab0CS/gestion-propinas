<template>
    <div class="sidebar">
      <div class="sidebar-item" v-for="(item, index) in sidebarItems" :key="index">
        <i :class="item.icon"></i>
        <span>{{ item.text }}</span>
        <font-awesome-icon :icon="['fas', 'cash-register']" />
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        sidebarItems: [
          { icon: 'fas house', text: 'Inicio' },
          { icon: 'fas cash-register', text: 'Propinas' },
          { icon: 'fas fa-user', text: 'Perfil' },
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
  width: fit-content;

  background-color: #fff;
  border-right: 2px solid #ccc;
  color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 99;
}

.sidebar-item {
  padding: 10px;
  display: flex;
  align-items: center;
}

.sidebar-item i {
  margin-right: 10px;
}
  </style>