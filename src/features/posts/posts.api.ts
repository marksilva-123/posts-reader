import api from "@/lib/api";
import type { Post } from "./posts.types";

export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get<Post[]>("/posts");
  return data;
}

export async function getPost(id: Post["id"]): Promise<Post> {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
}
