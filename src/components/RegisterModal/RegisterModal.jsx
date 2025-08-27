import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useModalClose } from "../../hooks/useModalClose";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  onSwitchToLogin,
  serverError,
}) {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isValid,
    resetForm,
  } = useForm({ email: "", password: "", username: "" });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleOverlayClick = useModalClose(isOpen, onClose, () =>
    setIsSuccess(false)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values)
      .then(() => {
        setIsSuccess(true);
        resetForm();
      })
      .catch(() => {
        // serverError is displayed via prop
      });
  };

  const handleSwitchToLogin = () => {
    setIsSuccess(false);
    onSwitchToLogin();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal modal_type_register ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-btn"
          aria-label="Close modal"
          onClick={() => {
            setIsSuccess(false);
            onClose();
          }}
        />

        {isSuccess ? (
          <div className="modal__success">
            <h2 className="modal__title">
              Registration successfully completed!
            </h2>
            <button
              type="button"
              className="modal__alt-link modal__alt-link_success"
              onClick={handleSwitchToLogin}
            >
              Sign in
            </button>
          </div>
        ) : (
          <>
            <h2 className="modal__title">Sign up</h2>

            <form className="modal__form" onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <label className="modal__label" htmlFor="register-email">
                Email
                <input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={`modal__input ${
                    errors.email && touched.email
                      ? "modal__input_type_error"
                      : ""
                  }`}
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.email && errors.email && (
                  <span id="register-email-error" className="modal__error">
                    {errors.email}
                  </span>
                )}
              </label>

              {/* Password */}
              <label htmlFor="register-password" className="modal__label">
                Password
                <input
                  id="register-password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className={`modal__input ${
                    errors.password && touched.password
                      ? "modal__input_type_error"
                      : ""
                  }`}
                  value={values.password || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.password && errors.password && (
                  <span id="register-password-error" className="modal__error">
                    {errors.password}
                  </span>
                )}
              </label>

              {/* Username */}
              <label className="modal__label" htmlFor="register-username">
                Username
                <input
                  id="register-username"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className={`modal__input ${
                    errors.username && touched.username
                      ? "modal__input_type_error"
                      : ""
                  }`}
                  value={values.username || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.username && errors.username && (
                  <span id="register-username-error" className="modal__error">
                    {errors.username}
                  </span>
                )}
              </label>

              {serverError && (
                <span
                  id="register-server-error"
                  className="modal__error modal__error_server"
                >
                  {serverError}
                </span>
              )}

              <button
                type="submit"
                className={`modal__submit-btn ${
                  !isValid ? "modal__submit-btn_disabled" : ""
                }`}
                disabled={!isValid}
              >
                Sign up
              </button>
            </form>

            <p className="modal__alt-text">
              or{" "}
              <button
                type="button"
                className="modal__alt-link"
                onClick={onSwitchToLogin}
              >
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterModal;
