import mongoose from 'mongoose';
import { UserAttrs } from '../interfaces/user.interface';
import bcrypt from 'bcryptjs';

// An interface that describes the properties
// that are required to create a new User


// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  comparePassword: Function;
};

// An interface that describes the properties
// That a User model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(atts: UserAttrs): UserDoc;
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.methods.comparePassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };