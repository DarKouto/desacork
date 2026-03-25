<AppBar />

  <v-container class="my-10" style="max-width: 900px;">
    <v-card elevation="2" class="pa-8">
      <h1 class="text-h3 mb-6 text-primary font-weight-bold">A Nossa História</h1>

      <p class="text-body-1 mb-6 text-justify">
        Fundada em <strong>1992</strong>, a <strong>Desacork</strong> nasceu com o compromisso de servir a indústria da cortiça com rigor e dedicação. Com mais de três décadas de experiência no setor, consolidámos o nosso percurso através do conhecimento profundo da matéria-prima e da evolução constante dos nossos processos.
      </p>

      <v-row align="center" justify="center" class="flex-column">
        <span class="text-overline text-high-emphasis mb-n2">
          Certificação
        </span>
        <v-col cols="12" class="d-flex justify-center mb-4">
          <v-img :src="celiege" max-height="160" contain></v-img>
        </v-col>
      </v-row>

      <v-divider class="mb-8"></v-divider>

      <h2 class="text-h5 mb-4 font-weight-bold">Especialização e Processos</h2>
      <p class="text-body-1 mb-4">
        Somos especialistas no tratamento de rolhas de pequena dimensão, com particular foco em <strong>Bartops</strong>. O nosso trabalho foca-se na excelência do acabamento e na preparação técnica de cada peça, garantindo que o produto final cumpre os mais elevados padrões de qualidade do mercado.
      </p>

      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <v-list bg-color="transparent">
            <v-list-item prepend-icon="mdi-check-circle-outline">
              <v-list-item-title>Escolha e Retificação</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-check-circle-outline">
              <v-list-item-title>Acabamentos de Precisão</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="6">
          <v-list bg-color="transparent">
            <v-list-item prepend-icon="mdi-check-circle-outline">
              <v-list-item-title>Lavações Técnicas</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-check-circle-outline">
              <v-list-item-title>Colmatagens</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <p class="text-body-1 mt-6 italic">
        Na Desacork, cada rolha é tratada com o respeito que a tradição corticeira exige e a precisão que a indústria moderna procura.
      </p>
    </v-card>
  </v-container>
<Footer />
