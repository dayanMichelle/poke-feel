import path from "path";
import { persistJSON, readJSONFromFile } from "../utils/json";
import { Repository } from "../types/repository";

export class JSONRepository implements Repository {
  private FILE_NAME;
  private DIRECTORY;

  constructor({ fileName = "user_feelings.json", directory = "./src/data" }) {
    this.FILE_NAME = fileName;
    this.DIRECTORY = directory;
  }

  public async create<T>(element: T): Promise<T> {
    persistJSON(this.getFilePath(), element);
    return element;
  }

  public async add<T>(element: T): Promise<void> {
    const elements = await this.getAll<T>();
    elements.push(element);
    persistJSON(this.getFilePath(), elements);
  }

  public async getAll<T>(): Promise<T[]> {
    return await readJSONFromFile(this.getFilePath(), []);
  }

  public async get<T>(): Promise<T> {
    return await readJSONFromFile(this.getFilePath(), {});
  }

  public async deleteMany(): Promise<void> {
    persistJSON(this.getFilePath(), []);
  }

  public async deleteOne<T extends { id: string }>(id: string): Promise<void> {
    const elements = await this.getAll<T>();
    const filterElements = elements.filter((element) => element?.id !== id);
    persistJSON(this.getFilePath(), filterElements);
  }

  private getFilePath(): string {
    return path.join(this.DIRECTORY, this.FILE_NAME);
  }

  async getByName<T>(_name: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
