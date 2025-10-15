import { Box, Typography, Stack, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useRef, useState } from 'react';
import { sendEmail } from '../utils/emailService';

const PricingCard = styled(Card)<{ isVisible?: boolean; delay?: number }>(({ theme, isVisible, delay }) => ({
  height: '100%',
  border: '2px solid #E0E0E0',
  borderRadius: '16px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
  transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay || 0}ms`,
  '&:hover': {
    transform: isVisible ? 'translateY(-12px) scale(1.02)' : 'scale(0.9)',
    boxShadow: '0 20px 60px rgba(227, 30, 36, 0.2)',
    borderColor: '#0D9F4F',
  },
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      transform: isVisible ? 'translateY(-6px) scale(1.01)' : 'scale(0.9)',
    },
  },
}));

const packages = [
  {
    name: 'Web Development',
    subtitle: 'Professional Website Solutions',
    price: '45,000 INR',
    period: '',
    features: [
      'Responsive Web Design',
      'React/Node.js Development',
      'Database Integration',
      'API Development',
      'SEO Optimization',
      'Mobile-First Design',
      'Performance Optimization',
    ],
  },
  {
    name: 'Mobile App',
    subtitle: 'iOS & Android Development',
    price: '85,000 INR',
    period: '',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Development',
      'API Integration',
      'Push Notifications',
      'App Store Deployment',
      'User Authentication',
      '3 Months Support',
    ],
  },
  {
    name: 'Full Stack Solution',
    subtitle: 'Complete IT Package',
    price: '1,25,000 INR',
    period: '',
    features: [
      'Web + Mobile Application',
      'Cloud Infrastructure Setup',
      'Database Design & Management',
      'CI/CD Pipeline',
      'Security Implementation',
      'Performance Monitoring',
      '6 Months Support',
      'Technical Documentation',
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
    <Box ref={sectionRef} sx={{ py: 12, background: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Choose Your Perfect IT Solution Package
        </Typography>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          alignItems="stretch"
        >
          {packages.map((pkg, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <PricingCard isVisible={isVisible} delay={index * 200}>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
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
                        <CheckIcon sx={{ fontSize: 20, color: 'primary.main', mt: 0.2 }} />
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
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        background: 'rgba(27, 143, 74, 0.05)',
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