import { Divider, ModalBody } from "@nextui-org/react";
import { Input } from "@nextui-org/input";

const RegisterForm = () => {
  //Realizar validação
  return (
    <>
      <Divider />
      <ModalBody className="py-6 gap-4">
        <Input label="Título" size="lg" isRequired />
        <Input label="URL" size="lg" isRequired />
        <Input label="Usuário" size="lg" isRequired />
        <Input label="Senha" size="lg" isRequired />
      </ModalBody>
      <Divider />
    </>
  );
};
export default RegisterForm;
