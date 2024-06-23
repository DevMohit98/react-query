import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddSuperHero } from "../../api";
// add superhero
export const addSuperHeroMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => AddSuperHero(data),
    onSuccess: () => {
      queryClient.invalidateQueries("superHeroes");
    },
  });
};
