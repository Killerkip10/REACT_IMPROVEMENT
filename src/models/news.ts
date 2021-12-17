import { LanguageEnum } from 'constant';

export interface INews {
  id: number;
  originId: string;
  title: string;
  author: string;
  crawled: number;
  published: number;
  keywords: string[];
  fingerprint: string;
  canonicalUrl: string;
  unread: boolean;
  language: LanguageEnum;
  summary: INewsSummary;
}

export interface INewsSummary {
  content: string;
}
