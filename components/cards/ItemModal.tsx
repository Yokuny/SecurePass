import { Divider, ModalBody } from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { title } from "@/components/primitives";
import { listItem } from "@/types";

const ItemModal = ({ item }: { item: listItem }) => {
  return (
    <>
      <Divider />
      <ModalBody className="py-6">
        <h6 className={title({ color: "violet", size: "small" })}>URL</h6>
        <p>
          <Snippet hideSymbol>{item.url}</Snippet>
        </p>
        <Divider />
        <h6 className={title({ color: "violet", size: "small" })}>USER</h6>
        <p>
          <Snippet hideSymbol>{item.user}</Snippet>
        </p>
        <Divider />
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
