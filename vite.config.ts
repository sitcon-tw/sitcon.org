import { defineConfig } from "vite";
import seoPrerender from "vite-plugin-seo-prerender";
import remarkGfm from "remark-gfm";
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
  resolve: {
    alias: {
      "@/": "/src/",
    },
  },
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    }),
    react(),
    seoPrerender({
      routes: globSync("./src/content/**/*.mdx").map(parsePath),
      callback(html, route) {
        const gtm = [
          `<!-- Google Tag Manager -->`,
          `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':`,
          `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],`,
          `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=`,
          `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);`,
          `})(window,document,'script','dataLayer','GTM-NPVBCDZ');</script>`,
          `<!-- End Google Tag Manager -->`,
        ].join("\n");

        return html.replace("</body>", `${gtm}</body>`);
      },
    }),
  ],
});
