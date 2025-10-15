import { Box, Typography, Stack, TextField, Button, Container, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { sendEmail, type ContactFormData } from '../utils/emailService';

const ContactContainer = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(20, 112, 56, 0.95) 0%, rgba(47, 90, 140, 0.95) 100%)',
  color: '#FFFFFF',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfDB8fHwxNzYwMTg1MzkwfDA&ixlib=rb-4.1.0&q=85)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: 0,
  },
});

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    message: '',
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    sendEmail(formData, 'Connect With Our Experts');
  };

  return (
    <ContactContainer sx={{ py: 12 }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" align="center" sx={{ display: 'block', mb: 2, color: '#FFFFFF', fontWeight: 700, letterSpacing: 2 }}>
          📩 CONNECT WITH US
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 3, color: '#FFFFFF' }}>
          Ready to Transform Your Technology Infrastructure?
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Left - Description */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              📩 CONNECT WITH US
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, color: '#FFFFFF', fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Ready to Modernize Your IT Systems?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }}>
              At <strong>Akodefy</strong>, we partner with forward-thinking businesses to build robust, scalable IT solutions that drive innovation and growth.
              <br /><br />
              Whether you need to develop custom software, migrate to the cloud, enhance cybersecurity, or build mobile applications — our expertise delivers results.
              <br /><br />
              Let's transform your technology vision into reality. Complete the form below, and our team will reach out promptly.
            </Typography>
          </Box>

          {/* Right - Form */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', borderRadius: '16px', p: { xs: 3, sm: 4 }, border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="Full Name"
                    variant="outlined"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--mui-palette-primary-main)' },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--mui-palette-primary-main)' },
                      },
                    }}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    type="tel"
                    variant="outlined"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--mui-palette-primary-main)' },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Company Name"
                    variant="outlined"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--mui-palette-primary-main)' },
                      },
                    }}
                  />
                </Stack>

                <FormControl>
                  <RadioGroup value={formData.service} onChange={(e) => handleInputChange('service', e.target.value)}>
                    <Stack spacing={1}>
                      <FormControlLabel
                        value="web-dev"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: 'var(--mui-palette-primary-main)' } }} />}
                        label="Web Development"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="mobile-dev"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: 'var(--mui-palette-primary-main)' } }} />}
                        label="Mobile App Development"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="software-dev"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: 'var(--mui-palette-primary-main)' } }} />}
                        label="Custom Software Development"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="cloud"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: 'var(--mui-palette-primary-main)' } }} />}
                        label="Cloud Solutions & Migration"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="it-consulting"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: 'var(--mui-palette-primary-main)' } }} />}
                        label="IT Consulting & Strategy"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Please share your technology requirements, challenges, or project ideas with us."
                  variant="outlined"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FFFFFF',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: 'var(--mui-palette-primary-main)' },
                    },
                  }}
                />

                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  onClick={handleSubmit}
                  sx={{ 
                    py: 2,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, var(--mui-palette-primary-main) 0%, var(--mui-palette-primary-dark) 100%)',
                  }}
                >
                  Accelerate My IT Growth
                </Button>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </ContactContainer>
  );
}