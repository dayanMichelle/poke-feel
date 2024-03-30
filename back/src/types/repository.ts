export type Repository = {
  create<T>(element: T): Promise<T>;
  add<T>(element: T): Promise<void>;
  getAll<T>(): Promise<T[]>;
  get<T>(): Promise<T>;
  getByName<T>(name: string): Promise<T>;
  deleteMany(): Promise<void>;
  deleteOne<_T>(id: string): Promise<void>;
  [key: string]: any;
};
