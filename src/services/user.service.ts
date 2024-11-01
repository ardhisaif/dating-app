import { User } from "../types/user.type";
import user from "../models/user.model";

export default {
  async getUserByID(userID: number): Promise<User> {
    try {
      const data: User | null = await user.getUserByID(userID);
      if (data === null) {
        throw new Error('User not found');
      }
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
};
