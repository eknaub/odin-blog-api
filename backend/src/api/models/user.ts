import { z } from 'zod';

export const BaseUserSchema = z.object({
  id: z.number().int().positive(),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(
      /^[a-zA-Z0-9_]{3,20}$/,
      'Username can only contain letters, numbers, and underscores'
    )
    .trim(),
  email: z
    .string()
    .email('Invalid email format')
    .max(100, 'Email must be at most 100 characters')
    .trim(),
  createdAt: z.date(),
  updatedAt: z.date(),
  followersCount: z.number().int().nonnegative().default(0),
  followingCount: z.number().int().nonnegative().default(0),
});

export const UserCreateSchema = z.object({
  username: BaseUserSchema.shape.username,
  email: BaseUserSchema.shape.email,
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be at most 50 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,50}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, and one number'
    )
    .trim(),
});

export const UserDetailSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  email: z.string().email(),
});

export const UserUpdateSchema = z.object({
  username: BaseUserSchema.shape.username,
  email: BaseUserSchema.shape.email,
});

export const UserLoginResSchema = z.object({
  token: z.string(),
  user: BaseUserSchema,
});

export const UserRegisterResSchema = z.object({
  token: z.string(),
  user: BaseUserSchema,
});

export type User = z.infer<typeof BaseUserSchema>;
export type UserLoginRes = z.infer<typeof UserLoginResSchema>;
export type UserRegisterRes = z.infer<typeof UserRegisterResSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserUpdate = z.infer<typeof UserUpdateSchema>;
export type UserDetail = z.infer<typeof UserDetailSchema>;
