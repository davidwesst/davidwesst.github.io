// @ts-check
import { test, expect } from '@playwright/test';
import { parseStringPromise } from 'xml2js';

test.describe("XML File Checks", () => {    
    test("Sitemap XML file should exist", async ({ page }) => {
        const path = "/sitemap.xml";
        const response = await page.goto(path);
        if (!response) {
            throw new Error(`No response received for ${path}`);
        }
        expect(response.ok()).toBe(true);
    });
    
    test("Sitemap XML file should be well-formed", async ({ page }) => {
        const path = "/sitemap.xml";
        const response = await page.goto(path);
        if (!response) {
            throw new Error(`No response received for ${path}`);
        }
        const xmlContent = await response.text();
    
        // Check if the XML is well-formed using parseStringPromise
        await expect(async () => {
            await parseStringPromise(xmlContent);
        }).not.toThrow();
    });

    test("Feed XML file should exist", async ({ page }) => {
        const path = "/feed.xml";
        const response = await page.goto(path);
        if (!response) {
            throw new Error(`No response received for ${path}`);
        }
        expect(response.ok()).toBe(true);
    });
    
    test("Feed XML file should be well-formed", async ({ page }) => {
        const path = "/feed.xml";
        const response = await page.goto(path);
        if (!response) {
            throw new Error(`No response received for ${path}`);
        }
        const xmlContent = await response.text();
    
        // Check if the XML is well-formed using parseStringPromise
        await expect(async () => {
            await parseStringPromise(xmlContent);
        }).not.toThrow();
    });
});