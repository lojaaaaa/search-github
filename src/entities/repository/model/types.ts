export interface IOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  [key: string]: any;
}

export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  owner: IOwner;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  [key: string]: any;
}

export type ErrorType = string | null;