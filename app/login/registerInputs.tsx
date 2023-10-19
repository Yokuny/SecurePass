import { Input } from "@nextui-org/react";
import { useState } from "react";

type LoginInputsProps = {
  emailErr: boolean;
  passwordErr: boolean;
  emailValidation: (value: string) => boolean;
  passwordValidation: (value: string) => boolean;
  setName: (value: string) => void;
};

const LoginInputs = ({
  emailErr,
  passwordErr,
  emailValidation,
  passwordValidation,
  setName,
}: LoginInputsProps) => {
  const [nameErr, setNameErr] = useState(false);

  const nameValidation = (value: string) => {
    const nameRegex = RegExp(/^[a-z ,.'-]+$/i);
    if (nameRegex.test(value)) {
      setNameErr(false);
      setName(value);
      return true;
    } else {
      setNameErr(true);
      return false;
    }
  };

  return (
    <>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite seu nome"
        color={nameErr ? "danger" : "success"}
        errorMessage={nameErr && "Nome inválido"}
        variant="faded"
        onChange={(e) => nameValidation(e.target.value)}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Digite seu email"
        color={emailErr ? "danger" : "success"}
        errorMessage={emailErr && "Email inválido"}
        variant="faded"
        onChange={(e) => emailValidation(e.target.value)}
      />
      <Input
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        color={passwordErr ? "danger" : "success"}
        errorMessage={passwordErr && "Senha inválida"}
        variant="faded"
        onChange={(e) => passwordValidation(e.target.value)}
      />
    </>
  );
};

export default LoginInputs;
