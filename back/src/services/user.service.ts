import { Pokemon } from "../types/pokemon";
import { Repository } from "../types/repository";
import { Trainer } from "../types/trainer";
import { User, UserSimplified } from "../types/user";

export class UserService {
  #userRepository: Repository;
  #pokemonRepository: Repository;
  #trainerRepository: Repository;

  constructor(
    userRepository: Repository,
    pokemonRepository: Repository,
    trainerRepository: Repository
  ) {
    this.#userRepository = userRepository;
    this.#pokemonRepository = pokemonRepository;
    this.#trainerRepository = trainerRepository;
  }

  async create(user: UserSimplified) {
    const pokemon = await this.#pokemonRepository.getByName<Pokemon>(
      user.pokemon
    );
    const trainer = await this.#trainerRepository.getByName<Trainer>(
      user.trainer
    );

    const userCreate = await this.#userRepository.create<User>({
      ...user,
      pokemon,
      trainer,
    });
    return userCreate;
  }

  async get() {
    const user = await this.#userRepository.get<User>();
    return user;
  }
}
