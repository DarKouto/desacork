<script setup>
  import celiege from '@/images/celiege.png';
  import cachyos from '@/images/cachyos.png'
  import centralgest from '@/images/centralgest.png'
  import vueLogo from '@/images/vuelogo.png'
  import linuxTux from '@/images/linuxtux.png'
  import qualco from '@/images/qualco.png'
</script>

<template>
  <v-footer
    class="bg-grey-lighten-3 py-6 mt-auto"
    style="width: 100%; border-top: 1px solid #e0e0e0;"
  >
    <v-container>
      <v-row align="center" justify="center">

        <!-- CELIEGE -->
        <v-col cols="12" class="d-flex justify-center mb-4">
          <v-img :src="celiege" max-height="150" contain></v-img>
        </v-col>

        <!-- LOGOS -->
        <v-col cols="12" md="4" class="d-flex justify-center justify-md-end ga-4">
          <div class="d-flex flex-column ga-2" style="width: 120px; max-height: 30px;">
            <v-img :src="centralgest" max-height="20" contain></v-img>
            <v-img :src="qualco" max-height="20" contain></v-img>
          </div>
          <v-img :src="vueLogo" max-width="45" max-height="45" contain></v-img>
          <v-img :src="linuxTux" max-width="45" max-height="45" contain></v-img>
          <v-img :src="cachyos" max-width="45" max-height="45" contain></v-img>
        </v-col> 

        <!-- COPYRIGHT -->
        <v-col cols="12" md="8" class="text-center text-md-left">
          <div class="text-body-2 text-medium-emphasis mb-2">
            Copyright © {{ new Date().getFullYear() }}: 
            <strong>Desacork</strong>
          </div>
          <div class="d-flex align-center justify-center justify-md-start text-body-2 text-medium-emphasis">
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