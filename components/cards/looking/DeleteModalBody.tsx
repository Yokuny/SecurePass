import { ModalHeader, ModalBody, Divider } from "@nextui-org/react";
import { title, subtitle } from "../../primitives";

const DeleteModalBody = () => {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <h1 className={`${title({ color: "blue", size: "sm" })} py-1`}>Apagar registro</h1>
      </ModalHeader>
      <Divider />
      <ModalBody className="py-6">
        <p className={`${subtitle()} py-1`}>Essa ação não pode ser desfeita</p>
      </ModalBody>
    </>
  );
};
export default DeleteModalBody;
