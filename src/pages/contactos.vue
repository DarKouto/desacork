<script setup>
import { reactive, ref } from 'vue';

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
      alert(res.message);
      form.nome = ''; form.email = ''; form.mensagem = '';
    } else {
      alert(res.message);
    }
  } catch (error) {
    alert("Erro ao ligar ao servidor.");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <AppBar />

  <v-container class="my-10" style="max-width: 900px;">
    <h1 class="text-h4 text-center mb-10">Contactos e Localização</h1>
    <v-card elevation="3" class="pa-8 mt-10">
      <v-row class="ma-0" style="gap: 32px;"> <v-col cols="12" md="" class="pa-0 flex-grow-1">
          <h2 class="text-h6 mb-8">Informações de Contacto</h2>
          
          <div class="d-flex align-start mb-6">
            <v-icon color="primary" class="mr-3">mdi-map-marker</v-icon>
            <div class="text-body-1">
              Z.I. Casalinho Rua 2, Nr. 123<br />
              4535-155 Lourosa
            </div>
          </div>

          <div class="d-flex align-center mb-6">
            <v-icon color="primary" class="mr-3">mdi-phone</v-icon>
            <div class="text-body-1">227 449 428 (rede fixa nacional)</div>
          </div>

          <div class="d-flex align-center mb-6">
            <v-icon color="primary" class="mr-3">mdi-email</v-icon>
            <div class="text-body-1">desacork@gmail.com</div>
          </div>
        </v-col>

        <v-col cols="12" md="" class="pa-0 flex-grow-1" style="min-height: 300px;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.124878609415!2d-8.555383324279727!3d40.978746271354694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247f4181f406fb%3A0x9edbce7aa011011e!2sZona%20Industrial%20Casalinho-Rua%20II%20123%2C%20Lourosa!5e0!3m2!1spt-PT!2spt!4v1758703306594!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style="border: 0; min-height: 300px; border-radius: 4px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da Desacork"
          ></iframe>
        </v-col>
      </v-row>
    </v-card>

    <v-card elevation="3" class="pa-8 mt-10">
      <h2 class="text-h5 mb-8 text-left">Envie-nos uma mensagem</h2>
      
      <v-form @submit.prevent="enviarMensagem">
        <v-text-field
          v-model="form.nome"
          label="Nome"
          variant="outlined"
          required
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          label="Email"
          type="email"
          variant="outlined"
          required
          class="mb-4"
        ></v-text-field>

        <v-textarea
          v-model="form.mensagem"
          label="Mensagem"
          variant="outlined"
          rows="4"
          required
          class="mb-6"
          style="resize: vertical;"
        ></v-textarea>

        <v-btn
          type="submit"
          variant="flat"
          color="primary"
          block
          size="large"
          height="54"
          :loading="loading"
        >
          Enviar Mensagem
        </v-btn>
      </v-form>
    </v-card>
  </v-container>

  <Footer />
</template>

<style scoped>
.v-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>