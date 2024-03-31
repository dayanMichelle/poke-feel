import { DEFAULT_TRAINER } from "@/data";

export const useTrainers = () => {
  return {
    trainers: {
      data: [DEFAULT_TRAINER],
      isLoading: false,
      isError: false,
    },
  };
};
