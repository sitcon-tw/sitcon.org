import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import "./index.css";

const pages: Record<string, { default: () => JSX.Element }> = import.meta.glob(
  "./content/**/*.mdx",
  { eager: true }
);

function parsePath(path: string) {
  // "./content/**/*.mdx" -> "/**/*"
  // "./content/**/index.mdx" -> "/**/"
  return path
    .replace("./content", "")
    .replace(/\/index.mdx$/, "/")
    .replace(/\.mdx$/, "");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {Object.keys(pages).map((path: string) => {
        const PageComponent = pages[path].default; // Get the component function
        return (
          <Route
            path={parsePath(path)}
            element={<PageComponent />}
            key={path}
          />
        );
      })}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
