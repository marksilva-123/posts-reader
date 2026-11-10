import { PostList } from "@/features/posts/PostList";

export default function HomeScreen() {
  return (
    <>
      <h1 className="sr-only">All posts</h1>
      <PostList />
    </>
  );
}
