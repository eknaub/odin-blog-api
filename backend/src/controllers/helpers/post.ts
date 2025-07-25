import prisma from '../../prisma/client';
import { Response } from 'express';
import { sendNotFound } from '../../utils/response';
import { Post } from '../../api/models/post';
import { fetchUserIfExists } from './user';
import { User, UserDetail } from '../../api/models/user';
import { Category } from '../../api/models/category';
import { Tag } from '../../api/models/tag';
import { fetchCategoriesByPostId, mapCategoryToDto } from './category';
import { fetchTagsByPostId, mapTagToDto } from './tag';

export interface PrismaReturnedPost {
  id: number;
  title: string;
  content: string;
  published: boolean | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  authorId: number;
}

export function mapPostToDto(
  post: PrismaReturnedPost | Post,
  author: User | UserDetail,
  categories: Category[],
  tags: Tag[]
): Post {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    published: post.published ?? false,
    author: {
      id: author.id,
      username: author.username,
      email: author.email,
    },
    createdAt: post.createdAt ?? new Date(),
    updatedAt: post.updatedAt ?? new Date(),
    categories: [
      mapCategoryToDto(categories[0]),
      ...categories.slice(1).map(cat => mapCategoryToDto(cat)),
    ],
    tags: [mapTagToDto(tags[0]), ...tags.slice(1).map(tag => mapTagToDto(tag))],
  };
}

export async function fetchPostIfExists(
  postId: number | undefined,
  res: Response
): Promise<Post | null> {
  if (!postId) {
    sendNotFound(res, 'Post ID is required.');
    return null;
  }

  const baseSelect = {
    id: true,
    title: true,
    content: true,
    published: true,
    createdAt: true,
    updatedAt: true,
    authorId: true,
  };

  const foundPost = await prisma.posts.findUnique({
    select: baseSelect,
    where: { id: postId },
  });

  if (!foundPost) {
    sendNotFound(res, 'Post not found. Please provide a valid post ID.');
    return null;
  }

  const foundUser = await fetchUserIfExists(foundPost.authorId, res);
  if (!foundUser) {
    // getUserOrNotFound already sends a response, just return
    return null;
  }

  // Fetch categories and tags associated with the post
  const categories = await fetchCategoriesByPostId(postId);
  const tags = await fetchTagsByPostId(postId);

  // Return the found post with the user information
  const post = mapPostToDto(foundPost, foundUser, categories, tags);

  return post;
}

export async function associatePostRelations(
  postId: number,
  categoryIds: number[],
  tagIds: number[]
): Promise<{
  createdCategories: Category[];
  createdTags: Tag[];
}> {
  await prisma.postCategory.createMany({
    data: categoryIds.map(categoryId => ({
      postId,
      categoryId,
    })),
  });

  await prisma.postTags.createMany({
    data: tagIds.map(tagId => ({
      postId,
      tagId,
    })),
  });

  const tags = await fetchTagsByPostId(postId);
  const categories = await fetchCategoriesByPostId(postId);
  return { createdCategories: categories, createdTags: tags };
}
