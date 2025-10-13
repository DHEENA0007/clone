import { Box, Typography, Stack, TextField, Select, MenuItem, Button, FormControl, InputLabel, Fab, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';
import heroBgImage from '../assets/HeroBG.png';
import companyLogo from '../assets/companylogo.png';
import heroImage from '../assets/Hero.png';
import { sendEmail, type ContactFormData } from '../utils/emailService';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: '#F5F5F5',
  backgroundImage: `url(${heroBgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.02)',
    zIndex: 0,
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
}));

const ConsultationCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '20px',
  padding: theme.spacing(4),
  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  zIndex: 10,
  maxWidth: '420px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: '16px',
  },
}));

const ValuePropItem = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    textAlign: 'left',
    gap: '16px',
  },
}));

const StyledButton = styled(Button)({
  background: '#000000',
  color: '#FFFFFF',
  padding: '16px 24px',
  fontSize: '1rem',
  fontWeight: 700,
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    background: '#1A1A1A',
  },
});

const SocialSidebar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: 10,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SocialIconButton = styled(IconButton)({
  width: 40,
  height: 40,
  background: '#FFFFFF',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    background: '#E31E24',
    color: '#FFFFFF',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.3s ease',
}) as typeof IconButton;

const WhatsAppFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 30,
  right: 10,
  zIndex: 100,
  background: '#25D366',
  color: '#FFFFFF',
  '&:hover': {
    background: '#1DA851',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: 20,
    right: 20,
    width: 48,
    height: 48,
  },
})) as typeof Fab;

export default function HeroSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    service: '',
    timeline: '',
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    sendEmail(formData, 'Request Callback');
  };

  return (
    <>
      <HeroContainer>
        <Box sx={{ position: 'relative', zIndex: 5, width: '100%', px: { xs: 2, sm: 3, md: 6, lg: 8 }, py: { xs: 3, sm: 4, md: 8 } }}>
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 4, lg: 6 }} alignItems="center" justifyContent="space-between">
            {/* Left Content */}
            <Box sx={{ flex: 1, maxWidth: { xs: '100%', lg: '650px' } }}>
              {/* Logo */}
              <Box sx={{ mb: { xs: 3, md: 6 } }}>
                <img 
                  src={companyLogo}
                  alt="Puzzle Diplomats Logo"
                  style={{ 
                    height: 'auto', 
                    width: '100%',
                    maxWidth: '280px',
                    maxHeight: '120px',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </Box>

              <Typography 
                variant="h1" 
                sx={{ 
                  mb: { xs: 3, md: 6 }, 
                  color: '#000000', 
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem', lg: '4.2rem' },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Empowering Businesses with Strategic Digital Growth
              </Typography>

              {/* Value Props */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 2, sm: 4 }} 
                sx={{ 
                  mb: { xs: 3, md: 4 },
                  alignItems: { xs: 'flex-start', sm: 'center' }
                }}
              >
                <ValuePropItem>
                  <PublicOutlinedIcon sx={{ fontSize: { xs: 48, sm: 64 }, color: '#E31E24', flexShrink: 0 }} />
                  <Typography variant="body1" fontWeight={600} sx={{ lineHeight: 1.4, fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                    Digital Marketing<br />Team
                  </Typography>
                </ValuePropItem>
                <ValuePropItem>
                  <PsychologyOutlinedIcon sx={{ fontSize: { xs: 48, sm: 64 }, color: '#E31E24', flexShrink: 0 }} />
                  <Typography variant="body1" fontWeight={600} sx={{ lineHeight: 1.4, fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                    AI-Powered Content<br />& Paid Campaigns
                  </Typography>
                </ValuePropItem>
                <ValuePropItem>
                  <TrendingUpOutlinedIcon sx={{ fontSize: { xs: 48, sm: 64 }, color: '#E31E24', flexShrink: 0 }} />
                  <Typography variant="body1" fontWeight={600} sx={{ lineHeight: 1.4, fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                    Proven ROI-Driven<br />Strategies
                  </Typography>
                </ValuePropItem>
              </Stack>
            </Box>

            {/* Right Content - Form and Image */}
            <Stack 
              direction="row" 
              spacing={3} 
              alignItems="flex-end" 
              sx={{ 
                width: { xs: '100%', lg: 'auto' },
                justifyContent: 'flex-end',
              }}
            >
              {/* Professional Person Image */}
              <Box 
                sx={{ 
                  display: { xs: 'none', md: 'block' },
                  alignSelf: 'stretch',
                  transform: 'translateY(-50px)',
                }}
              >
                <img 
                  src={heroImage}
                  alt="Professional business consultant"
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: '550px',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </Box>
              
              {/* Consultation Form Card */}
              <ConsultationCard>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: { xs: 2, md: 3 }, 
                    textAlign: 'center', 
                    fontWeight: 700,
                    fontSize: { xs: '1rem', sm: '1.15rem', md: '1.3rem' },
                    lineHeight: 1.4,
                  }}
                >
                  Get a FREE Digital Consultation with Puzzle Diplomats in <Box component="span" sx={{ color: '#E31E24' }}>5 Minutes!</Box>
                </Typography>

                <Stack spacing={{ xs: 2, md: 2.5 }}>
                  <TextField
                    fullWidth
                    placeholder="Full Name *"
                    variant="outlined"
                    size="small"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                  <TextField
                    fullWidth
                    placeholder="Phone Number *"
                    variant="outlined"
                    size="small"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email *"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <TextField
                    fullWidth
                    placeholder="Business Name"
                    variant="outlined"
                    size="small"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                  />
                  <FormControl fullWidth size="small">
                    <InputLabel>Select a Service *</InputLabel>
                    <Select
                      value={formData.service}
                      label="Select a Service *"
                      onChange={(e) => handleInputChange('service', e.target.value)}
                    >
                      <MenuItem value="social">Social Media Marketing</MenuItem>
                      <MenuItem value="seo">SEO & Google Rankings</MenuItem>
                      <MenuItem value="paid">Paid Advertising (Google, Meta, LinkedIn)</MenuItem>
                      <MenuItem value="website">Website Development</MenuItem>
                      <MenuItem value="consulting">Business Consulting</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>When do you want to start? *</InputLabel>
                    <Select
                      value={formData.timeline}
                      label="When do you want to start? *"
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                    >
                      <MenuItem value="immediate">Immediately</MenuItem>
                      <MenuItem value="week">In 1 week</MenuItem>
                      <MenuItem value="month">In 4 days</MenuItem>
                    </Select>
                  </FormControl>
                  <StyledButton 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    onClick={handleSubmit}
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      padding: { xs: '12px 20px', md: '16px 24px' },
                    }}
                  >
                    Request a Call Back
                  </StyledButton>
                </Stack>

                {/* Google Rating Badge */}
                <Stack 
                  direction="row" 
                  alignItems="center" 
                  justifyContent="center" 
                  spacing={{ xs: 1, md: 1.5 }} 
                  sx={{ mt: { xs: 2, md: 3 }, flexWrap: 'wrap' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <img 
                      src="https://www.google.com/favicon.ico" 
                      alt="Google" 
                      style={{ width: 22, height: 22 }} 
                    />
                    <Typography variant="body2" fontWeight={700} sx={{ ml: 0.5 }}>
                      4.9
                    </Typography>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} sx={{ fontSize: 18, color: '#FFC107' }} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <VerifiedIcon sx={{ fontSize: 18, color: '#4285F4' }} />
                    <Typography variant="caption" color="text.secondary" fontWeight={500}>
                      100+ Reviews
                    </Typography>
                  </Box>
                </Stack>

                {/* Footer Note Image */}
                <Box sx={{ mt: { xs: 2, md: 3 }, textAlign: 'center' }}>
                  <img 
                    src="https://alahmaradv.com/wp-content/uploads/2024/02/form-footer-white.webp"
                    alt="Puzzle Diplomats - Trusted Partners"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                  />
                </Box>
              </ConsultationCard>
            </Stack>
          </Stack>
        </Box>
      </HeroContainer>

      {/* Social Sidebar */}
      <SocialSidebar sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SocialIconButton 
          component="a"
          href="https://www.linkedin.com/company/ak-edumasters/" 
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="small" />
        </SocialIconButton>
        <SocialIconButton 
          component="a"
          href="https://www.instagram.com/akodefyinfotech?igsh=MXJicThwaHhtdHh4Nw==" 
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="small" />
        </SocialIconButton>
        <Typography 
          variant="caption" 
          sx={{ 
            writingMode: 'vertical-rl', 
            transform: 'rotate(180deg)',
            color: '#757575',
            fontWeight: 600,
            fontSize: '0.7rem',
            mt: 1,
          }}
        >
          Follow Us
        </Typography>
      </SocialSidebar>

      {/* WhatsApp Floating Button */}
      <WhatsAppFab 
        component="a"
        href="https://wa.me/919080445315" 
        target="_blank"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </WhatsAppFab>
    </>
  );
}