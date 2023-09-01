import { NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import clsx from "clsx";

import { link as linkStyles } from "@nextui-org/theme";
import { RoutesType } from "@/types";

const Tabs = ({ routes }: { routes: RoutesType[] }) => {
  const path = usePathname();
  return (
    <ul className="hidden sm:flex gap-3 md:gap-4 justify-start ml-2">
      {routes.map((item) => (
        <NavbarItem key={item.href} isActive={item.href === path}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}>
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
};
export default Tabs;
