import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaFlickr,
  FaTelegramPlane,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPlurk } from "react-icons/si";
function parsePath(path: string) {
  const { i18n } = useTranslation();
  return `/${i18n.language}${path}`;
}
function FooterItems({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">{title}</div>
      {children}
    </div>
  );
}
function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        "rounded-full text-xl flex items-center justify-center",
        "text-black/50 hover:text-black/80 active:text-black",
        "transition-colors"
      )}
    >
      {children}
    </a>
  );
}
function FooterItem({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link
      to={parsePath(to)}
      className="hover:underline underline-offset-4 opacity-80 active:opacity-100 transition-opacity"
    >
      {children}
    </Link>
  );
}
export default function Footer() {
  return (
    <footer className="w-full bg-primary-100 mt-8">
      <div className="flex flex-col md:flex-row gap-6 lg:container">
        <div className="flex justify-center items-center text-center flex-col bg-primary text-white pt-5 pb-4 px-4 w-full md:w-[256px]">
          <img
            src="/logo-white.svg"
            alt="logo"
            className="h-8 -translate-y-1 leading-4 w-min"
          />
          <div className="font-bold mt-6">學生計算機年會 </div>
          <div className="text-sm opacity-75">
            Students' Information Technology Conference
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-6 p-6 lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 flex-grow">
            <FooterItems title="關於">
              <FooterItem to="/about">關於 SITCON</FooterItem>
              <FooterItem to="/about/mission">使命</FooterItem>
            </FooterItems>
            <FooterItems title="參與">
              <FooterItem to="/about">關於 SITCON</FooterItem>
              <FooterItem to="/about/mission">使命</FooterItem>
            </FooterItems>
            <FooterItems title="文章">
              <FooterItem to="/about">關於 SITCON</FooterItem>
              <FooterItem to="/about/mission">使命</FooterItem>
            </FooterItems>
            <FooterItems title="資料">
              <FooterItem to="/about">關於 SITCON</FooterItem>
              <FooterItem to="/about/mission">使命</FooterItem>
            </FooterItems>
            <FooterItems title="藝廊">
              <FooterItem to="/about">藝廊</FooterItem>
            </FooterItems>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <SocialLink href="https://sitcon.org/fb">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://sitcon.org/twitter">
              <FaXTwitter />
            </SocialLink>
            <SocialLink href="https://sitcon.org/yt">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="https://sitcon.org/instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://sitcon.org/flickr">
              <FaFlickr />
            </SocialLink>
            <SocialLink href="https://sitcon.org/tg">
              <FaTelegramPlane />
            </SocialLink>
            <SocialLink href="https://sitcon.org/plurk">
              <SiPlurk />
            </SocialLink>
            <SocialLink href="https://sitcon.org/medium">
              <FaMedium />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
