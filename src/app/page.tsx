// src/app/page.tsx
import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';

export default function HomePage() {
  return (
    <Box component="section">
      {/* HERO */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
        <Stack spacing={4}>
          <Typography component="h1" variant="h1">
            Building Safe, Ethical, and Verifiable AI
          </Typography>

          <Typography variant="h2" component="p" color="text.secondary">
            A public platform for AI safety, governance, regulation tracking,
            evidence-based research, and accountable AI systems.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large">
              Explore the Mission
            </Button>
            <Button variant="outlined" size="large">
              View Sources
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* CREDIBILITY BLOCKS */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Stack spacing={4}>
          <Typography component="h2" variant="h2">
            What This Platform Focuses On
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h3" gutterBottom>
                AI Safety & Risk
              </Typography>
              <Typography>
                Tracking real-world AI incidents, failure modes, evaluation
                methods, and systemic risks using primary sources.
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h3" gutterBottom>
                Governance & Regulation
              </Typography>
              <Typography>
                Monitoring global AI policy, regulatory frameworks, and
                enforcement actions with jurisdiction-aware context.
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, flex: 1 }}>
              <Typography variant="h3" gutterBottom>
                Evidence & Sources
              </Typography>
              <Typography>
                Every claim is grounded in citations, documents, and verifiable
                references—no speculation, no hype.
              </Typography>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
