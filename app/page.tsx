"use client";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

import { Card, CardBody, Button } from "@nextui-org/react";
import CardTitle from "@/components/CardTitle";
import CardList from "@/components/CardList";

import { fakerItems } from "@/config/site";

export default function Home() {
  const router = useRouter();

  async function handleLogin() {
    Cookie.set("auth_token", "zzzz");
    router.push("/security");
  }

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
      <Card>
        <CardTitle />
        <CardBody className="md:gap-3 gap-4">
          {fakerItems.map((item, index) => (
            <CardList key={index} item={item} />
          ))}
        </CardBody>
      </Card>
    </>
  );
}

