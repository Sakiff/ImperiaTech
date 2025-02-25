import "./App.css";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <>
      {/* Arxaplandaki sol üstdəki səkil */}
      <div className="absolute top-0 left-0 z-[-1]">
        <img src="./images/Group.png" />
      </div>

      {/* Routes */}
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
