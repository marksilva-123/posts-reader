import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./posts.api";
import type { Post } from "./posts.types";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}

export function usePost(id: Post["id"]) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: Number.isInteger(id) && id > 0,
  });
}
