import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

const DesktopMenu = () => {
  return (
    <>
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href="https://linkedin.com/in/yokuny/" aria-label="Linkedin">
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal href="https://github.com/Yokuny" aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </>
  );
};
export default DesktopMenu;
