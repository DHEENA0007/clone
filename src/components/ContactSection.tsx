import { Box, Typography, Stack, TextField, Button, Container, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { sendEmail, type ContactFormData } from '../utils/emailService';

const ContactContainer = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%)',
  color: '#FFFFFF',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1710020319182-3102611ed86b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWElMjBhbmFseXRpY3MlMjBpbGx1c3RyYXRpb258ZW58MHwwfHxwdXJwbGV8MTc2MDAzMjc1MXww&ixlib=rb-4.1.0&q=85)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
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
        <Typography variant="overline" align="center" sx={{ display: 'block', mb: 2, color: '#E31E24', fontWeight: 700, letterSpacing: 2 }}>
          📩 CONNECT WITH US
        </Typography>
        <Typography variant="h2" align="center" sx={{ mb: 3, color: '#FFFFFF' }}>
          Ready to Elevate Your Digital Presence?
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="flex-start">
          {/* Left - Description */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: '#E31E24', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              📩 CONNECT WITH US
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, color: '#FFFFFF', fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Ready to Elevate Your Digital Presence?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }}>
              At <strong>Puzzle Diplomats</strong>, we partner with forward-thinking brands to craft intelligent, immersive, and impactful digital strategies.
              <br /><br />
              Whether you're looking to scale your business, launch a high-converting website, dominate on social media, or break into global markets — we've got the expertise.
              <br /><br />
              Let's transform your vision into results. Fill out the form, and we'll be in touch.
            </Typography>
          </Box>

          {/* Right - Form */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', p: 4 }}>
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
                        '&.Mui-focused fieldset': { borderColor: '#E31E24' },
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
                        '&.Mui-focused fieldset': { borderColor: '#E31E24' },
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
                        '&.Mui-focused fieldset': { borderColor: '#E31E24' },
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
                        '&.Mui-focused fieldset': { borderColor: '#E31E24' },
                      },
                    }}
                  />
                </Stack>

                <FormControl>
                  <RadioGroup value={formData.service} onChange={(e) => handleInputChange('service', e.target.value)}>
                    <Stack spacing={1}>
                      <FormControlLabel
                        value="social"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: '#E31E24' } }} />}
                        label="Social Media Marketing"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="seo"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: '#E31E24' } }} />}
                        label="SEO & Google Rankings"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="paid"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: '#E31E24' } }} />}
                        label="Paid Advertising (Google, Meta, LinkedIn)"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="website"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: '#E31E24' } }} />}
                        label="Website Development"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                      <FormControlLabel
                        value="consulting"
                        control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.7)', '&.Mui-checked': { color: '#E31E24' } }} />}
                        label="Business Consulting"
                        sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                      />
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Please share your goals, challenges, or ideas with us."
                  variant="outlined"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FFFFFF',
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#E31E24' },
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
                    background: 'linear-gradient(135deg, #E31E24 0%, #B71C1C 100%)',
                  }}
                >
                  Ignite My Growth
                </Button>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </ContactContainer>
  );
}