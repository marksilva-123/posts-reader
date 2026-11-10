import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <header className="flex items-center justify-between gap-5">
          {isHome ? (
            <span className="text-lg font-medium tracking-[-0.01em]">Posts</span>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              All posts
            </Link>
          )}
          <ModeToggle />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
