import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post as PostData } from "./posts.types";
import { Link } from "react-router";

export function Post({ post }: { post: PostData }) {
  return (
    <Card className="relative transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-base leading-6">
          <Link
            to={`/posts/${post.id}`}
            className="after:absolute after:inset-0 after:rounded-4xl after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardAction>
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            #{post.id}
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
}

export function PostRowSkeleton() {
  return (
    <Card aria-hidden="true">
      <CardHeader className="gap-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-12" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
}
