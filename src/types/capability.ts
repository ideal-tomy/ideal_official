export interface AICapability {
  id: string;
  title: string;
  description: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  contents: AICapability[];
}

export interface AICapabilityResponse {
  contents: AICapability[];
  totalCount: number;
  offset: number;
  limit: number;
}