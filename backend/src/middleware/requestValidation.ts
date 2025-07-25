import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { sendError } from '../utils/response';

interface ValidatedRequest<TBody = unknown, TQuery = unknown, TParams = unknown>
  extends Request {
  validatedBody?: TBody;
  validatedQuery?: TQuery;
  validatedParams?: TParams;
}

export function validateBody<T>(schema: z.ZodSchema<T>) {
  return (req: ValidatedRequest, res: Response, next: NextFunction): void => {
    try {
      req.validatedBody = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorDetails = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
          code: err.code,
        }));

        sendError(
          res,
          'Validation failed',
          400,
          errorDetails.map(detail => `${detail.field}: ${detail.message}`)
        );
      } else {
        sendError(res, 'Internal server error', 500, [
          error instanceof Error ? error.message : String(error),
        ]);
      }
    }
  };
}

export function validateParams(schema: z.ZodTypeAny) {
  return (req: ValidatedRequest, res: Response, next: NextFunction): void => {
    try {
      req.validatedParams = schema.parse(req.params);

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorDetails = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
          code: err.code,
        }));

        sendError(
          res,
          'Parameter validation failed',
          400,
          errorDetails.map(detail => `${detail.field}: ${detail.message}`)
        );
      } else {
        sendError(res, 'Internal server error', 500, [
          error instanceof Error ? error.message : String(error),
        ]);
      }
    }
  };
}

export function validateQuery(schema: z.ZodTypeAny) {
  return (req: ValidatedRequest, res: Response, next: NextFunction): void => {
    try {
      req.validatedQuery = schema.parse(req.query);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorDetails = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
          code: err.code,
        }));

        sendError(
          res,
          'Query validation failed',
          400,
          errorDetails.map(detail => `${detail.field}: ${detail.message}`)
        );
      } else {
        sendError(res, 'Internal server error', 500, [
          error instanceof Error ? error.message : String(error),
        ]);
      }
    }
  };
}

export type { ValidatedRequest };
