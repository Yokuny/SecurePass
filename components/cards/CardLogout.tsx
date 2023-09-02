import Cookie from "js-cookie";
import { Button } from "@nextui-org/react";
import { LogOutIcon } from "../icons";

const LogoutBtn = () => {
  const handleLogout = async () => {
    Cookie.remove("auth_token");
    window.location.href = "/";
  };

  return (
    <Button color="primary" isIconOnly variant="shadow" className="sm:w-16 md:w-20" onClick={handleLogout}>
      <LogOutIcon />
    </Button>
  );
};
export default LogoutBtn;
