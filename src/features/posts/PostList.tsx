import { Button } from "@/components/ui/button";
import { Post, PostRowSkeleton } from "./Post";
import { usePosts } from "./posts.hooks";

export function PostList() {
  const { data, error, isPending, isError, refetch, isFetching } = usePosts();

  if (isPending) {
    return (
      <div className="space-y-4" aria-label="Loading posts" aria-live="polite">
        <span className="sr-only">Loading posts…</span>
        {Array.from({ length: 5 }, (_, index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <section
        className="rounded-4xl border border-destructive/30 bg-destructive/5 p-6"
        role="alert"
      >
        <h2 className="font-medium">We couldn’t load the posts.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {error instanceof Error ? error.message : "Please try again."}
        </p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => void refetch()}
          disabled={isFetching}
        >
          {isFetching ? "Trying again…" : "Try again"}
        </Button>
      </section>
    );
  }

  if (!data.length) {
    return <p className="text-sm text-muted-foreground">Nothing published yet.</p>;
  }

  return (
    <div className="space-y-4">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
