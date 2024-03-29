export interface CRUD {
  insertOne: (resource: unknown) => Promise<unknown>;
  findOne: (id: number) => Promise<unknown>;
  getAll: (sorted?: boolean, limit?: number, page?: number) => Promise<unknown>;
  updateOne: (id: number, resource: unknown) => Promise<unknown>;
  removeOne: (id: number) => void;
}
