import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useEffect, useRef, useState } from 'react';
import { sendEmail } from '../utils/emailService';

const IndustryCard = styled(Box)<{ isVisible?: boolean; delay?: number }>(({ theme, isVisible, delay }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: '16px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  transition: `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay || 0}ms`,
  '&:hover': {
    transform: isVisible ? 'scale(1.05)' : 'translateY(50px)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: '#FFF8F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
  },
}));

const industries = [
  { icon: StorefrontIcon, name: 'E-Commerce & Retail' },
  { icon: FavoriteBorderIcon, name: 'Healthcare & Wellness' },
  { icon: HomeWorkIcon, name: 'Real Estate' },
  { icon: AccountBalanceIcon, name: 'Finance & Fintech' },
  { icon: RocketLaunchIcon, name: 'Technology & SaaS' },
  { icon: MenuBookIcon, name: 'Education & E-Learning' },
  { icon: FlightTakeoffIcon, name: 'Travel & Hospitality' },
  { icon: LightbulbIcon, name: 'Startups & SMEs' },
  { icon: HandshakeIcon, name: 'Corporate & B2B Services' },
];

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleConnectExperts = () => {
    sendEmail({}, 'Connect With Our Experts');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: 12, background: '#D4C4B0' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" sx={{ display: 'block', mb: 2, fontWeight: 700, letterSpacing: 2 }}>
          INDUSTRY SPECIALIZATION
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          SECTORS WE EMPOWER
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Akodefy brings deep industry expertise across multiple verticals — from e-commerce and healthcare to real estate, fintech, and SaaS. Our tailored digital solutions are engineered to unlock your competitive advantage and fuel sustainable growth.
        </Typography>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 2.5, sm: 4 },
            mb: { xs: 4, md: 6 },
          }}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <IndustryCard key={index} isVisible={isVisible} delay={index * 120}>
                <IconCircle>
                  <IconComponent sx={{ fontSize: { xs: 32, sm: 40 }, color: '#E31E24' }} />
                </IconCircle>
                <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                  {industry.name}
                </Typography>
              </IndustryCard>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={handleConnectExperts}
            sx={{ 
              px: 4,
              py: 1.5,
              background: '#1A1A2E',
              '&:hover': {
                background: '#0F0F1A',
              },
            }}
          >
            CONNECT WITH OUR EXPERTS
          </Button>
        </Box>
      </Container>
    </Box>
  );
}