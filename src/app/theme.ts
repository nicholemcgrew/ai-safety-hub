// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: { main: '#4DA3FF' },
    secondary: { main: '#A78BFA' },
    background: {
      default: '#070A12',
      paper: '#0B1020',
    },
    text: {
      primary: '#E6EDF7',
      secondary: '#B7C2D6',
    },
    divider: 'rgba(230, 237, 247, 0.12)',
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: { fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontSize: '1.6rem', fontWeight: 750, letterSpacing: '-0.01em' },
    body1: { fontSize: '1rem', lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          // subtle “future” feel without killing contrast
          backgroundImage:
            'radial-gradient(900px 500px at 15% 10%, rgba(77,163,255,0.20) 0%, rgba(0,0,0,0) 60%), radial-gradient(700px 500px at 85% 15%, rgba(167,139,250,0.14) 0%, rgba(0,0,0,0) 55%)',
          backgroundAttachment: 'fixed',
        },
        '*:focus-visible': {
          outline: '3px solid rgba(77,163,255,0.85)',
          outlineOffset: '3px',
          borderRadius: '10px',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(230, 237, 247, 0.10)',
          backgroundImage:
            'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: '0.25em',
          textDecorationThickness: '0.12em',
        },
      },
    },
  },
});
