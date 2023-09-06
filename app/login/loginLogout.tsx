import Cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import LoginInputs from "./loginInputs";

const LoginLogout = () => {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API;

  const [selected, setSelected] = useState("Entrar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  async function handleSignin() {
    if (!emailValidation(email) || !passwordValidation(password)) return;
    try {
      const res = await axios.post(`${API}users/sign-in`, { email, password });
      Cookie.set("auth_token", res.data.token);
      router.push("/security");
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
    }
  }
  async function handleSignup() {
    if (!emailValidation(email) || !passwordValidation(password)) return;
    try {
      await axios.post(`${API}users/sign-up`, { email, password });
      alert("Usuário criado com sucesso!");
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
    }
  }
  // data validation
  const emailValidation = (value: string) => {
    const emailRegex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    if (emailRegex.test(value)) {
      setEmail(value);
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };
  const passwordValidation = (value: string) => {
    const passwordRegex = RegExp(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    if (passwordRegex.test(value)) {
      setPassword(value);
      setPasswordError(false);
      return true;
    } else {
      setPasswordError(true);
      return false;
    }
  };
  // tab selection
  const handleTabSelectionChange = (key: string | number) => {
    setSelected(key as string);
  };

  return (
    <Card className="max-w-full w-[340px]">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={handleTabSelectionChange}>
          <Tab key="Entrar" title="Entrar">
            <form className="flex flex-col gap-4">
              <LoginInputs
                emailErr={emailError}
                passwordErr={passwordError}
                emailValidation={emailValidation}
                passwordValidation={passwordValidation}
              />
              <p className="text-center text-small">
                Precisar criar conta?{" "}
                <Link size="sm" className="cursor-pointer" onPress={() => setSelected("Registre")}>
                  Cadastrar
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={handleSignin}>
                  Entrar
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="Registre" title="Registre">
            <form className="flex flex-col gap-4">
              <LoginInputs
                emailErr={emailError}
                passwordErr={passwordError}
                emailValidation={emailValidation}
                passwordValidation={passwordValidation}
              />
              <p className="text-center text-small">
                Já possui conta?{" "}
                <Link size="sm" className="cursor-pointer" onPress={() => setSelected("Entrar")}>
                  Entrar
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={handleSignup}>
                  Registre
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};
export default LoginLogout;
