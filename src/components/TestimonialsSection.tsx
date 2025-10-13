import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

const LogoImage = styled('img')<{ isVisible?: boolean; delay?: number }>(({ theme, isVisible, delay }) => ({
  width: '200px',
  height: '140px',
  objectFit: 'contain',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
  transition: `all 0.6s ease ${delay || 0}ms`,
  cursor: 'pointer',
  '&:hover': {
    transform: isVisible ? 'scale(1.1)' : 'translateY(30px) scale(0.9)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '140px',
    height: '100px',
  },
}));

const clientLogos = [
  { name: 'Client 1', image: `${import.meta.env.BASE_URL}1.png` },
  { name: 'Client 2', image: `${import.meta.env.BASE_URL}2.png` },
  { name: 'Client 3', image: `${import.meta.env.BASE_URL}3.png` },
  { name: 'Client 4', image: `${import.meta.env.BASE_URL}4.png` },
  { name: 'Client 5', image: `${import.meta.env.BASE_URL}5.png` },
  { name: 'Client 6', image: `${import.meta.env.BASE_URL}6.png` },
  { name: 'Client 7', image: `${import.meta.env.BASE_URL}7.png` },
  { name: 'Client 8', image: `${import.meta.env.BASE_URL}8.png` },
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
    <Box ref={sectionRef} sx={{ py: 12, background: '#FFFFFF', px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h2" align="center" sx={{ mb: 8 }}>
        Our Clients Speak for Us:
      </Typography>

      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 6, md: 10 },
          alignItems: 'center',
          justifyItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {clientLogos.map((client, index) => (
          <LogoImage 
            key={index}
            src={client.image}
            alt={client.name}
            isVisible={isVisible}
            delay={index * 100}
          />
        ))}
      </Box>
    </Box>
  );
}