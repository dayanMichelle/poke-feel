import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FeelingService } from "@/services";

export const useFeeling = () => {
  const queryClient = useQueryClient();

  const feelingMutation = useMutation({
    mutationFn: FeelingService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get", "feeling"] });
    },
  });

  const feelingQuery = useQuery({
    queryKey: ["get", "feeling"],
    queryFn: FeelingService.getAll,
  });

  return {
    feeling: {
      create: feelingMutation.mutate,
      isCreateOK: feelingMutation.isSuccess,
      isCreatePending: feelingMutation.isPending,
      pokemonData: feelingMutation.data,
      data: feelingQuery.data,
      isLoading: feelingQuery.isLoading,
    },
  };
};
