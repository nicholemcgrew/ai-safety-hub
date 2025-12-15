import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no serious/critical WCAG violations', async ({ page }) => {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  const results = await new AxeBuilder({ page }).analyze();

  const seriousOrWorse = results.violations.filter((v) =>
    ['serious', 'critical'].includes(v.impact ?? '')
  );

  expect(seriousOrWorse, JSON.stringify(seriousOrWorse, null, 2)).toEqual([]);
});
