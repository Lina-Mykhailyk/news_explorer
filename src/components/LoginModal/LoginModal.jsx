import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "../ModalWithForm/ModalWithForm.css";

function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onSwitchToRegister,
  serverError,
}) {
  const { values, handleChange, handleBlur, errors, touched, isValid } =
    useForm({
      email: "",
      password: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      btnText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isValid}
      altText="or"
      altLinkText="Sign up"
      onAltLinkClick={onSwitchToRegister}
    >
      <label className="modal__label" htmlFor="login-email">
        Email
        <input
          id="login-email"
          type="email"
          name="email"
          placeholder="Enter email"
          className={`modal__input ${
            errors.email && touched.email ? "modal__input_type_error" : ""
          }`}
          value={values.email || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="email"
          required
        />
        {touched.email && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </label>

      <label className="modal__label" htmlFor="login-password">
        Password
        <input
          id="login-password"
          type="password"
          name="password"
          placeholder="Enter password"
          className={`modal__input ${
            errors.password && touched.password ? "modal__input_type_error" : ""
          }`}
          value={values.password || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="current-password"
          required
        />
        {touched.password && errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>

      {serverError && (
        <span
          id="login-server-error"
          className="modal__error modal__error_server"
        >
          {serverError}
        </span>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
