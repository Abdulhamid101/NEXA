import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import FeaturesPage from "./pages/Features/Features.jsx";
import ToolsPage from "./pages/Tools/Tools.jsx";
import SecurityPage from "./pages/Security/Security.jsx";
import DocsPage from "./pages/Docs/Docs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "features", element: <FeaturesPage /> },
      { path: "tools", element: <ToolsPage /> },
      { path: "security", element: <SecurityPage /> },
      { path: "docs", element: <DocsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
