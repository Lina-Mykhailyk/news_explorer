import "./ModalWithForm.css";
import { useModalClose } from "../../hooks/useModalClose";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

function ModalWithForm({
  name,
  title,
  btnText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isSubmitDisabled,
  altText,
  altLinkText,
  onAltLinkClick,
}) {
  useBodyScrollLock(isOpen);
  const handleOverlayClick = useModalClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          aria-label="Close modal"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit} noValidate>
          {children}
          <button
            type="submit"
            className={`modal__submit-btn ${
              isSubmitDisabled ? "modal__submit-btn_disabled" : ""
            }`}
            disabled={isSubmitDisabled}
          >
            {btnText}
          </button>
        </form>
        {altText && (
          <p className="modal__alt-text">
            {altText}{" "}
            <button
              type="button"
              className="modal__alt-link"
              onClick={onAltLinkClick}
            >
              {altLinkText}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default ModalWithForm;
