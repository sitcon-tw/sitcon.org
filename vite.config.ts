import { defineConfig } from "vite";
import seoPrerender from "vite-plugin-seo-prerender";
import { globSync } from "glob";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
function parsePath(path: string) {
  // "./content/**/*.mdx" -> "/**/*"
  // "./content/**/index.mdx" -> "/**/"
  return path
    .replace("src/content", "")
    .replace(/\/index.mdx$/, "/")
    .replace(/\.mdx$/, "");
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    react(),
    seoPrerender({
      routes: globSync("./src/content/**/*.mdx").map(parsePath),
    }),
  ],
});
