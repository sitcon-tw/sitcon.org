import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="w-full border-t-2 border-primary">
      <div className="container flex items-center flex-col md:flex-row justify-center md:justify-between gap-2 py-4">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-8 -translate-y-1" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>關於</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 md:w-[400px] lg:w-[500px] gap-2">
                  <div className="col-span-1 bg-primary flex items-start justify-end flex-col p-2 pt-20 text-white rounded-sm">
                    關於 SITCON
                    <div className="opacity-50">關於 SITCON 的起源之類的</div>
                  </div>
                  <div className="col-span-2">
                    <ListItem to="/branding" title="使命">
                      SITCON 的使命是什麼？為什麼要辦 SITCON？
                    </ListItem>
                    <ListItem to="/branding" title="社群文化">
                      了解 SITCON 的社群文化，包含核心價值、行為準則與社群規範。
                    </ListItem>
                    <ListItem to="/branding" title="品牌使用規範">
                      SITCON 的品牌使用規範，包含 Logo、名稱、顏色與下載連結。
                    </ListItem>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>參與</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>活動</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>文章</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>資料</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>藝廊</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
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
      to={to}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </Link>
  );
};
