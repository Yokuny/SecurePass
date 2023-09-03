import { CardFooter, Modal, ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import { title } from "@/components/primitives";
import RegisterForm from "./RegisterForm";
import RegisterFormFooter from "./RegisterFormFooter";

const ListFooterOptions = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <Button
        onClick={onOpen}
        className="text-white font-semibold sm:w-16 md:w-20"
        variant="shadow"
        color="success"
        size="md">
        +
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className={`${title({ color: "blue", size: "sm" })} py-1`}>Cadastro</h1>
              </ModalHeader>
              <RegisterForm />
              <RegisterFormFooter onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </CardFooter>
  );
};
export default ListFooterOptions;
