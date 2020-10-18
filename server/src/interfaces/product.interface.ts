import { UserAttrs } from './user.interface';
import { ReviewAttrs } from './review.interface';

export interface ProductAttrs {
  user: UserAttrs;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  review: ReviewAttrs[];
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
};