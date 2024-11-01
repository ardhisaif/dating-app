
const Status: { [key: number]: string } = {
  200: 'OK',
  304: 'Not Modified',
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Data Not found',
  409: 'Conflict',
  410: 'Gone',
  422: 'Unprocessable Entity',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  501: 'Bad Gateway',
};

import { Response } from 'express';

export function response(res: Response, code: number, message: string = '', data: unknown = null): void {
  const status = Status[code] || '';
  res.status(code).json({ status, status_code: code, message, data });
}

export function okResponse(res: Response, message: string = '', data: unknown = null): void {
  return response(res, 200, message, data);
}

export function errResponse(error: { status?: number; message: string }, res: Response, position?: string): void {
  if (position) console.log(position, 'error: ', error.message);

  const status = error.status || 500;
  error.message = status === 500 ? 'Internal Server Error' : error.message;
  return response(res, status, error.message);
}

export function errThrow(condition: boolean, status: number, message: string): void {
  if (condition) {
    const error: { status?: number; message: string } = new Error(message);
    error.status = status;
    throw error;
  }
}