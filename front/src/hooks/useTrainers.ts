import { useQuery } from "@tanstack/react-query";
import { TrainerService } from "@/services";

export const useTrainers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trainers"],
    queryFn: TrainerService.getAll,
    staleTime: Infinity,
  });

  return {
    trainers: {
      data,
      isLoading,
      isError,
    },
  };
};
