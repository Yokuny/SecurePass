"use client";
import { CardHeader, Divider } from "@nextui-org/react";
import TitleInfo from "../CardTitle";
import LogoutBtn from "../CardLogout";

const ListTitle = () => {
  return (
    <>
      <CardHeader className="flex justify-between">
        <div className="flex gap-3">
          <TitleInfo />
        </div>
        <div className="sm:px-4">
          <LogoutBtn />
        </div>
      </CardHeader>
      <Divider />
    </>
  );
};
export default ListTitle;
