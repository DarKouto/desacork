<script setup>
  import desacork1 from '@/images/desacork1.png';
  import { ref, onMounted } from 'vue';
  import { useGoTo } from 'vuetify';

  const goTo = useGoTo();
  const drawer = ref(false);
  const activeSection = ref('#home');

  const navItems = [
    { title: 'Home', target: '#home' },
    { title: 'Sobre Nós', target: '#sobre-nos' },
    { title: 'Contactos', target: '#contactos' },
  ];

  const handleNav = (target) => {
    drawer.value = false;
    goTo(target, {
      duration: 800,
      easing: 'easeInOutCubic',
      offset: -64,
    });
  };

  onMounted(() => {
    const options = {
      root: null,
      rootMargin: '-64px 0px -40% 0px', 
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`;
        }
      });
    }, options);

    navItems.forEach(item => {
      const el = document.querySelector(item.target);
      if (el) observer.observe(el);
    });
  });
</script>

<template>
  <v-app-bar color="primary" elevation="2" class="custom-fixed-bar">
    <v-app-bar-nav-icon 
      class="hidden-md-and-up" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title class="font-weight-bold">
      <a 
        href="#"
        @click.prevent="handleNav('#home')"
        class="d-flex align-center" 
        style="text-decoration: none; color: inherit;"
      >
        <v-img :src="desacork1" max-width="45" class="mr-3" contain></v-img>
        <span>Desacork</span>
      </a>
    </v-app-bar-title>
    
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
      <v-btn 
        v-for="item in navItems" 
        :key="item.title" 
        variant="text"
        :class="{ 'active-link': activeSection === item.target }"
        @click="handleNav(item.target)"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>

<v-navigation-drawer
  v-model="drawer"
  location="left"
  temporary
  app
  touchless
  style="position: fixed !important; height: 100vh !important;"
>
    <div class="pa-4 text-h6 font-weight-bold text-primary d-flex align-center">
      <v-icon icon="mdi-menu" class="mr-2"></v-icon>
      Menu
    </div>

    <v-divider class="mb-2"></v-divider>

    <div 
      v-for="item in navItems" 
      :key="item.title"
      class="nav-mobile-item mb-2"
      :class="{ 'active-mobile': activeSection === item.target }"
      @click="handleNav(item.target)"
    >
      <v-icon 
        :icon="item.target === '#home' ? 'mdi-home' : (item.target === '#sobre-nos' ? 'mdi-information' : 'mdi-email')"
        class="mr-4"
        :color="activeSection === item.target ? 'primary' : 'grey-darken-1'"
      ></v-icon>
      <span :class="activeSection === item.target ? 'text-primary font-weight-bold' : 'text-grey-darken-3'">
        {{ item.title }}
      </span>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.custom-fixed-bar {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  z-index: 1000 !important;
}
.v-app-bar-title {
  cursor: pointer;
}
.active-link {
  background-color: rgba(255, 255, 255, 0.15) !important;
  border-radius: 0;
  opacity: 1;
}
.nav-mobile-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.05);
  }
}

.active-mobile {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
  border-left: 4px solid rgb(var(--v-theme-primary));
}
</style>