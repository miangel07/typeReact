import { Dialog } from "primereact/dialog";
import { ReactNode } from "react";
type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Resgistrar Usuario"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={onClose}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default Modal;
