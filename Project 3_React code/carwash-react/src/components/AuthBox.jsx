import { useEffect, useState } from "react";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AuthBox({
  title,
  subtitle,
  children,
  buttonText,
  bottomText,
  bottomLink,
  linkPath,
  showGoogle = true
}) {
  return (
    <section className="log">

      {/* Top Navbar */}
      <div className="login_top">
        <div className="log_bar">

          <div className="logo_section">
            <div className="logo_circle">Logo</div>

            <span className="logo_text">
              Car<span className="wash">Wash</span>
            </span>
          </div>

          <div className="back_section">
            <FaArrowLeft />
            <span className="back_text">Go Back</span>
          </div>

        </div>
      </div>

      {/* Middle Form Section */}
      <div className="login_middle">
        <div className="login_box">

          <h1>{title}</h1>

          <p className="subheading">
            {subtitle}
          </p>

          {/* Dynamic form fields */}
          {children}

          {/* Main Button */}
          <button className="login_btn">
            {buttonText}
          </button>

          {/* Optional Google Section */}
          {showGoogle && (
            <>
              <div className="divider">
                <span></span>
                <p>OR CONTINUE WITH</p>
                <span></span>
              </div>

              <button className="google_btn">
                <FaGoogle />
                <span>Continue with Google</span>
              </button>
            </>
          )}

          {/* Bottom Link */}
          <p className="signup_text">
            {bottomText}{" "}
            <Link to={linkPath}>
              {bottomLink}
            </Link>
          </p>

        </div>
      </div>

      {/* Footer */}
      <div className="login_footer">
        <p>© 2026 COMPANY NAME. ALL RIGHTS RESERVED</p>
      </div>

    </section>
  );
}

export default AuthBox;