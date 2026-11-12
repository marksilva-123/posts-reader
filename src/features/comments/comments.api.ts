
import api from "@/lib/api";
import type { Comment } from "./comments.types";

export async function getComments(
  postId: number,
): Promise<Comment[]> {
  const { data } = await api.get<Comment[]>(
    `/posts/${postId}/comments`,
  );

  return data;
}
