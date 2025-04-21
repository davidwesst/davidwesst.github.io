// @ts-check
import { test, expect } from '@playwright/test';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

async function getRoutesFromSitemap(sitemapUrl) {
  const response = await fetch(sitemapUrl);

  // Check if the response is OK
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap from url ${sitemapUrl}. Status: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();

  const parsed = await parseStringPromise(xml);

  const routes = parsed.urlset.url
    .map(u => new URL(u.loc[0]).pathname)
    .filter(path => !path.endsWith('.xml'));

  return routes;
}

test.describe('Page Metadata Checks', () => {
  test.setTimeout(60000); // Set timeout to 60 seconds

  let routes;

  test.beforeAll(async () => {
    // Replace with your sitemap URL
    const sitemapUrl = 'http://localhost:8081/sitemap.xml';
    
    routes = await getRoutesFromSitemap(sitemapUrl);
  });

  test('all pages have meta description', async ({ page }) => {
    for (const route of routes) {
      await page.goto(`${route}`);
      const metaDescription = await page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/); // Ensure 'content' is not empty
    }
  });

  test('all pages have a title', async ({ page }) => {
    for (const route of routes) {
      await page.goto(`${route}`);
      const pageTitle = await page.title();
      expect(pageTitle).not.toBe(''); // Ensure the title is not empty
    }
  });
});
