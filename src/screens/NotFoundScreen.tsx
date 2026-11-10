import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotFoundScreen() {
  const { pathname } = useLocation();

  return (
    <section className="py-16 text-center">
      <p className="font-reading text-6xl font-medium tracking-tight">404</p>
      <h1 className="mt-3 text-lg font-medium">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        There’s no page at <code className="rounded bg-muted px-1.5 py-0.5">{pathname}</code>.
      </p>
      <Button className="mt-6" variant="outline" render={<Link to="/" />}>
        Back to all posts
      </Button>
    </section>
  );
}
