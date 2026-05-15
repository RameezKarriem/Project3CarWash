import { FaEye } from "react-icons/fa";

function InputField({ label, icon, type, placeholder, showEye }) {
  return (
    <div className={`input_box ${label === "Password" ? "password_box" : ""}`}>
      <label>{label}</label>

      <div className="input_wrapper">
        <div className="input_icon">
          {icon}
        </div>

        <input type={type} placeholder={placeholder} />

        {showEye && (
          <div className="password_eye">
            <FaEye />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;