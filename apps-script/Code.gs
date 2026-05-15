/**
 * Lee_Resume — 聯絡表單後端（Google Apps Script）
 *
 * 部署方式：
 * 1. 開啟 https://script.google.com/ → 建立新專案
 * 2. 把這段程式碼整個貼進 Code.gs
 * 3. 把下方 SHEET_ID 換成你的 Google Sheet ID
 *    （Sheet 網址 https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit 中間那段）
 * 4. 把 NOTIFY_EMAIL 換成你想收通知的信箱（預設是你的 Google 帳號）
 * 5. Sheet 第一頁名稱建議改成 "Contacts"，並在第一列建立標題：
 *    A1: 時間  B1: 姓名  C1: 聯絡方式  D1: 留言  E1: 來源語系  F1: User Agent
 * 6. 點上方「部署」→「新增部署作業」→ 類型選「網頁應用程式」
 *    - 執行身分：我（你的 Google 帳號）
 *    - 存取權限：所有人
 * 7. 複製產生的網址（形如 https://script.google.com/macros/s/XXXX/exec）
 * 8. 把網址貼到 .env.local 的 NEXT_PUBLIC_CONTACT_FORM_ENDPOINT，
 *    以及 Cloudflare Pages 的環境變數中
 *
 * 之後若修改這份程式，記得「部署 → 管理部署作業 → 編輯 → 版本選新版本」重新發佈，
 * 否則網址打到的還是舊版本。
 */

const SHEET_ID = '16M6ZzjvPsU-H7ScRL99SHILYDKpTVN-XG74fIAySkRo';
const SHEET_NAME = 'Contacts';

// 收到新留言時，通知信發到這裡（逗號分隔多個信箱）。
const NOTIFY_EMAILS = ['lik75932@gmail.com', 'koilee.works@gmail.com'];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');

    const name    = String(payload.name    || '').trim().slice(0, 100);
    const contact = String(payload.contact || '').trim().slice(0, 200);
    const message = String(payload.message || '').trim().slice(0, 2000);
    const locale  = String(payload.locale  || '').trim().slice(0, 10);

    if (!name || !contact || !message) {
      return jsonResponse({ ok: false, error: 'missing_fields' });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ ok: false, error: 'sheet_not_found' });
    }

    const now = new Date();
    const userAgent = (e.parameter && e.parameter.ua) || '';
    sheet.appendRow([now, name, contact, message, locale, userAgent]);

    sendNotification(now, name, contact, message);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function sendNotification(timestamp, name, contact, message) {
  const recipient = NOTIFY_EMAILS.join(',');
  const timeStr   = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

  const subject = '【新留言】' + name + ' 透過履歷網站聯繫你';

  const body =
    '有人填寫了你的聯絡表單：\n\n' +
    '姓名：' + name    + '\n' +
    '聯絡方式：' + contact + '\n' +
    '留言：\n' + message + '\n\n' +
    '時間：' + timeStr;

  const htmlBody =
    '<p>有人填寫了你的聯絡表單：</p>' +
    '<table style="border-collapse:collapse;font-family:sans-serif;">' +
      '<tr><td style="padding:6px 12px;font-weight:bold;color:#555;">姓名</td>'       + '<td style="padding:6px 12px;">' + escapeHtml(name)    + '</td></tr>' +
      '<tr><td style="padding:6px 12px;font-weight:bold;color:#555;">聯絡方式</td>'   + '<td style="padding:6px 12px;">' + escapeHtml(contact) + '</td></tr>' +
      '<tr><td style="padding:6px 12px;font-weight:bold;color:#555;vertical-align:top;">留言</td>' +
        '<td style="padding:6px 12px;white-space:pre-wrap;">' + escapeHtml(message) + '</td></tr>' +
      '<tr><td style="padding:6px 12px;font-weight:bold;color:#555;">時間</td>'       + '<td style="padding:6px 12px;color:#999;">' + timeStr + '</td></tr>' +
    '</table>';

  MailApp.sendEmail({
    to:       recipient,
    subject:  subject,
    body:     body,
    htmlBody: htmlBody,
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 讓你直接打開部署網址測試（GET 應該回一個簡單訊息，而不是 500）。
function doGet() {
  return jsonResponse({ ok: true, message: 'Contact form endpoint is alive.' });
}

function jsonResponse(obj) {
  // Apps Script 沒有自訂 HTTP status 的能力，所有回應都是 200。
  // 前端用 ok flag 判斷成功與否。
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
