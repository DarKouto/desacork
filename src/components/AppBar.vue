<script setup>
  import desacork1 from '@/images/desacork1.png';
  import { ref } from 'vue';
  const drawer = ref(false);
  const navItems = [
    { title: 'Home', to: '/' },
    { title: 'Sobre Nós', to: '/sobre-nos' },
    { title: 'Contactos', to: '/contactos' },
  ];
  const closeDrawer = () => {
    return drawer.value = false;
  };
</script>

<template>
  <v-app-bar color="primary" elevation="2">
    <v-app-bar-nav-icon 
      class="hidden-md-and-up" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title class="font-weight-bold">
      <router-link 
        to="/" 
        class="d-flex align-center" 
        style="text-decoration: none; color: inherit;"
      >
        <v-img :src="desacork1" max-width="45" class="mr-3" contain></v-img>
        <span>Desacork</span>
      </router-link>
    </v-app-bar-title>
    

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
      <v-btn 
        v-for="item in navItems" 
        :key="item.title" 
        :to="item.to" 
        variant="text"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :to="item.to"
        @click="closeDrawer"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-app-bar-title {
  cursor: pointer;
}
</style>