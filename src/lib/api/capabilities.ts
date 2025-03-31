import { client } from './client';
import { AICapability } from '../../types/capability';

export const getCapabilities = async () => {
  try {
    const response = await client.get<AICapability[]>({
      endpoint: 'capabilities',
    });
    
    if (!response.contents) {
      throw new Error('No contents received from API');
    }
    
    return response.contents;
  } catch (error) {
    console.error('Error fetching capabilities:', error);
    throw new Error(`Failed to fetch capabilities: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const getCapabilityById = async (id: string) => {
  try {
    const response = await client.get<AICapability>({
      endpoint: 'capabilities',
      contentId: id,
    });
    
    if (!response) {
      throw new Error('No capability found');
    }
    
    return response;
  } catch (error) {
    console.error('Error fetching capability:', error);
    throw new Error(`Failed to fetch capability: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};