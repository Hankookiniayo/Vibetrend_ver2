
export interface TrendItem {
  id: string;
  rank: number;
  keyword: string;
  score: number;
  change: 'up' | 'down' | 'new';
  category: string;
  platform: 'YouTube' | 'TikTok' | 'Both';
  country: 'KR' | 'US' | 'JP';
  lastUpdated: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  subscribers: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  quote: string;
  image: string;
}

export enum PlanType {
  FREE = 'Free',
  PRO = 'Pro',
  BUSINESS = 'Business'
}
