import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

import { NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { LinkedinIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { RoutesType } from "@/types";

const Menu = ({ routes, loggedIn }: { routes: RoutesType[]; loggedIn: boolean }) => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookie.remove("auth_token");
    router.push("/");
  };
  const handleLogin = async () => {
    router.push("/login");
  };

  return (
    <>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href="https://linkedin.com/in/yokuny/" aria-label="Github">
          <LinkedinIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="flex justify-between py-6">
        <div className="mx-4 mt-2 flex flex-col justify-between gap-2">
          {routes.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 1 ? "success" : index === 2 ? "primary" : "foreground"}
                href={item.href}
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>

        {loggedIn ? (
          <Button className="mx-4 mt-2" color="primary" onClick={handleLogout}>
            Sair
          </Button>
        ) : (
          <Button className="mx-4 mt-2" color="success" onClick={handleLogin}>
            Entrar
          </Button>
        )}
      </NavbarMenu>
    </>
  );
};
export default Menu;
