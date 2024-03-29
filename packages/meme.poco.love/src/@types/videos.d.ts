export interface video {
  created_at: string;
  description: string;
  duration: string;
  id: string;
  language: string;
  muted_segments: string;
  published_at: string;
  stream_id: string;
  thumbnail_url: string;
  title: string;
  type: string;
  url: string;
  user_id: string;
  user_login: string;
  user_name: string;
  view_count: number;
  viewable: string;
}

export type videos = video[];
