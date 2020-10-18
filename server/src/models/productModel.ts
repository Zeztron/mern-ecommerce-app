import mongoose from 'mongoose';
import { UserAttrs } from './userModel';

// An interface that describes the properties
// that are required to create a new Review
interface ReviewAttrs {
  name: string;
  rating: string;
  comment: string;
}

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


// An interface that describes the properties
// that are required to create a new Product
export interface ProductAttrs {
  user: UserAttrs;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  review: ReviewAttrs;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
};

// An interface that describes the properties
// that a User Document has
interface ProductDoc extends mongoose.Document {
  user: UserAttrs;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  review: ReviewAttrs;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
};

// An interface that describes the properties
// That a User model has
interface ProductModel extends mongoose.Model<ProductDoc> {
  build(atts: ProductAttrs): ProductDoc;
};


const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema);

export { Product };