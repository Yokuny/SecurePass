import { ModalFooter, Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { ConfirmIcon, CloseIcon } from "../../icons";
import RegisterFormModalBody from "./RegisterFormModalBody";

type RegisterProps = {
  onClose: () => void;
};

const RegisterFormFooter = ({ onClose }: RegisterProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ModalFooter>
      <Button color="danger" onPress={onClose}>
        <CloseIcon />
      </Button>
      <Button color="success" onClick={onOpen}>
        <ConfirmIcon className="text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <RegisterFormModalBody />
              <ModalFooter>
                <Button
                  color="success"
                  onClick={() => {
                    // TODO: criar realmente o registro
                    onClose();
                  }}>
                  <ConfirmIcon className="text-white" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </ModalFooter>
  );
};
export default RegisterFormFooter;
