import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Contactos from './components/Contactos';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
<ThemeProvider theme={theme}>
    <HeroSection />
    <div id="content-start"></div>
    <Contactos />
    <Footer />
</ThemeProvider>
    </>
  )
}
export default App