import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import { useEffect, useRef, useState } from 'react';

const ServiceCard = styled(Box)<{ isVisible?: boolean; delay?: number }>(({ theme, isVisible, delay }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `all 0.6s ease ${delay || 0}ms`,
  '&:hover': {
    transform: isVisible ? 'translateY(-8px)' : 'translateY(30px)',
    boxShadow: '0 12px 40px rgba(227, 30, 36, 0.15)',
  },
}));

const services = [
  {
    icon: CodeOutlinedIcon,
    title: 'Website Development',
    description: 'We build sleek, high-performance websites that support lead generation, e-commerce, and business growth—using responsive design and AI-powered UX.',
  },
  {
    icon: CampaignOutlinedIcon,
    title: 'Social Media Marketing',
    description: 'We run precise ad campaigns across Meta, TikTok, and LinkedIn to generate leads, grow traffic, and amplify your digital presence in key markets.',
  },
  {
    icon: SearchOutlinedIcon,
    title: 'SEO Optimization',
    description: 'We enhance your search visibility with keyword strategy, bilingual content, and technical SEO—driving long-term organic traffic and brand reach.',
  },
  {
    icon: AdsClickOutlinedIcon,
    title: 'Google Advertising',
    description: 'We manage and optimize Google Ads to attract quality leads, maximize conversions, and deliver measurable ROI with real-time performance tracking.',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <Box ref={sectionRef} sx={{ py: 12, background: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Left - Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4, display: { xs: 'none', md: 'block' } }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBjb2xsYWJvcmF0aW9uJTIwYnVzaW5lc3N8ZW58MHwwfHxyZWR8MTc2MDE4NTM5MHww&ixlib=rb-4.1.0&q=85"
                alt="Professional business team collaborating on digital marketing strategy - Annie Spratt on Unsplash"
                style={{ width: '100%', height: 'auto', maxWidth: '400px', marginLeft: '-50px' }}
              />
            </Box>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Core Services
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              At Akodefy, we engineer comprehensive digital strategies that drive measurable business outcomes. Our specialized team combines cutting-edge technology with proven marketing methodologies to deliver exceptional results across local and international markets.
            </Typography>
          </Box>

          {/* Right - Feature Grid */}
          <Box sx={{ flex: 1 }}>
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: 2, sm: 3 },
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ServiceCard 
                    key={index} 
                    isVisible={isVisible}
                    delay={index * 150}
                  >
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <IconComponent sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, textAlign: 'center' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </ServiceCard>
                );
              })}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}