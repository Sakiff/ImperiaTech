import "./App.css";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
