import React from "react";
import "../Shared.css";
import "boxicons/css/boxicons.min.css";
import ButtonSubmit from "../../../components/Buttons/ButtonSubmit";
import { Link } from "react-router";

export function SignIn() {
  return (
    <div className="_mainContainer">
      <div className="_Container">
        <div className="_image">
          <div className="_Ima">
            <img src="/src/assets/images/c2.webp" alt="teeth image" />
          </div>
          <div className="_Title">
            <h3>Create your account</h3>
            <p>
              <span>"</span>&nbsp;Welcome back to where your smile begins — a
              space designed for comfort, trust, and expert care. Step in with
              confidence, and leave with a brighter you.&nbsp;<span>"</span>
            </p>
          </div>
        </div>
        <div className="_FormContainer">
          <form className="_Form">
            <div className="_field _emailField">
              <div className="_Title">Sign In</div>
              <div className="_inputField">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="_Email"
                  required
                />
              </div>{" "}
              <span className="_error password-error">
                <i className="bx bx-error-circle error-icon"></i>
                <p className="error-text">error message</p>
              </span>
            </div>
            <div className="_field create-password">
              <div className="_inputField">
                <input
                  type="password"
                  name="password"
                  placeholder=" password"
                  className="_Password"
                  required
                />
              </div>{" "}
              <span className="_error password-error">
                <i className="bx bx-error-circle error-icon"></i>
                <p className="error-text">error message</p>
              </span>
            </div>
            <div className="_inputField _button">
              <ButtonSubmit name={"Sign In"} />
            </div>

            <div className="_Link">
              <Link id="_GoToLogin" to="/forgetpassword">Forget Password</Link>
              <Link id="_GoToLogin" to="/register">Create An Account</Link>
            </div>

            <div className="_footerCopyRight">
              <div className="_text">
                Copyright &copy; 2025 Generic Wihte Teeth
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
