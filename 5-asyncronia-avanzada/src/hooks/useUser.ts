import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services";

export const useUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: UserService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: UserService.get,
  });

  return {
    user: {
      create: mutation.mutate,
      isCreateOK: mutation.isSuccess,
      data: userQuery.data,
      isLoading: userQuery.isLoading,
      isError: userQuery.isError,
    },
  };
};
