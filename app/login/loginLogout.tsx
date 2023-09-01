import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";

const LoginLogout = () => {
  const [selected, setSelected] = useState("login");
  const router = useRouter();

  async function handleLogin() {
    Cookie.set("auth_token", "zzzz");
    router.push("/security");
  }

  return (
    <Card className="max-w-full w-[340px]">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}>
          <Tab key="login" title="Entrar">
            <form className="flex flex-col gap-4">
              <Input isRequired label="Email" placeholder="Digite seu email" type="email" />
              <Input isRequired label="Senha" placeholder="Digite sua senha" type="password" />
              <p className="text-center text-small">
                Precisar criar conta?{" "}
                <Link size="sm" className="cursor-pointer" onPress={() => setSelected("sign-up")}>
                  Cadastrar
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={handleLogin}>
                  Entrar
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Registre">
            <form className="flex flex-col gap-4 h-[300px]">
              <Input isRequired label="Nome" placeholder="Digite seu nome" type="password" />
              <Input isRequired label="Email" placeholder="Digite seu email" type="email" />
              <Input isRequired label="Senha" placeholder="Digite sua senha" type="password" />
              <p className="text-center text-small">
                Já possui conta?{" "}
                <Link size="sm" className="cursor-pointer" onPress={() => setSelected("login")}>
                  Entrar
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
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
