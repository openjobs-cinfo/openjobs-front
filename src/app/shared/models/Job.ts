export interface Job {
  id: number;
  original_id: string;
  url: string;
  number: number;
  title: string;
  state: string;
  created_at: string;
  closed_at: string | null;
  description: string;
  location: string;
  origin_id: number;
  skills: number[];
}
