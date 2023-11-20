import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LuLanguages } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
function LanguageSwitchButton() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  function toggleLanguage() {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en-US" ? "zh-TW" : "en-US";
    i18n.changeLanguage(nextLanguage);
    navigate(location.pathname.replace(currentLanguage, nextLanguage));
  }
  return (
    <Button
      className="bg-transparent hover:bg-gray-100 active:bg-gray-200 text-black"
      size="icon"
      onClick={() => toggleLanguage()}
    >
      <LuLanguages />
    </Button>
  );
}
export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="w-full border-t-2 border-primary">
      <div className="container flex items-center flex-col md:flex-row justify-center gap-2 py-4">
        <div className="flex justify-between w-full">
          <Link to="/">
            <img src="/logo.svg" alt="logo" className="h-8 -translate-y-1" />
          </Link>

          <div className="md:hidden">
            <LanguageSwitchButton />
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("about")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 md:w-[400px] lg:w-[500px] gap-2">
                  <div className="col-span-1 bg-primary flex items-start justify-end flex-col p-2 pt-20 text-white rounded-sm text-sm">
                    關於 SITCON
                    <div className="opacity-50">關於 SITCON 的起源之類的</div>
                  </div>
                  <div className="col-span-2">
                    <ListItem to="/branding" title="使命">
                      了解 SITCON 的價值觀與創新嘗試。
                    </ListItem>
                    <ListItem to="/branding" title="社群文化">
                      了解 SITCON 的社群文化，包含核心價值、行為準則與社群規範。
                    </ListItem>
                    <ListItem to="/about/branding" title="品牌使用規範">
                      SITCON 的品牌使用規範，包含 Logo、名稱、顏色與下載連結。
                    </ListItem>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>參與</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 md:w-[400px] lg:w-[500px] gap-2">
                  <Link
                    className="col-span-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-start justify-end flex-col p-2 pt-20 rounded-sm text-sm"
                    to={parsePath("/engage/events")}
                  >
                    活動
                    <div className="opacity-50">認識 SITCON 舉辦的活動</div>
                  </Link>
                  <div className="col-span-2">
                    <ListItem to="/engage/participate" title="參與社群">
                      如果你想要參與 SITCON，無論大小活動，都可以從這裡開始。
                    </ListItem>
                    <ListItem to="/engage/code-of-conduct" title="行為準則">
                      我們制定了行為準則，以維護 SITCON 的社群文化。
                    </ListItem>
                    <ListItem
                      to="/engage/floss-community-list"
                      title="開放社群推廣目錄"
                    >
                      如果你在尋找開放社群，這裡準沒錯。
                    </ListItem>
                    <ListItem to="/engage/donate" title="小額捐助">
                      透過小額捐助支持 SITCON
                    </ListItem>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>文章</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px]">
                  <ListItem to="/branding" title="最新消息">
                    SITCON 的最新消息，包含活動、公告與其他相關資訊。
                  </ListItem>
                  <ListItem to="/branding" title="部落格">
                    SITCON 的部落格，包含活動、公告與其他相關資訊。
                  </ListItem>
                  <ListItem to="/branding" title="新聞稿">
                    查看 SITCON 釋出的新聞稿。
                  </ListItem>
                  <ListItem to="/branding" title="媒體報導">
                    查看過往媒體報導 SITCON 的相關文章。
                  </ListItem>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>資料</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px]">
                  <ListItem to="/data/financial-report" title="公開財報">
                    查看 SITCON 公開的財務資訊
                  </ListItem>
                  <ListItem to="/data/records" title="討論紀錄">
                    包含年會、Camp 與其他活動的討論紀錄。
                  </ListItem>
                  <ListItem to="/data/media-asset" title="照片媒體素材包">
                    如果你想要使用 SITCON 的照片，可以在這裡找到。
                  </ListItem>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  藝廊
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden md:block">
          <LanguageSwitchButton />
        </div>
      </div>
    </nav>
  );
}
function parsePath(path: string) {
  const { i18n } = useTranslation();
  return `/${i18n.language}${path}`;
}
const ListItem = ({
  className,
  title,
  children,
  to,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      to={parsePath(to)}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  );
};
