"use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Cookie from "js-cookie";
import { CardBody } from "@nextui-org/react";

import CardList from "@/components/cards/looking/ListItem";

import { fakerItems } from "@/config/site"; //

export default function WifiPage() {
  // const API = process.env.NEXT_PUBLIC_API;

  return (
    <CardBody className="md:gap-3 gap-4">
      {fakerItems?.length === 0 ? (
        <div className="h-full flex items-center justify-center w-full">
          <h1 className="w-2/4 text-center">Comece adicionando um novo item!</h1>
        </div>
      ) : (
        <>
          {fakerItems?.map((item, index) => (
            <CardList key={index} item={item} id={index} />
          ))}
        </>
      )}
    </CardBody>
  );
}
