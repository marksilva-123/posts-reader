import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "@/components/layout";

const HomeScreen = lazy(() => import("@/screens/HomeScreen"));
const PostDetailsScreen = lazy(() => import("@/screens/PostDetailsScreen"));
const NotFoundScreen = lazy(() => import("@/screens/NotFoundScreen"));

function RouteLoading() {
  return (
    <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
      Loading page…
    </p>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<RouteLoading />}>
              <HomeScreen />
            </Suspense>
          }
        />
        <Route
          path="posts/:postId"
          element={
            <Suspense fallback={<RouteLoading />}>
              <PostDetailsScreen />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteLoading />}>
              <NotFoundScreen />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
