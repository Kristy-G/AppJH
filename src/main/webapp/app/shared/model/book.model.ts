import { IAuthor } from 'app/shared/model/author.model';
import { IGenre } from 'app/shared/model/genre.model';

export interface IBook {
  id?: number;
  name?: string | null;
  description?: string | null;
  author?: string | null;
  genre?: string | null;
  authors?: IAuthor[] | null;
  genres?: IGenre[] | null;
}

export const defaultValue: Readonly<IBook> = {};
