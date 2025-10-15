import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
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
    title: 'Web Development',
    description: 'We build scalable, high-performance web applications using modern frameworks like React, Node.js, and cloud-native technologies for optimal user experience.',
  },
  {
    icon: PhoneAndroidOutlinedIcon,
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences and robust functionality.',
  },
  {
    icon: CloudOutlinedIcon,
    title: 'Cloud Solutions',
    description: 'We provide comprehensive cloud migration, deployment, and management services using AWS, Azure, and Google Cloud for enhanced scalability and performance.',
  },
  {
    icon: SecurityOutlinedIcon,
    title: 'Cybersecurity Solutions',
    description: 'We implement enterprise-grade security measures, vulnerability assessments, and compliance frameworks to protect your digital assets and data.',
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
                alt="Professional IT team collaborating on technology solutions and software development strategy"
                style={{ width: '100%', height: 'auto', maxWidth: '400px', marginLeft: '-50px' }}
              />
            </Box>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Our Core Services
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              At Akodefy, we engineer comprehensive IT solutions that drive digital transformation and business innovation. Our specialized team combines cutting-edge technology with proven development methodologies to deliver exceptional results across diverse industries and markets.
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