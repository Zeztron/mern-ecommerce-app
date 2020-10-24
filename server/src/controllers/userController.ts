import { RequestHandler, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel';
import { BadRequestError } from '../errors/badRequestError'; 
import { NotFoundError } from '../errors/notFoundError';
import generateToken from '../utils/generateToken';

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 * */ 
const authUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw new BadRequestError('Invalid Credentials');

  const passwordsMatch: boolean = await user.comparePassword(password);

  if (!passwordsMatch) throw new BadRequestError('Invalid Credentials');

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    idAdmin: user.isAdmin,
    token: generateToken(user._id)
  });
});

/**
 * @desc    Get User Profile
 * @route   GET /api/users/profile
 * @access  Private
 * */ 
const getUserProfile: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user?._id).select('-password');

  if (!user) throw new NotFoundError('User not found'); 
  res.send(user)
  
});

/**
 * @desc    Register a new user
 * @route   POST /api/users
 * @access  Public
 * */ 
const registerUser: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) throw new BadRequestError('User Already Exists');

  const user = await User.create({ name, email, password, isAdmin: false });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    idAdmin: user.isAdmin,
    token: generateToken(user._id)
  });
});



export { authUser, getUserProfile, registerUser };