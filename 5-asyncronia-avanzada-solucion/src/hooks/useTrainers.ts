import { TrainerService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useTrainers = () => {
  const trainersQuery = useQuery({
    queryKey: ["trainers", "list"],
    queryFn: TrainerService.getAll,
    staleTime: Infinity,
  });

  return {
    trainers: {
      data: trainersQuery.data,
      isLoading: trainersQuery.isLoading,
      isError: trainersQuery.isError,
    },
  };
};
