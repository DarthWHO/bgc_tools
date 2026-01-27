import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

export function useLocalStorage(key, defaultValue = null) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["localStorage", key],
    queryFn: () => getFromLocalStorage(key, defaultValue),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  // Mutation to update localStorage
  const mutation = useMutation({
    mutationFn: (newValue) => {
      saveToLocalStorage(key, newValue);
      return newValue;
    },
    onSuccess: (newValue) => {
      queryClient.setQueryData(["localStorage", key], newValue);
    },
  });

  // Mutation to remove from localStorage
  const removeMutation = useMutation({
    mutationFn: () => {
      removeFromLocalStorage(key);
      return defaultValue;
    },
    onSuccess: () => {
      queryClient.setQueryData(["localStorage", key], defaultValue);
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    setData: mutation.mutate,
    setDataAsync: mutation.mutateAsync,
    isUpdating: mutation.isPending,
    updateError: mutation.error,
    remove: removeMutation.mutate,
    removeAsync: removeMutation.mutateAsync,
    isRemoving: removeMutation.isPending,
  };
}
