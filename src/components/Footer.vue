<script setup>
  import celiegeImage from '@/images/celiege.png';
  import cachyImage from '@/images/cachyos.png'
  import centralgestImage from '@/images/centralgest.png'
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
      <v-row align="center">
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

        <v-col cols="12" md="4" class="d-flex justify-center justify-md-end ga-4">
          <v-img :src="centralgestImage" max-height="80"contain></v-img>
          <v-img :src="qualco" max-height="80" contain></v-img>
          <v-img :src="vueLogo" max-height="80" contain></v-img>
          <v-img :src="linuxTux" max-height="80" contain></v-img>
          <v-img :src="cachyImage" max-height="80" contain></v-img>
          <v-img :src="celiegeImage" max-height="100" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
/*
.text-body-2 { 
  font-size: 1.1rem !important;
}
*/

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