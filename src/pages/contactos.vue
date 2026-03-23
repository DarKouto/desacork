<script setup>
import { reactive, ref } from 'vue';

// Estado do formulário
const form = reactive({
  nome: '',
  email: '',
  mensagem: ''
});

const loading = ref(false);

const enviarMensagem = async () => {
  if (!form.nome || !form.email || !form.mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  loading.value = true;
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    
    const res = await response.json();
    
    if (response.ok) {
      alert(res.message || "Mensagem enviada com sucesso!");
      form.nome = '';
      form.email = '';
      form.mensagem = '';
    } else {
      alert(res.message || "Erro ao enviar a mensagem.");
    }
  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert("Erro ao ligar ao servidor.");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-10">Contactos e Localização</h1>
      </v-col>
    </v-row>

    <v-row class="mb-10" align="stretch">
      <v-col cols="12" md="5">
        <v-card variant="outlined" class="pa-6 h-100" elevation="1">
          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">Morada</h2>
            <p class="text-body-1">
              Z.I. Casalinho Rua 2, Nr. 123<br/>
              4535-155 Lourosa
            </p>
          </div>
          
          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">Telefone</h2>
            <p class="text-body-1">
              227 449 428 <span class="text-caption text-grey">(rede fixa nacional)</span>
            </p>
          </div>

          <div class="mb-2">
            <h2 class="text-h6 font-weight-bold mb-2 text-primary">Email</h2>
            <p class="text-body-1">desacork@gmail.com</p>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <div class="map-wrapper">
          <iframe 
            src="google.com/maps/embed" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização Desacork"
          ></iframe>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-10"></v-divider>

    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="3" class="pa-8">
          <h2 class="text-h5 mb-6 font-weight-medium">Envie-nos uma mensagem</h2>
          
          <v-form @submit.prevent="enviarMensagem">
            <v-text-field
              v-model="form.nome"
              label="Nome"
              variant="outlined"
              required
              density="comfortable"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              variant="outlined"
              required
              density="comfortable"
              class="mb-2"
            ></v-text-field>

            <v-textarea
              v-model="form.mensagem"
              label="Mensagem"
              variant="outlined"
              rows="5"
              required
              density="comfortable"
              class="mb-4"
            ></v-textarea>

            <v-btn 
              type="submit" 
              color="primary" 
              size="large" 
              block
              :loading="loading"
              elevation="2"
            >
              Enviar Mensagem
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.map-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  min-height: 350px;
  
  iframe {
    display: block;
  }
}

// Pequeno ajuste para garantir que as colunas tenham a mesma altura em desktop
@media (min-width: 960px) {
  .v-row {
    display: flex;
  }
}
</style>