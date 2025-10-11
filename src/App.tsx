import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ConsultationBanner from './components/ConsultationBanner';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import IndustriesSection from './components/IndustriesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: 'mui',
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeroSection />
        <ServicesSection />
        <ConsultationBanner />
        <PricingSection />
        <TestimonialsSection />
        <IndustriesSection />
        <ConsultationBanner />
        <FAQSection />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;