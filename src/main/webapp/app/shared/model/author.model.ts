import { IBook } from 'app/shared/model/book.model';

export interface IAuthor {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  book?: IBook | null;
}

export const defaultValue: Readonly<IAuthor> = {};
