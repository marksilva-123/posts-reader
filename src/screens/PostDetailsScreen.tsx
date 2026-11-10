import { isAxiosError } from "axios";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { readingColumnClassName, toParagraphs } from "@/lib/layout";

function PostDetailsSkeleton() {
  return (
    <div className={`${readingColumnClassName} space-y-8`} aria-hidden="true">
      <div className="space-y-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-5/6" />
        <Skeleton className="h-4 w-40" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export default function PostDetailsScreen() {
  const { postId } = useParams();
  const id = Number(postId);
  const { data, error, isPending, isError } = usePost(id);

  if (!Number.isInteger(id) || id < 1) {
    return (
      <p className="text-sm text-muted-foreground" role="status">
        That post ID is not valid.
      </p>
    );
  }

  if (isPending) {
    return (
      <div aria-label="Loading post" aria-live="polite">
        <span className="sr-only">Loading post…</span>
        <PostDetailsSkeleton />
      </div>
    );
  }

  if (isError) {
    const isMissingPost =
      isAxiosError(error) && error.response?.status === 404;

    return (
      <section className="py-12 text-center" role="alert">
        <p className="font-reading text-3xl font-medium tracking-tight">
          {isMissingPost ? "Post not found" : "We couldn’t load this post"}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {isMissingPost
            ? `There is no post with ID ${id}.`
            : "Please go back and try again."}
        </p>
      </section>
    );
  }

  if (!data) return null;

  const paragraphs = toParagraphs(data.body ?? "");

  return (
    <article className={readingColumnClassName}>
      <header className="mb-8 space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Post {data.id} <span aria-hidden="true">·</span> By user {data.userId}
        </p>
        <h1 className="font-reading text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
          {data.title}
        </h1>
      </header>
      <div className="space-y-6 font-reading text-lg leading-8 text-foreground/85">
        {paragraphs.map((paragraph, index) => (
          <p key={`${data.id}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
