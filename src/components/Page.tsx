import Header from "./Header.tsx";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
export default function Page({
  element,
  frontmatter,
}: {
  element: JSX.Element;
  frontmatter: {
    title: string;
    description: string;
    featured_image?: string;
    hide_header?: boolean;
    date?: string;
  };
}) {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("titleTemplate", { title: frontmatter.title })}</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      {!frontmatter.hide_header && <Header {...frontmatter} />}
      <div className="container">
        <div className="prose">{element}</div>
      </div>
    </>
  );
}
