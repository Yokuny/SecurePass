"use client";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

import { Card, CardBody, Button } from "@nextui-org/react";
import CardTitle from "@/components/CardTitle";
import CardList from "@/components/CardList";

import { fakerItems } from "@/config/site";

export default function AboutPage() {
  const router = useRouter();

  async function handleLogout() {
    Cookie.remove("auth_token");
    router.push("/");
  }
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
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
