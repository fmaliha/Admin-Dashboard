import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/single";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="single" element={<Single />} />
            <Route path="/users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
