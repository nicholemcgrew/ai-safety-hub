// src/lib/openapi.ts
import swaggerJsdoc from 'swagger-jsdoc';

export const openapiSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Safety Hub API',
      version: '0.1.0',
      description:
        'Public API for AI safety, governance, regulation tracking, and evidence-based data.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/app/api/**/*.ts'],
});
