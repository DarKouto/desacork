<script setup>
  import { ref } from 'vue';
  const texto = ref('Este é o value da variável texto')
</script>

<template>
  <div class="fundo">
    <h2>Este é o components/HeroSection.vue</h2>
    <h1>Desacork.com</h1>
    <p>Com Vue e Vuetify</p>
    <p>{{ texto }}</p>
    <hr/>
  </div>
</template>

<style scoped lang="scss">
  h2 {
    color: green;
  }
  .fundo {
    background-image: url("/src/images/fundo.jpg");
    height: 800px;
    width: auto;
  }
</style>