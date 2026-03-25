<script setup>
</script>

<template>
  <v-app>
    <AppBar />

    <v-main>
      <div id="home" style="position: absolute; top: 0;"></div>
        <HeroSection />

      <section id="sobre-nos">
        <SobreNos />
      </section>

      <section id="contactos">
        <Contactos />
      </section>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
section {
  display: block;
}
</style>