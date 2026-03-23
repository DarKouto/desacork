<script setup>
</script>

<template>
  <v-footer
    class="bg-grey-lighten-3 text-center d-flex flex-column py-6 mt-auto"
    style="width: 100%; border-top: 1px solid #e0e0e0;"
  >
    <v-container>
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
    </v-container>
  </v-footer>
</template>

<style scoped>
.text-body-2 { 
  font-size: 1.3rem !important;
}

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