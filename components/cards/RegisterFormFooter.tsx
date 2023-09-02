import { ModalFooter, Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { ConfirmIcon, CloseIcon } from "../icons";
import RegisterFormModalBody from "./RegisterFormModalBody";

const RegisterFormFooter = ({ onClose }: { onClose: () => void }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ModalFooter>
      <Button color="danger" variant="light" onPress={onClose}>
        <CloseIcon />
      </Button>
      <Button color="success" onClick={onOpen}>
        <ConfirmIcon className="dark:text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onConfirm) => (
            <>
              <RegisterFormModalBody />
              <ModalFooter>
                <Button
                  color="success"
                  onClick={() => {
                    onClose();
                    onConfirm();
                  }}>
                  <ConfirmIcon className="dark:text-white" />
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
