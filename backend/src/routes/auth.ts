import { Router } from 'express';
import AuthController from '../controllers/auth';
import { validateBody } from '../middleware/requestValidation';
import { requireAuth } from '../middleware/auth';
import { UserCreateSchema } from '../api/models/user';
import { LoginSchema } from '../api/models/login';
import { AuthRoutes } from '../utils/enums';

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserPost'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserRegisterRes'
 *       400:
 *         description: Validation error
 *
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserLoginRes'
 *       401:
 *         description: Invalid credentials
 *
 * /api/auth/profile:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get the current user's profile
 *     responses:
 *       200:
 *         description: User profile returned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */

const authRouter = Router();
const authController = new AuthController();

authRouter.post(
  `/${AuthRoutes.REGISTER}`,
  validateBody(UserCreateSchema),
  authController.register.bind(authController)
);
authRouter.post(
  `/${AuthRoutes.LOGIN}`,
  validateBody(LoginSchema),
  authController.login.bind(authController)
);
authRouter.get(
  `/${AuthRoutes.PROFILE}`,
  requireAuth,
  authController.getProfile.bind(authController)
);

export default authRouter;
