import db from '../config/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { User } from '../types/user.type';

export default {
  async getUserByID(id: number): Promise<User | null> {
    try {
      const query = `
        SELECT * FROM Users WHERE id = ?
      `;

      const [rows]: [RowDataPacket[], FieldPacket[]] = await db.query(query, [id]);

      // Check if a user was found
      if (rows.length > 0) {
        return rows[0] as User;
      } else {
        return null;
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },
}
