"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardBody } from "@nextui-org/react";
import { bearerToken } from "@/utils/bearerToken";

import CardList from "@/components/cards/looking/ListItem";

export default function CardsPage() {
  const API = process.env.NEXT_PUBLIC_API;
  const [cards, setCards] = useState([]);
  const requestString = `${API}cards`;

  useEffect(() => {
    const getCards = async () => {
      try {
        const cards = await axios.get(requestString, bearerToken);

        setCards(cards.data);
      } catch (err) {
        alert("err");
      }
    };

    getCards();
  }, []);

  return (
    <>
      <CardBody className="md:gap-3 gap-4">
        {cards?.length === 0 ? (
          <div className="h-full flex items-center justify-center w-full">
            <h1 className="w-2/4 text-center">Comece adicionando um novo item!</h1>
          </div>
        ) : (
          <>
            {cards?.map((item, index) => (
              <CardList key={index} item={item} id={index} requestString={requestString} />
            ))}
          </>
        )}
      </CardBody>
    </>
  );
}
