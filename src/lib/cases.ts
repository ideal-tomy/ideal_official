import { client } from './microcms';
import type { Case } from '../types/case';

export const getCases = async (): Promise<Case[]> => {
  try {
    const data = await client.get<{ contents: Case[] }>({
      endpoint: 'cases'
    });
    return data.contents;
  } catch (error) {
    console.error('データ取得エラー:', error);
    throw error;
  }
};

export const getCaseById = async (id: string): Promise<Case> => {
  try {
    const data = await client.get<Case>({
      endpoint: 'cases',
      contentId: id
    });
    console.log('詳細データ:', data);
    return data;
  } catch (error) {
    console.error('詳細データ取得エラー:', error);
    throw error;
  }
}; 