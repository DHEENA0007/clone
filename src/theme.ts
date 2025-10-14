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
      main: '#1B8F4A',
      light: '#2BA85E',
      dark: '#147038',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4169A1',
      light: '#5A7FB8',
      dark: '#2F5A8C',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ED6C02',
      light: '#FF9800',
      dark: '#E65100',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0288D1',
      light: '#03A9F4',
      dark: '#01579B',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFBFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5A5A5A',
      disabled: '#9E9E9E',
    },
    grey: {
      50: '#FAFBFC',
      100: '#F5F7F9',
      200: '#E8ECF0',
      300: '#D1D9E0',
      400: '#A8B4C0',
      500: '#7A8A9A',
      600: '#5A6A7A',
      700: '#3F4F5F',
      800: '#2A3A4A',
      900: '#1A2A3A',
    },
    divider: '#E8ECF0',
    common: {
      black: '#000000',
      white: '#FFFFFF',
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