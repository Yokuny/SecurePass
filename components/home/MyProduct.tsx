import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { subtitle, title } from "../primitives";
const MyProduct = () => {
  return (
    <div className="py-10">
      <Card className="flex flex-col-reverse md:flex-row items-center justify-center p-4 md:gap-8 gap-4">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image alt="security" className="object-cover" height={400} width={400} src="/security.jpg" />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Tenha acesso</p>
            <Button className="text-tiny text-white" variant="shadow" color="success" radius="lg" size="sm">
              Entrar
            </Button>
          </CardFooter>
        </Card>

        <CardBody className="gap-4 md:max-w-xl">
          <h1 className={title({ size: "md" })}>Você pode ter segurança online</h1>
          <p className="text-lg">
            SecurePass é um armazenamento seguro de informações de login para diversos sites e serviços em um
            só lugar.
          </p>
          <p className="text-lg">
            É ideal para pessoas que possuem múltiplas contas em vários sites e redes sociais, cada uma com
            senhas distintas, e desejam armazená-las com segurança.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
export default MyProduct;
