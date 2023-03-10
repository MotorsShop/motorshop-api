export interface AnouncementRequest {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: 'car' | 'motorbike';
  ad_type: 'auction' | 'sale';
  published?: boolean;
  sold?: boolean;
  cover_img: string;
  userId: string;
  images: string[];
}

export interface AnouncementUpdated {
  title?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  vehicle_type?: 'car' | 'motorbike';
  ad_type?: 'auction' | 'sale';
  published?: boolean;
  sold?: boolean;
  cover_img?: string;
  userId?: number;
  images?: string[];
}
// export interface Comment {
//   id: string;
//   comment: string;
//   author: User;
//   created: Date;
//   announcement: Announcement;
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   cpf: string;
//   phone: string;
//   dateOfBirth: string;
//   description: string;
//   type: string;
//   password: string;
//   announcements: Announcement[];
//   comments: Comment[];
// }
