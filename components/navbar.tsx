import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";

import Logo from "./navbar-Logo";
import Tabs from "./navbar-Tabs";
import Menu from "./navbar-Menu";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <Logo />
        <Tabs />
      </NavbarContent>
      <Menu />
    </NextUINavbar>
  );
};
