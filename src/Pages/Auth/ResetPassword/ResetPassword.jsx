import React from "react";
import "../Shared.css";
import "boxicons/css/boxicons.min.css";
import ButtonSubmit from "../../../components/Buttons/ButtonSubmit";
import { MdOutlinePassword } from "react-icons/md";
import LogOut from "../LogOut";

export function ResetPassword() {
  return (
    <div className="_mainContainer">
      <div className="_Container">
        <div className="_image">
          <div className="_Ima">
            <img src="/src/assets/images/c2.webp" alt="teeth image" />
          </div>
          <div className="_Title">
            <h3>Resset Password </h3>
            <p>
              <span>"</span>&nbsp;No worries — it happens! Just enter your email
              address below, and we'll send you a secure link to reset your
              password. Your smile is just a few steps away.&nbsp;<span>"</span>
            </p>
          </div>
        </div>
        <div className="_FormContainer">
          <form className="_Form">
            <div className="_Title">
              <MdOutlinePassword className="text-5xl Iconsss" />
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
              <ButtonSubmit name={"Reset Now"} />
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

export default ResetPassword;
