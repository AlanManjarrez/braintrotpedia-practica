import { Routes, Route } from "react-router";
import HomePage from "./page/home-page";
import Detail from "./page/detail";
import Stats from "./page/stats";
import Layout from "./page/layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="detail" element={<Detail />} />
        <Route path="stats" element={<Stats />} />
      </Route>
    </Routes>
  );
};
export default App;
