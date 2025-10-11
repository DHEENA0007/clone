import { Box, Typography, Stack, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useRef, useState } from 'react';
import { sendEmail } from '../utils/emailService';

const PricingCard = styled(Card)<{ isVisible?: boolean; delay?: number }>(({ isVisible, delay }) => ({
  height: '100%',
  border: '2px solid #E0E0E0',
  borderRadius: '16px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
  transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay || 0}ms`,
  '&:hover': {
    transform: isVisible ? 'translateY(-12px) scale(1.02)' : 'scale(0.9)',
    boxShadow: '0 20px 60px rgba(227, 30, 36, 0.2)',
    borderColor: '#E31E24',
  },
}));

const packages = [
  {
    name: 'Social Media',
    subtitle: 'Management and Advertising',
    price: '18,000 INR',
    period: '/ month',
    features: [
      'Facebook & Instagram',
      'Organic Promotion',
      'Paid Ads',
      '14 Posters + 4 Reels',
      'Monthly Meeting',
    ],
  },
  {
    name: 'Website',
    subtitle: 'Development & Optimization',
    price: '45,000 INR',
    period: '',
    features: [
      'Home, Services, About Us, Projects',
      'Why Choose Us, Gallery, Contact Us',
      'Social Media Integration',
      'WhatsApp Integration',
      'SEO Optimized Website',
      'Google Ads Optimized',
    ],
  },
  {
    name: '360°',
    subtitle: 'Digital Marketing',
    price: '60,000 INR',
    period: '/ month',
    features: [
      'Social Media',
      'Google Ads or SEO Optimization',
      'Website Maintenance',
      'LinkedIn Management',
      'Google Mapping',
      'WhatsApp Bulk Messaging',
      'Monthly Meeting',
      'Mail Campaign',
    ],
  },
];

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleGetConsultation = (packageName: string) => {
    sendEmail({ service: packageName }, 'Get Free Consultation');
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
        threshold: 0.15,
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
    <Box ref={sectionRef} sx={{ py: 12, background: '#FAFAFA' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Find The Right Marketing Package For You Business.
        </Typography>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          alignItems="stretch"
        >
          {packages.map((pkg, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <PricingCard isVisible={isVisible} delay={index * 200}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                    {pkg.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {pkg.subtitle}
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="caption" color="text.secondary">
                      {pkg.period ? 'Starting From' : 'Total'}
                    </Typography>
                    <Stack direction="row" alignItems="baseline" spacing={0.5}>
                      <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                        {pkg.price}
                      </Typography>
                      {pkg.period && (
                        <Typography variant="body2" color="text.secondary">
                          {pkg.period}
                        </Typography>
                      )}
                    </Stack>
                  </Box>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {pkg.features.map((feature, idx) => (
                      <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckIcon sx={{ fontSize: 20, color: '#E31E24', mt: 0.2 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button 
                    variant="outlined" 
                    fullWidth
                    size="large"
                    onClick={() => handleGetConsultation(pkg.name)}
                    sx={{ 
                      borderColor: '#E31E24',
                      color: '#E31E24',
                      '&:hover': {
                        borderColor: '#B71C1C',
                        background: 'rgba(227, 30, 36, 0.05)',
                      },
                    }}
                  >
                    Get A Free Consultation
                  </Button>
                </CardContent>
              </PricingCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}