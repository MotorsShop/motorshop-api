import { Comment } from '../comment';
export interface AnouncementRequest {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: 'car' | 'motorbike';
  ad_type: 'auction' | 'sale';
  cover_img: string;
  userId: string;
}

export interface AnouncementResponse {
  id: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: 'car' | 'motorbike';
  ad_type: 'auction' | 'sale';
  published: boolean;
  sold: boolean;
  cover_img: string;
  userId: string;
  created: Date;
  comments: [Comment];
}

// export interface Announcement {
//   id: string;
//   title: string;
//   year: number;
//   km: number;
//   price: number;
//   description: string;
//   vehicle_type: 'car' | 'motorbike';
//   ad_type: 'auction' | 'sale';
//   published: boolean;
//   sold: boolean;
//   cover_img: string;
//   created: Date;
//   userId: string;
//   comments: Comment[];
// }
