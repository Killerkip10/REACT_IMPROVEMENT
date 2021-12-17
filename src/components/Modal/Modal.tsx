import { ElementType, ReactNode, useState, useCallback } from 'react';

import './Modas.scss';

interface IModalProps {
  children: ReactNode;
}

function Modal({ children }: IModalProps) {
  return (
    <div className="modal">
      <div>
        {children}
      </div>
    </div>
  );
}

export interface IModal {
  onOpenModal: (data?: object) => void;
  onCloseModal: () => void;
}

export const modal = (WrappedComponent: ElementType, ModalComponent: ElementType) => ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = useCallback((data) => {
    setModalData(data);
    setIsOpen(true);
  }, [setIsOpen, setModalData]);

  const handleCloseModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <WrappedComponent {...props} onOpenModal={handleOpenModal} onCloseModal={handleCloseModal} />

      {isOpen &&
        <Modal>
          <ModalComponent {...modalData} onCloseModal={handleCloseModal} />
        </Modal>
      }
    </>
  );
}
