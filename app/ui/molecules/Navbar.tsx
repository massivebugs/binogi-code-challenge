import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className="font-bold">
            Recipe Search App
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/bookmarks" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Bookmarked Recipes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
