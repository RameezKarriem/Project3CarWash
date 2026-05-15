import AuthBox from "../components/AuthBox";
import InputField from "../components/InputField";

import { FaLock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

function Login() {
  return (
    <AuthBox
      title="Welcome Back"
      subtitle="Enter your details to log into your account"
      buttonText="Login"
      bottomText="Don't have an account?"
      bottomLink="Signup"
      linkPath="/signup"
      showGoogle={true}
    >
      {/* Username / Email */}
      <InputField
        label="Username or Email"
        icon={<FaRegUser />}
        type="text"
        placeholder="Enter your username or email"
      />

      {/* Password */}
      <InputField
        label="Password"
        icon={<FaLock />}
        type="password"
        placeholder="Enter your password"
        showEye={true}
      />

      {/* Remember + Forgot */}
      <div className="login_options">
        <div className="remember_me">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <a href="#">Forgot password?</a>
      </div>
    </AuthBox>
  );
}

export default Login;