import { RequestHandler, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel';
import { BadRequestError } from '../errors/badRequestError'; 

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 * */ 
const authUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw new BadRequestError("Invalid Credentials");

  const passwordsMatch: boolean = await user.comparePassword(password);

  if (!passwordsMatch) throw new BadRequestError("Invalid Credentials");

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    idAdmin: user.isAdmin,
    token: null
  });
});

export { authUser };