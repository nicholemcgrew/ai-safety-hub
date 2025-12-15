// src/components/SkipToContent.tsx
'use client';

import Link from 'next/link';
import { Box } from '@mui/material';

export default function SkipToContent() {
  return (
    <Box
      component={Link}
      href="#main-content"
      sx={{
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 2000,
        px: 2,
        py: 1,
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'text.primary',
        border: '1px solid',
        borderColor: 'divider',
        textDecoration: 'none',
        transform: 'translateY(-200%)',
        transition: 'transform 120ms ease',
        '&:focus': {
          transform: 'translateY(0)',
        },
      }}
    >
      Skip to main content
    </Box>
  );
}
