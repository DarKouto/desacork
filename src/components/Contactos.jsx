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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          nome: '',
          email: '',
          mensagem: '',
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar o formulário.");
      console.error('Erro:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contactos e Localização
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom mb={4}>
            Informações de Contacto
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              Z.I. Casalinho Rua 2, Nr. 123<br />
              4535-155 Lourosa
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1">227 449 428 (rede fixa nacional)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1">desacork@gmail.com</Typography>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.124878609415!2d-8.555383324279727!3d40.978746271354694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247f4181f406fb%3A0x9edbce7aa011011e!2sZona%20Industrial%20Casalinho-Rua%20II%20123%2C%20Lourosa!5e0!3m2!1spt-PT!2spt!4v1758703306594!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Desacork"
          ></iframe>
        </Box>
      </Paper>

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
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column' }} 
          onSubmit={handleSubmit}
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