# 聯絡表單設定指南（Google Apps Script + Sheet）

本網站採 Next.js 靜態輸出（`output: 'export'`）部署到 Cloudflare Pages，
無法使用 Next.js API Route。聯絡表單改由 **Google Apps Script Web App** 直接收單，
寫入 Google Sheet。

## 一、建立 Google Sheet

1. 到 https://sheets.google.com/ 建立新的試算表
2. 把第一頁的名稱（左下角分頁）改為 **`Contacts`**
3. 在 A1~F1 建立標題列：

   | A    | B    | C        | D    | E        | F          |
   |------|------|----------|------|----------|------------|
   | 時間 | 姓名 | 聯絡方式 | 留言 | 來源語系 | User Agent |

4. 複製試算表 ID（網址中段）：
   `https://docs.google.com/spreadsheets/d/`**`{SHEET_ID}`**`/edit`

## 二、部署 Apps Script Web App

1. 開啟 https://script.google.com/ → 建立新專案
2. 把 [`apps-script/Code.gs`](apps-script/Code.gs) 整段內容貼進 `Code.gs`
3. 把檔案開頭的 `SHEET_ID = 'PUT_YOUR_SHEET_ID_HERE'` 改成你的試算表 ID
4. 上方點「部署」→「新增部署作業」→ 類型選「**網頁應用程式**」
   - 執行身分：**我**（你的 Google 帳號）
   - 存取權限：**所有人**
5. 第一次部署會跳權限確認 — 全部允許
6. 複製產生的 URL，形如 `https://script.google.com/macros/s/AKfyc.../exec`

> 之後每次修改 `Code.gs`，必須「**部署 → 管理部署作業 → 編輯（鉛筆圖示）→ 版本選新版本 → 部署**」
> 才會真的更新，否則打過去的還是舊版。

## 三、設定環境變數

### 本機開發

在專案根目錄建立 `.env.local`：

```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://script.google.com/macros/s/AKfyc.../exec
```

然後：

```bash
pnpm dev
```

### Cloudflare Pages

在 Cloudflare Dashboard → Pages → 你的專案 → Settings → Environment variables，
新增 **Production** 和 **Preview** 兩組環境變數：

- 變數名稱：`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
- 值：你的 Apps Script Web App URL

> ⚠️ `NEXT_PUBLIC_*` 變數會在 build 時被嵌入到 JavaScript bundle 裡 — 也就是說
> **改完環境變數後必須重新 build**（在 Cloudflare 觸發 redeploy），舊的 build 不會
> 自動套用新值。

## 四、測試

1. 本機跑 `pnpm dev`
2. 打開 http://localhost:3000/resume
3. 拉到頁尾填表單送出
4. 檢查 Google Sheet 應該多一列資料

如果 console 顯示錯誤，先在瀏覽器直接打開 Apps Script URL — 應該回 `{"ok":true,"message":"Contact form endpoint is alive."}`。如果連這個都沒有，代表部署沒生效或權限沒給，回到第二步重做。

## 五、防爬蟲機制

表單已內建 honeypot 欄位（隱藏的 `website` input）。一般使用者看不到，
自動機器人會把所有欄位都填滿，當 `website` 不為空時，前端會偽裝成功
但不送資料。如果之後爬蟲變多，可以再加：

- 在 Apps Script 裡限制每 IP 每分鐘最多 N 筆（用 `PropertiesService` 暫存）
- 改用 Cloudflare Turnstile（無感驗證碼）

## 六、看到提交資料

直接打開步驟一建立的 Google Sheet — 即時更新。也可以加 Apps Script trigger，
有新資料時自動寄 email 通知自己。
