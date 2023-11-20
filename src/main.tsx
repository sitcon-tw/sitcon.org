import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import "./index.css";
import { Helmet } from "react-helmet";

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
        const { title, description, hide_header } = frontmatter;
        return (
          <Route
            path={parsePath(path)}
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>{title}</title>
                  <meta name="description" content={description} />
                </Helmet>
                {!hide_header && <Header {...frontmatter} />}
                <div className="container">
                  <div className="prose">
                    <PageComponent />
                  </div>
                </div>
              </>
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
