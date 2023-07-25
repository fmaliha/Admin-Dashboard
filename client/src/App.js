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
import { propertyInputs, userInputs } from "./formSource";
import New from "./pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="single" element={<Single />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="properties">
              <Route index element={<List />} />
              <Route path=":propertyId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={propertyInputs} title="Add New Property" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
