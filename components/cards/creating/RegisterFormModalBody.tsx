import { ModalHeader, ModalBody, Divider } from "@nextui-org/react";
import { title, subtitle } from "../../primitives";

const RegisterFormModalBody = () => {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <h1 className={`${title({ color: "green", size: "sm" })} py-1`}>Registrado</h1>
      </ModalHeader>
      <Divider />
      <ModalBody className="py-6">
        <p className={`${subtitle()} py-1`}>O registro foi salvo com sucesso.</p>
      </ModalBody>
    </>
  );
};
export default RegisterFormModalBody;
