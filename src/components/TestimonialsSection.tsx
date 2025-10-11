import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

const LogoImage = styled('img')<{ isVisible?: boolean; delay?: number; maxwidth?: string; maxheight?: string }>(({ isVisible, delay, maxwidth, maxheight }) => ({
  width: 'auto',
  height: 'auto',
  maxWidth: maxwidth || '450px',
  maxHeight: maxheight || '320px',
  objectFit: 'contain',
  imageRendering: 'crisp-edges',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
  transition: `all 0.6s ease ${delay || 0}ms`,
  cursor: 'pointer',
  '&:hover': {
    transform: isVisible ? 'scale(1.2)' : 'translateY(30px) scale(0.9)',
  },
}));

const clientLogos = [
  { name: 'Client 1', image: '/1.png', maxWidth: '340px', maxHeight: '240px' },
  { name: 'Client 2', image: '/2.png', maxWidth: '460px', maxHeight: '340px' },
  { name: 'Client 3', image: '/3.png', maxWidth: '500px', maxHeight: '360px' },
  { name: 'Client 4', image: '/4.png', maxWidth: '420px', maxHeight: '300px' },
  { name: 'Client 5', image: '/5.png', maxWidth: '380px', maxHeight: '260px' },
  { name: 'Client 6', image: '/6.png', maxWidth: '480px', maxHeight: '340px' },
  { name: 'Client 7', image: '/7.png', maxWidth: '430px', maxHeight: '310px' },
  { name: 'Client 8', image: '/8.png', maxWidth: '430px', maxHeight: '310px' },
];

export default function TestimonialsSection() {
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
        threshold: 0.1,
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
    <Box ref={sectionRef} sx={{ py: 12, background: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 8 }}>
          Our Clients Speak for Us:
        </Typography>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 10,
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {clientLogos.map((client, index) => (
            <LogoImage 
              key={index}
              src={client.image}
              alt={client.name}
              isVisible={isVisible}
              delay={index * 100}
              maxwidth={client.maxWidth}
              maxheight={client.maxHeight}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}