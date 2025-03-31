import { createClient } from 'microcms-js-sdk';

// デバッグ用のログを追加
console.log('API Key:', import.meta.env.VITE_MICROCMS_API_KEY);
console.log('Service Domain:', import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN);

// 必須の設定が存在するか確認
if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || !import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error('Missing required environment variables. Please set VITE_MICROCMS_SERVICE_DOMAIN and VITE_MICROCMS_API_KEY.');
}

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY
});