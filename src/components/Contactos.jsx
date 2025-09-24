import { useState } from 'react';
import { Box, Typography, Container, Paper, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contactos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    // A Vercel Forms lida com o envio do formulário,
    // por isso, esta função agora apenas previne o comportamento padrão
    // e mostra uma mensagem de sucesso no frontend.
    e.preventDefault();
    alert("A sua mensagem foi enviada com sucesso!");
    setFormData({
      nome: '',
      email: '',
      mensagem: '',
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contactos e Localização
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          align="left"
          sx={{ mb: 4 }}
        >
          Envie-nos uma mensagem
        </Typography>
        <Box
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column' }} 
        >
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }} 
            id="nome"
            name="nome"
            value={formData.nome} 
            onChange={handleChange} 
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }} 
            type="email"
            id="email"
            name="email"
            value={formData.email} 
            onChange={handleChange}
          />
          <TextField
            label="Mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            id="mensagem" 
            name="mensagem"
            value={formData.mensagem} 
            onChange={handleChange}
            sx={{ 
              mb: 3,
              '& .MuiInputBase-input': { 
                resize: 'vertical',
              },
            }} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 1, py: 1.5 }}
          >
            Enviar Mensagem
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contactos;