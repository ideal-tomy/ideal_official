import { createClient } from 'microcms-js-sdk';

// APIキーが設定されているか確認
console.log('API Key exists:', !!import.meta.env.VITE_MICROCMS_API_KEY);

export const client = createClient({
  serviceDomain: 'ideal',  // あなたのサービスドメイン
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY
});

// 接続テスト用の関数
export const testConnection = async () => {
  try {
    const response = await client.get({
      endpoint: 'cases'
    });
    console.log('microCMS response:', response);
    return response;
  } catch (error) {
    console.error('microCMS error:', error);
    throw error;
  }
}; 