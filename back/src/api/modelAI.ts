import { AxiosInstance } from "axios";
import { chatGPTApi } from "./chatGPTApi";
import { cohereChatApi } from "./cohereChatApi";

const modelDictionary: Record<string, AxiosInstance> = {
  chatGPT: chatGPTApi,
  cohereChat: cohereChatApi,
};

export class ModelAI {
  private aiAPI: AxiosInstance;

  constructor(model: string) {
    const api = modelDictionary[model];

    if (!api) {
      throw new Error("Invalid model");
    }
    this.aiAPI = api;
  }

  public getAPI() {
    return this.aiAPI;
  }
}
