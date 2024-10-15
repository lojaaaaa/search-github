import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

const router = createRouter();

export const App = () => <RouterProvider router={router} />;