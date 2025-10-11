import { Box, Typography, Stack, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterContainer = styled(Box)({
  background: '#1A1A2E',
  color: '#FFFFFF',
});

const FooterLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#E31E24',
  },
});

export default function Footer() {
  return (
    <FooterContainer sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={6}
          sx={{ mb: 6 }}
        >
          {/* Logo & Tagline */}
          <Box sx={{ flex: 1 }}>
            <img 
              src="https://images.unsplash.com/photo-1655704705321-3ac52dc67f70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxwdXp6bGUlMjBjb2xvcmZ1bCUyMGxvZ28lMjBidXNpbmVzcyUyMGJyYW5kaW5nfGVufDB8MHx8fDE3NjAwMzI3NTF8MA&ixlib=rb-4.1.0&q=85"
              alt="Puzzle Diplomats Logo"
              style={{ height: '50px', width: 'auto', marginBottom: '16px', filter: 'brightness(0) invert(1)', maxWidth: '100%' }}
            />
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Empowering businesses through digital innovation and strategy.
            </Typography>
          </Box>

          {/* Services */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Services
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink href="#">Business Consulting</FooterLink>
              <FooterLink href="#">Social Media Marketing</FooterLink>
              <FooterLink href="#">SEO & Google Rankings</FooterLink>
              <FooterLink href="#">Website Development</FooterLink>
              <FooterLink href="#">Paid Advertising</FooterLink>
            </Stack>
          </Box>

          {/* Contact */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Contact Us
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon sx={{ fontSize: 18, color: '#E31E24' }} />
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                  Bangalore, Dubai
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: '#E31E24' }} />
                <FooterLink href="tel:+917094858696">
                  +91 70948 58696
                </FooterLink>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: '#E31E24' }} />
                <FooterLink href="mailto:puzzle@diplomats.co.in">
                  puzzle@diplomats.co.in
                </FooterLink>
              </Stack>
              <Box sx={{ pt: 2 }}>
                <Stack direction="row" spacing={1.5}>
                  <FooterLink href="https://www.facebook.com/profile.php?id=61566677074509" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <FacebookIcon />
                  </FooterLink>
                  <FooterLink href="https://www.instagram.com/puzzlediplomatsmarketing/" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <InstagramIcon />
                  </FooterLink>
                  <FooterLink href="https://www.linkedin.com/in/puzzle-diplomats-digitalmarketing/" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinkedInIcon />
                  </FooterLink>
                  <FooterLink href="https://wa.me/7094858696" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <WhatsAppIcon />
                  </FooterLink>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>

        {/* Social Icons & Copyright */}
        <Box 
          sx={{ 
            pt: 4, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="rgba(255, 255, 255, 0.5)" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            © 2025 Puzzle Diplomats. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}