import { Link, useLocation } from "react-router-dom";
export default function Posts() {
  const { pathname } = useLocation();
  // /<lang>/posts/<type>
  const currentPath =
    "/src/content" + pathname.split("/").slice(0, 4).join("/");
  let postData: Record<
    string,
    {
      default: () => JSX.Element;
      frontmatter: {
        title: string;
        description: string;
        featured_image?: string;
        hide_header?: boolean;
        date?: string;
      };
    }
  > = import.meta.glob(`/src/content/*/posts/*/**/*.mdx`, {
    eager: true,
  });
  const filteredPostData = Object.entries(postData)
    .filter(([path, _]) => path.startsWith(currentPath))
    .sort(
      (a, b) =>
        new Date(b[1].frontmatter.date!).getTime() -
        new Date(a[1].frontmatter.date!).getTime()
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPostData.map(([path, { frontmatter }]) => (
          <Link
            className="border-primary-100 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors p-4 rounded-md no-underline font-normal flex flex-col"
            to={path.replace("/src/content", "").replace(".mdx", "")}
          >
            {frontmatter.featured_image && (
              <img
                className="w-full rounded-sm mt-0 mb-2"
                src={frontmatter.featured_image}
                alt={frontmatter.title}
              />
            )}
            <div className="font-bold">{frontmatter.title}</div>
            <div>{frontmatter.description}</div>
            <div className="flex-grow"></div>
            <div className="opacity-50 text-sm">
              {new Date(frontmatter.date!).toLocaleString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
