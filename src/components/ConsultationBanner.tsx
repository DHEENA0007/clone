import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { sendEmail } from '../utils/emailService';

const BannerContainer = styled(Box)({
  background: '#1A1A2E',
  backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmQlMjBkYXJrJTIwYWJzdHJhY3R8ZW58MHwwfHx8MTc2MDE4NTY5MHww&ixlib=rb-4.1.0&q=85)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: '#FFFFFF',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%)',
    zIndex: 0,
  },
});

// Diagonal red accent shape
const DiagonalAccent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-50%',
  right: '-10%',
  width: '60%',
  height: '200%',
  background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.15) 0%, rgba(183, 28, 28, 0.1) 100%)',
  transform: 'rotate(-15deg)',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

// Decorative circles
const DecorativeCircle = styled(Box)<{ top?: string; left?: string; right?: string; bottom?: string; size: string; opacity?: number }>(
  ({ top, left, right, bottom, size, opacity = 0.05 }) => ({
    position: 'absolute',
    top,
    left,
    right,
    bottom,
    width: size,
    height: size,
    borderRadius: '50%',
    border: `2px solid rgba(227, 30, 36, ${opacity})`,
    zIndex: 0,
  })
);

// Geometric dots pattern
const DotsPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '150px',
  height: '150px',
  backgroundImage: 'radial-gradient(circle, rgba(227, 30, 36, 0.2) 2px, transparent 2px)',
  backgroundSize: '20px 20px',
  opacity: 0.3,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledButton = styled(Button)({
  background: 'linear-gradient(135deg, #E31E24 0%, #B71C1C 100%)',
  color: '#FFFFFF',
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: 700,
  borderRadius: '50px',
  textTransform: 'none',
  boxShadow: '0 8px 30px rgba(227, 30, 36, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #B71C1C 0%, #E31E24 100%)',
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 40px rgba(227, 30, 36, 0.5)',
  },
  transition: 'all 0.3s ease',
});

export default function ConsultationBanner() {
  const handleScheduleSession = () => {
    sendEmail({}, 'Schedule Your Session Now');
  };

  return (
    <BannerContainer sx={{ py: 10, position: 'relative' }}>
      {/* Background decorative elements */}
      <DiagonalAccent />
      <DotsPattern />
      <DecorativeCircle top="10%" left="5%" size="200px" opacity={0.08} />
      <DecorativeCircle bottom="15%" right="8%" size="250px" opacity={0.06} />
      <DecorativeCircle top="50%" left="50%" size="300px" opacity={0.04} />
      
      {/* Animated gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(227, 30, 36, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontSize: { xs: '1.75rem', md: '2.75rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            Start Your Digital Growth Journey
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 5, 
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E31E24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            with a FREE Consultation
          </Typography>
          <StyledButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleScheduleSession}
          >
            Schedule Your Session Now
          </StyledButton>
          
          {/* Trust indicators */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: { xs: 3, sm: 4 }, flexWrap: 'wrap', px: { xs: 2, sm: 0 } }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#E31E24', mb: 0.5 }}>
                100+
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Happy Clients
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#E31E24', mb: 0.5 }}>
                5 Min
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Quick Setup
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#E31E24', mb: 0.5 }}>
                24/7
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Support Available
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </BannerContainer>
  );
}