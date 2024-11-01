import { errResponse, okResponse } from '../helpers/response';
import user from '../services/user.service';
import { Request, Response } from 'express';

export default {
  async getUserByID(req: Request, res: Response) {
    try {
      const data = await user.getUserByID(Number(req.params.user_id));
      return okResponse(res, 'Success get user by ID', data);
    } catch (error) {
      const formattedError = {
        status: (error as { status?: number }).status || 500,
        message: (error as { message?: string }).message || 'Internal Server Error'
      };
      return errResponse(formattedError, res, 'getUserByID');
    }
  }
}