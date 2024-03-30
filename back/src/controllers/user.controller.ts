import { UserService } from "../services/user.service";
import { UserSimplified } from "../types/user";

export class UserController {
  #userService: UserService;

  constructor(userService: UserService) {
    this.#userService = userService;
  }

  public async createUser(user: UserSimplified) {
    const data = await this.#userService.create(user);
    return data;
  }

  public async getUsers() {
    const data = await this.#userService.get();
    return data;
  }
}
