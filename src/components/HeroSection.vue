<script setup>
  import backgroundImage from '@/images/fundo.jpg';
  import { useGoTo } from 'vuetify';

  const goTo = useGoTo();

  const scrollToSobre = () => {
    goTo('#sobre-nos', {
      duration: 800,
      easing: 'easeInOutCubic',
      offset: -64,
    });
  };
</script>

<template>
  <v-img
    :src="backgroundImage"
    class="align-center"
    cover
    height="100vh" 
  >
    <div class="hero-content-wrapper">
      <v-container class="text-center">
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            
            <h1 class="text-h2 font-weight-bold text-white mb-6">
              Desacork, LDA.
            </h1>

            <p class="text-h5 text-white mb-10">
              A sua parceira de confiança no mundo da cortiça. <br/>Soluções inovadoras e sustentáveis.
            </p>

            <v-btn
              size="x-large"
              color="secondary"
              elevation="8"
              class="ma-4"
              @click="scrollToSobre"
            >
              Sobre Nós
            </v-btn>

          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
</template>

<style scoped lang="scss">
.v-img {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
}

.hero-content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: text; 
}
:deep(.text-white) {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>