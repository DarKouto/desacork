<script setup>
  console.log("Este é o components/HeroSection.vue")
  import { ref } from 'vue';
  const texto = ref('Este é o value da variável texto')
</script>

<template>
  <h2>Esta será a HeroSection</h2>
  <h1>Desacork.com</h1>
  <p>Com Vue e Vuetify</p>
  <p>{{ texto }}</p>
  <hr/>
</template>

<style scoped lang="scss">
  h2 {
    color: green;
  }
</style>