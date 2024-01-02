import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import AddItem from "./component/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
