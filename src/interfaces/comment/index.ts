export interface commentRequest {
  comment: string;
  authorId: string;
}

export interface Comment {
  id: string;
  comment: string;
  authorId: string;
  anouncementId: string;
  created: Date;
}
