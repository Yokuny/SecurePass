"use client";
import { CardBody } from "@nextui-org/react";
import CardList from "@/components/cards/looking/ListItem";

import { fakerItems } from "@/config/site";

export default function AboutPage() {
  return (
    <CardBody className="md:gap-3 gap-4">
      {fakerItems.map((item, index) => (
        <CardList key={index} item={item} />
      ))}
    </CardBody>
  );
}
