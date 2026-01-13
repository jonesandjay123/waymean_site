# 威名國際有限公司 官方網站

Waymean International Logistics Co., Ltd. - 專業報關行服務

## 關於專案

這是威名國際有限公司的現代化企業網站，從原有的舊版網站重新設計而成。

### 公司簡介

威名國際是一家位於台北的專業報關行，擁有數十年的報關物流經驗，提供：

- 進出口報關服務
- 海運物流服務
- 空運物流服務
- 貿易文件代辦

## 網站結構

```
waymean/
├── index.html      # 主頁面（單頁式設計）
├── styles.css      # 樣式檔案
├── README.md       # 專案說明
└── waymean-site/   # 原始網站備份（供參考）
```

## 技術特點

- **純靜態網站**：無需後端，可直接部署至任何靜態託管服務
- **響應式設計**：支援桌機、平板、手機等各種裝置
- **現代化 CSS**：使用 CSS Variables、Flexbox、Grid
- **最小化 JavaScript**：僅用於行動版選單和平滑捲動
- **SEO 優化**：語意化 HTML、適當的 meta 標籤
- **無障礙設計**：適當的 focus 樣式、語意化標籤

## 本地開發

### 方法一：直接開啟

直接在瀏覽器中開啟 `index.html` 檔案即可預覽。

### 方法二：本地伺服器

```bash
# 使用 Python
python3 -m http.server 8000

# 或使用 Node.js 的 serve
npx serve .

# 或使用 PHP
php -S localhost:8000
```

然後在瀏覽器開啟 `http://localhost:8000`

## 部署

### Firebase Hosting

```bash
# 安裝 Firebase CLI
npm install -g firebase-tools

# 登入 Firebase
firebase login

# 初始化專案
firebase init hosting

# 部署
firebase deploy
```

### 其他靜態託管

本網站可部署至任何支援靜態檔案的託管服務：

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Google Cloud Storage

## 聯絡資訊

**威名國際有限公司**

- 地址：10455 台北市中山區松江路18號10樓之2
- 電話：(02) 2551-1828
- 傳真：(02) 2565-2522
- 信箱：
  - 海運部：waymean2@gmail.com
  - 空運部：waymean@ms64.hinet.net

---

© 2026 威名國際有限公司 Waymean International Logistics Co., Ltd.
