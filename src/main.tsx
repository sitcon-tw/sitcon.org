import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./components/Page.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import "./index.css";
import "./i18n.ts";

const pages: Record<
  string,
  {
    default: () => JSX.Element;
    frontmatter: {
      title: string;
      description: string;
      featured_image?: string;
      hide_header?: boolean;
    };
  }
> = import.meta.glob("./content/**/*.mdx", { eager: true });

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
        const frontmatter = pages[path].frontmatter;
        return (
          <Route
            path={parsePath(path)}
            element={
              <Page element={<PageComponent />} frontmatter={frontmatter} />
            }
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
