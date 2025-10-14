import { Box, Typography, Stack, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import companyLogo from '../assets/companylogo.png';

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
              src={companyLogo}
              alt="Akodefy Logo"
              style={{ height: '180px', width: 'auto', marginBottom: '16px', filter: 'brightness(0) invert(1)', maxWidth: '100%' }}
            />
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Driving business excellence through innovative digital solutions and strategic growth initiatives.
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
                  Tamilnadu
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: '#E31E24' }} />
                <FooterLink href="tel:+919080445315">
                  +91 90804 45315
                </FooterLink>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: '#E31E24' }} />
                <FooterLink href="mailto:hello@akedumasters.com">
                  hello@akedumasters.com
                </FooterLink>
              </Stack>
              <Box sx={{ pt: 2 }}>
                <Stack 
                  direction="row" 
                  spacing={1.5}
                  sx={{ 
                    flexWrap: 'nowrap',
                    justifyContent: { xs: 'flex-start', md: 'flex-start' }
                  }}
                >
                  <FooterLink href="https://www.instagram.com/akodefyinfotech?igsh=MXJicThwaHhtdHh4Nw==" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <InstagramIcon />
                  </FooterLink>
                  <FooterLink href="https://www.linkedin.com/company/ak-edumasters/" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinkedInIcon />
                  </FooterLink>
                  <FooterLink href="https://wa.me/919080445315" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
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
            © 2025 Akodefy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}