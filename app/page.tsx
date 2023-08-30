"use client";
import { Card, CardBody } from "@nextui-org/react";
import CardTitle from "@/components/CardTitle";
import CardList from "@/components/CardList";

import { fakerItems } from "@/config/site";

export default function Home() {
  return (
    <Card>
      <CardTitle />
      <CardBody className="md:gap-3 gap-4">
        {fakerItems.map((item, index) => (
          <CardList key={index} item={item} />
        ))}
      </CardBody>
    </Card>
  );
}
