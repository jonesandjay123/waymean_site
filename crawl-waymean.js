const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ALLOWED_HOST = 'www.waymean.com.tw';
const BASE_URL = 'https://www.waymean.com.tw';
const OUTPUT_DIR = 'waymean-site';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const visited = new Set();
  const toVisit = [BASE_URL];

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  while (toVisit.length > 0) {
    const url = toVisit.pop();
    if (visited.has(url)) continue;
    visited.add(url);

    console.log('Fetching:', url);
    await page.goto(url, { waitUntil: 'networkidle' });

    const html = await page.content();

    // 檔名處理
    let fileName = url.replace(BASE_URL, '') || '/index';
    fileName = fileName.replace(/\/$/, '');
    fileName = fileName.replace(/\//g, '_');
    fileName = fileName.replace(/^_/, '');
    fileName = fileName || 'index';
    fileName += '.html';

    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), html);

    // 找站內連結
    const links = await page.$$eval('a[href]', links =>
        links.map(a => a.getAttribute('href'))
      );
      
      links
  .filter(href =>
    href &&
    !href.startsWith('javascript:') &&
    !href.startsWith('#')
  )
  .map(href => {
    try {
      // 把相對路徑轉成完整 URL
      const fullUrl = new URL(href, BASE_URL).href;
      return fullUrl;
    } catch {
      return null;
    }
  })
  .filter(fullUrl => {
    if (!fullUrl) return false;
    const host = new URL(fullUrl).host;
    // 👇 關鍵：只允許本站
    return host === ALLOWED_HOST;
  })
  .forEach(fullUrl => {
    if (!visited.has(fullUrl)) {
      toVisit.push(fullUrl);
    }
  });
  }

  await browser.close();
  console.log('Done. Pages saved to', OUTPUT_DIR);
})();
