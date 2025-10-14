import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#D2042D',
      light: '#E63946',
      dark: '#A01729',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E293B',
      light: '#334155',
      dark: '#0F172A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBF5',
      paper: '#FFF8F0',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    grey: {
      50: '#FFFBF5',
      100: '#FFF8F0',
      200: '#F5EFE7',
      300: '#E8DFD4',
      400: '#C4B5A0',
      500: '#8C7E6A',
      600: '#6B5D4F',
      700: '#4A3F35',
      800: '#2D2520',
      900: '#1A1512',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Syne", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.35rem',
      },
    },
    h5: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.4,
      letterSpacing: '-0.005em',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
      lineHeight: 1.5,
      letterSpacing: '-0.005em',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1.05rem',
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '0.95rem',
      lineHeight: 1.65,
      letterSpacing: '-0.005em',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    overline: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '0.85rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '0.85rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            fontSize: '0.9rem',
            padding: '10px 20px',
          },
        },
        sizeLarge: {
          '@media (max-width:600px)': {
            fontSize: '1rem',
            padding: '12px 24px',
          },
        },
      },
    },
  },
});

export default theme;