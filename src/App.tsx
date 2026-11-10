import { Route, Routes } from "react-router";
import Layout from "@/components/layout";
import HomeScreen from "@/screens/HomeScreen";
import PostDetailsScreen from "@/screens/PostDetailsScreen";
import NotFoundScreen from "@/screens/NotFoundScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="posts/:postId" element={<PostDetailsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
