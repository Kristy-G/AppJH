import { IBook } from 'app/shared/model/book.model';

export interface IGenre {
  id?: number;
  name?: string | null;
  books?: IBook[] | null;
}

export const defaultValue: Readonly<IGenre> = {};
