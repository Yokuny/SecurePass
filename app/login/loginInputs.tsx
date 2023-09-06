import { Input } from "@nextui-org/react";

type LoginInputsProps = {
  emailErr: boolean;
  passwordErr: boolean;
  emailValidation: (value: string) => boolean;
  passwordValidation: (value: string) => boolean;
};

const LoginInputs = ({ emailErr, passwordErr, emailValidation, passwordValidation }: LoginInputsProps) => {
  return (
    <>
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
