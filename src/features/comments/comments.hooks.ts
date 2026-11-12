
import { useQuery } from "@tanstack/react-query";
import { getComments } from "./comments.api";

export function useComments(postId: number) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
    enabled: Number.isInteger(postId) && postId > 0,
  });
}
