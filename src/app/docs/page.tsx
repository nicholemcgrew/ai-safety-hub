'use client';

import dynamic from 'next/dynamic';
import { Box, Container, Typography } from '@mui/material';
import 'swagger-ui-react/swagger-ui.css';
import './swagger-dark.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        API Docs
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Contract-first documentation generated from the OpenAPI spec.
      </Typography>

      <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <SwaggerUI url="/api/docs" />
      </Box>
    </Container>
  );
}
