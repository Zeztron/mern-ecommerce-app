import { UserAttrs } from './user.interface';
import { ProductAttrs } from './product.interface'; 

export interface OrderAttrs {
  user: UserAttrs;
  orderItems: {
    name: string;
    quantity: number;
    image: string;
    product: ProductAttrs
  }
  shippingAddress: {
    address: string,
    city: string,
    postalCode: string,
    country: string
  };
  paymentMethod: string,
  paymentResult: {
    id: string,
    status: string,
    update_time: string,
    email_address: string
  },
  taxPrice: number,
  shippingPrice: number,
  totalPrice: number,
  isPaid: boolean,
  paidAt: Date,
  isDelivered: boolean,
  deliveredAt: Date
};