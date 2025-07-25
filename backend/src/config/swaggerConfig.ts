import swaggerJSDoc from 'swagger-jsdoc';
import {
  followerBaseSwaggerSchema,
  followerCreateSwaggerSchema,
  followerSwaggerSchema,
} from '../api/models/followerSwagger';
import { aiSwaggerSchema } from '../api/models/aiSwagger';
import {
  userLoginResSwaggerSchema,
  userPostSwaggerSchema,
  userRegisterResSwaggerSchema,
  userSwaggerSchema,
  userUpdateSwaggerSchema,
} from '../api/models/userSwagger';
import {
  postCreateSwaggerSchema,
  postSwaggerSchema,
  postUpdateSwaggerSchema,
} from '../api/models/postSwagger';
import {
  commentCreateSwaggerSchema,
  commentSwaggerSchema,
  commentUpdateSwaggerSchema,
} from '../api/models/commentSwagger';
import { loginSwaggerSchema } from '../api/models/loginSwagger';
import {
  categoryPostSwaggerSchema,
  categoryPutSwaggerSchema,
  categorySwaggerSchema,
} from '../api/models/categorySwagger';
import {
  tagPostSwaggerSchema,
  tagPutSwaggerSchema,
  tagSwaggerSchema,
} from '../api/models/tagSwagger';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Odin Blog API',
      version: '1.0.0',
      description: 'API documentation for Odin Blog',
    },
    components: {
      schemas: {
        // AI schemas
        Ai: aiSwaggerSchema.definitions?.Ai,
        //User schemas
        User: userSwaggerSchema.definitions?.User,
        UserLoginRes: userLoginResSwaggerSchema.definitions?.UserLoginRes,
        UserRegisterRes:
          userRegisterResSwaggerSchema.definitions?.UserRegisterRes,
        UserPost: userPostSwaggerSchema.definitions?.UserPost,
        UserPut: userUpdateSwaggerSchema.definitions?.UserPut,
        BaseFollower: followerBaseSwaggerSchema.definitions?.BaseFollower,
        Follower: followerSwaggerSchema.definitions?.Follower,
        FollowerCreate: followerCreateSwaggerSchema.definitions?.FollowerCreate,
        // Post schemas
        Post: postSwaggerSchema.definitions?.Post,
        PostPost: postCreateSwaggerSchema.definitions?.PostPost,
        PostPut: postUpdateSwaggerSchema.definitions?.PostPut,
        // Comment schemas
        Comment: commentSwaggerSchema.definitions?.Comment,
        CommentPost: commentCreateSwaggerSchema.definitions?.CommentCreatePost,
        CommentPut: commentUpdateSwaggerSchema.definitions?.CommentPut,
        // Login schema
        Login: loginSwaggerSchema.definitions?.Login,
        // Category schemas
        Category: categorySwaggerSchema.definitions?.Category,
        CategoryPost: categoryPostSwaggerSchema.definitions?.CategoryPost,
        CategoryPut: categoryPutSwaggerSchema.definitions?.CategoryPut,
        // Tag schemas
        Tag: tagSwaggerSchema.definitions?.Tag,
        TagPost: tagPostSwaggerSchema.definitions?.TagPost,
        TagPut: tagPutSwaggerSchema.definitions?.TagPut,
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
