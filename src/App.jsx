import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Contactos from './components/Contactos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" component="h1" gutterBottom>
          Desacork: Indústria e Comércio de Cortiça
        </Typography>

        <Typography variant="h4" component="p" sx={{ mb: 4 }}>
          Site em construção
        </Typography>

        <Contactos />
        <Footer />
      </ThemeProvider>
    </>
  )
}
export default App