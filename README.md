# 威名國際有限公司 官方網站

Waymean International Logistics Co., Ltd.

專業報關行 ・ 海空運物流

---

## 專案簡介

這是威名國際有限公司的企業官方網站，採用現代化響應式設計，適合靜態託管。

## 專案結構

```
waymean/
├── index.html              # 主頁面（單頁式設計）
├── styles.css              # 樣式檔案
├── waymean_full_logo.png   # 完整 Logo（用於 Header）
├── waymean_logo.png        # 小 Logo（用於 Favicon）
├── pic1.webp               # Hero 背景圖
├── pic2.webp               # 關於區塊圖片
├── pic3.webp               # 服務區塊圖片
├── pic4.webp               # 聯絡 CTA 背景圖
├── README.md               # 專案說明
├── .gitignore              # Git 忽略清單
│
├── crawl-waymean.js        # [工具] 網站爬蟲腳本
├── package.json            # [工具] Node.js 依賴
│
└── waymean-site/           # [備份] 原始網站 HTML
    ├── index.html
    ├── service.html.html
    ├── info.html.html
    ├── contact.html.html
    └── inquiry.html.html
```

## 技術特點

- **純靜態網站**：無需後端，可部署至任何靜態託管服務
- **響應式設計**：支援桌機、平板、手機
- **現代 CSS**：使用 CSS Variables、Grid、Flexbox
- **最小化 JS**：僅用於行動版選單和平滑捲動
- **圖片最佳化**：使用 WebP 格式，object-fit 防止變形

## 本地預覽

```bash
# 方法一：Python
python3 -m http.server 8080

# 方法二：Node.js
npx serve .

# 方法三：PHP
php -S localhost:8080
```

開啟瀏覽器 `http://localhost:8080`

## 部署

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### 其他平台

可直接上傳至：
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Google Cloud Storage

**部署檔案清單：**
- `index.html`
- `styles.css`
- `waymean_full_logo.png`
- `waymean_logo.png`
- `pic1.webp` ~ `pic4.webp`

## 聯絡資訊

**威名國際有限公司**

- 📍 地址：10455 台北市中山區松江路18號10樓之2
- 📞 電話：(02) 2551-1828
- 📠 傳真：(02) 2565-2522
- ✉️ 海運部：waymean2@gmail.com
- ✉️ 空運部：waymean@ms64.hinet.net

---

© 2026 威名國際有限公司 Waymean International Logistics Co., Ltd.
