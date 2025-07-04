import React from "react";
import "../Shared.css";
import "boxicons/css/boxicons.min.css";
import ButtonSubmit from "../../../components/Buttons/ButtonSubmit";
import { Link } from "react-router";

export function SignUp() {
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
              <span>"</span>&nbsp;Rediscover your smile in a place where care
              feels natural, and every detail is crafted with comfort and
              confidence in mind. Dental wellness with a touch of
              elegance.&nbsp;<span>"</span>
            </p>
          </div>
        </div>
        <div className="_FormContainer">
          <form className="_Form">
            <div className="_Title">Sign Up</div>

            <div className="_field _nameField">
              <div className="_inputField">
                <input
                  type="text"
                  name="username"
                  placeholder="First Name"
                  className="_Name"
                  required
                />
                <span className="_error password-error">
                  <i className="bx bx-error-circle error-icon"></i>
                  <p className="error-text">error message</p>
                </span>
              </div>
            </div>
            <div className="_field _nameField">
              <div className="_inputField">
                <input
                  type="text"
                  name="username"
                  placeholder="Last Name"
                  className="_Name"
                  required
                />
                <span className="_error password-error">
                  <i className="bx bx-error-circle error-icon"></i>
                  <p className="error-text">error message</p>
                </span>
              </div>
            </div>
            <div className="_field _emailField">
              <div className="_inputField">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
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
                  placeholder="Create password"
                  className="_Password"
                  required
                />
              </div>{" "}
              <span className="_error password-error">
                <i className="bx bx-error-circle error-icon"></i>
                <p className="error-text">error message</p>
              </span>
            </div>
            <div className="_field confirm-password">
              <div className="_inputField">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="_confiermPassword"
                  required
                  name="confirmPassword"
                />
              </div>{" "}
              <span className="_error password-error">
                <i className="bx bx-error-circle error-icon"></i>
                <p className="error-text">error message</p>
              </span>
            </div>

            <div className="_inputField _button">
              <ButtonSubmit name={"Sign Up"} />
            </div>

            <div className="_Link">
              <Link id="_GoToLogin" to="/login">
                Have an account?
              </Link>
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

export default SignUp;
