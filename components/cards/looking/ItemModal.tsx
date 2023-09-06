import { Divider, ModalBody, ModalHeader } from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { title } from "@/components/primitives";
import { listItem } from "@/types";

type ItemProps = {
  item: listItem;
};

const ItemModal = ({ item }: ItemProps) => {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <h1 className={`${title({ color: "blue", size: "sm" })} py-1`}>{item.title}</h1>
      </ModalHeader>
      <Divider />
      <ModalBody className="py-6">
        <h6 className={title({ color: "violet", size: "small" })}>URL</h6>
        <p>
          <Snippet hideSymbol>{item.url}</Snippet>
        </p>
        <h6 className={title({ color: "violet", size: "small" })}>USER</h6>
        <p>
          <Snippet hideSymbol>{item.user}</Snippet>
        </p>
        <h6 className={title({ color: "violet", size: "small" })}>SENHA</h6>
        <p>
          <Snippet hideSymbol>{item.password}</Snippet>
        </p>
      </ModalBody>
      <Divider />
    </>
  );
};
export default ItemModal;
