<script setup>
  import celiege from '@/images/celiege.png';
  import cachyos from '@/images/cachyos.png'
  import centralgest from '@/images/centralgest.png'
  import vueLogo from '@/images/vuelogo.png'
  import linuxTux from '@/images/linuxtux.png'
  import qualco from '@/images/qualco.png'
  import apcor from '@/images/apcor.svg'
  import bureauveritas from '@/images/bureauveritas.png'
</script>

<template>
  <v-footer
    class="bg-grey-lighten-3 py-6 mt-auto"
    style="width: 100%; border-top: 1px solid #e0e0e0;"
  >
    <v-container>
      <v-row align="center" justify="center" class="flex-column">

        <!-- CELIEGE -->
        <v-col cols="12" class="d-flex justify-center mb-4">
          <v-img :src="celiege" max-height="150" contain></v-img>
        </v-col>

        <!-- LOGOS -->
        <v-col cols="12" class="d-flex justify-center align-center ga-4 mb-6 flex-wrap" >
          <v-img :src="bureauveritas" max-width="45" min-width="40" max-height="110" contain></v-img>
          <v-img :src="apcor" max-width="110" min-width="100" max-height="45" contain></v-img>
          <v-img :src="vueLogo" max-width="45" min-width="40" max-height="45" contain></v-img>
          <v-img :src="linuxTux" max-width="45" min-width="40" max-height="45" contain></v-img>
          <v-img :src="cachyos" max-width="45" min-width="40" max-height="45" contain></v-img>
          <v-img :src="centralgest" max-width="110" min-width="100" max-height="45" contain></v-img>
          <v-img :src="qualco" max-width="110" min-width="100" max-height="45" contain></v-img>
        </v-col> 

        <!-- COPYRIGHT -->
        <v-col cols="12" class="text-center">
          <div class="text-body-2 text-medium-emphasis mb-2">
            Copyright © {{ new Date().getFullYear() }}: 
            <strong>Desacork</strong>
          </div>
          <div class="d-flex align-center justify-center text-body-2 text-medium-emphasis">
            <v-icon size="16" class="mr-1">mdi-console</v-icon>
            <span class="mr-1">Desenvolvido por</span>
            <a
              href="https://github.com/darkouto"
              target="_blank"
              rel="noopener noreferrer"
              class="github-link d-flex align-center"
            >
              <v-icon size="16" class="mr-1">mdi-github</v-icon>
              Daniel Couto (DarKouto)
            </a>
          </div>
        </v-col>   

      </v-row>
    </v-container>
  </v-footer>
</template>


<style scoped>
  .github-link {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }

  .github-link:hover {
    color: rgb(var(--v-theme-primary));
    transform: scale(1.05);
  }
</style>