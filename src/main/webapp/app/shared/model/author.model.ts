export interface IAuthor {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
}

export const defaultValue: Readonly<IAuthor> = {};
