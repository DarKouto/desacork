<script setup>
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-6 text-primary">Sobre a Desacork</h1>
        <p class="text-h6 text-medium-emphasis leading-relaxed">
          Desde 1992, transformamos a tradição da cortiça em soluções de precisão para a indústria global. 
          Especialistas no tratamento e acabamento de bartops de alta qualidade.
        </p>
      </v-col>
    </v-row>

    <v-row align="center" class="mb-16">
      <v-col cols="12" md="6">
        <v-card elevation="4" rounded="lg">
          <v-sheet
            color="grey-lighten-2"
            height="400"
            class="d-flex align-center justify-center"
          >
            <v-icon size="64" color="grey-darken-1">mdi-factory</v-icon>
            <span class="ml-2 text-grey-darken-1 italic">Espaço para foto da fábrica</span>
          </v-sheet>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6" class="pl-md-10">
        <h2 class="text-h4 font-weight-bold mb-4">Três Décadas de Know-How</h2>
        <p class="text-body-1 mb-4">
          A Desacork nasceu em 1992 com um objetivo claro: elevar o padrão de acabamento das rolhas de cortiça.
        </p>
        <p class="text-body-1 mb-6">
          Embora o mercado tenha evoluído, os nossos valores mantêm-se intactos. Focamo-nos na <strong>retificação, lavação e colmatagem</strong>, processos críticos que garantem a neutralidade sensorial e a performance mecânica que os vinhos e bebidas espirituosas mais exigentes requerem.
        </p>
        <v-btn color="primary" variant="outlined" to="/contactos">Fale connosco</v-btn>
      </v-col>
    </v-row>

    <v-row class="bg-grey-lighten-4 py-10 rounded-xl px-4">
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="48" color="primary" class="mb-4">mdi-shield-check</v-icon>
        <h3 class="text-h6 font-weight-bold">Qualidade Certificada</h3>
        <p class="text-body-2">Cumprimos rigorosamente as normas do Systecode (Celiege), garantindo processos seguros e sustentáveis.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="48" color="primary" class="mb-4">mdi-target</v-icon>
        <h3 class="text-h6 font-weight-bold">Especialização em Bartops</h3>
        <p class="text-body-2">O nosso domínio em rolhas capsuladas permite-nos oferecer acabamentos estéticos e funcionais superiores.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="48" color="primary" class="mb-4">mdi-leaf</v-icon>
        <h3 class="text-h6 font-weight-bold">Sustentabilidade</h3>
        <p class="text-body-2">Trabalhamos com um produto 100% natural e reciclável, respeitando o ecossistema do montado.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>