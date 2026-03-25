<script setup>
</script>

<template>
  <v-app>
    <AppBar />

    <v-main>
      <section id="home">
        <HeroSection />
      </section>

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