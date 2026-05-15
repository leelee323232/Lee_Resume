# 李科邑個人履歷網站 — 設定總覽

## 1. 安裝依賴

```bash
pnpm install
```

## 2. 聯絡表單後端

表單欄位：**姓名 / 聯絡方式 / 留言**，提交後寫入 Google Sheet。

詳細部署步驟見 [`ENV_SETUP.md`](ENV_SETUP.md)：

1. 建立 Google Sheet（一頁名為 `Contacts`，第一列建好標題）
2. 把 [`apps-script/Code.gs`](apps-script/Code.gs) 部署成 Apps Script Web App
3. 在 `.env.local`（本機）和 Cloudflare Pages 環境變數設定 `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`

## 3. 本地開發

```bash
pnpm dev
```

頁面：

- 中文履歷：http://localhost:3000/resume
- 英文履歷：http://localhost:3000/en/resume
- 日文履歷：http://localhost:3000/ja/resume

## 4. Build / Deploy

```bash
pnpm build   # 靜態輸出至 out/
```

部署到 Cloudflare Pages：
- Build command：`pnpm build`
- Build output directory：`out`
- Environment variables：`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`

> ⚠️ `NEXT_PUBLIC_*` 環境變數會被打進 JS bundle，改值後一定要重新 build。

## 5. 內容架構

所有頁面文案集中在 [`lib/i18n/content/{zh,en,ja}.ts`](lib/i18n/content/)，
元件以 props 接收，不要把字串硬寫在元件裡。

## 6. 主要檔案

| 路徑 | 說明 |
|------|------|
| `app/resume/page.tsx` | 中文履歷頁 |
| `app/[locale]/resume/page.tsx` | 英 / 日履歷頁 |
| `components/contact-form-section.tsx` | 聯絡表單元件 |
| `apps-script/Code.gs` | 給 Google Apps Script 用的後端腳本 |
| `lib/i18n/content/{zh,en,ja}.ts` | 多語系文案 |
