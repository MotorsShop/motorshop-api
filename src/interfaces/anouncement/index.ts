export interface AnouncementRequest {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: string;
  ad_type: string;
  published: boolean;
  sold: boolean;
  cover_img: string;
}

export interface AnouncementResponse {
  //id:           number
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: string;
  ad_type: string;
  published: boolean;
  sold: boolean;
  cover_img: string;
 //created:      Date
}