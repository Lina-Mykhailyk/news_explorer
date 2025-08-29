import { useEffect } from "react";

export function useModalClose(isOpen, onClose, onExtraClose = () => {}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        if (document.activeElement) {
          document.activeElement.blur();
        }
        onExtraClose();
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen, onClose, onExtraClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onExtraClose();
      onClose();
    }
  };

  return handleOverlayClick;
}
