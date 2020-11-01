import mongoose from 'mongoose';
import { UserAttrs } from '../interfaces/user.interface';
import { ProductAttrs } from '../interfaces/product.interface';
import { OrderAttrs } from '../interfaces/order.interface';

// An interface that describes the properties
// that are required to create a new Order
// An interface that describes the properties
// that a User Document has
interface OrderDoc extends mongoose.Document {
  user: UserAttrs;
  orderItems: {
    name: string;
    qty: number;
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

// An interface that describes the properties
// That a User model has
interface OrderModel extends mongoose.Model<OrderDoc> {
  build(atts: OrderAttrs): OrderDoc;
};


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ],
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String }
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date,
  }
}, {
  timestamps: true
});

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };