import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import {
  // GoogleAuthProvider,
  // signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
} from "firebase/auth";

function Login() {
  const history = useNavigate();

  const [login, setLogin] = useState({
    type: ["Sign-In", "Register"],
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const toggle = () => {
    setPassword("");
    setConfirmPassword("");
    setLogin((state) => {
      return {
        ...state,
        type:
          login.type[0] === "Sign-In"
            ? ["Register", "Sign-In"]
            : ["Sign-In", "Register"],
      };
    });
    console.log(login.type[0]);
    document.getElementById("action_msg").textContent = "";

    changeActMsgStyle("action_msg_li", "");
    if (document.getElementById("pwd_msg") !== null) {
      document.getElementById("pwd_msg").textContent = "";
    }
  };

  function verifyPasswd(_c_pwd, _pwd) {
    return _c_pwd === _pwd ? true : false;
  }

  function replaceClass(id, newClass) {
    var elem = document.getElementById(id);
    elem.className = "";
    elem.classList.add(newClass);
  }

  function changePwdMsgStyle(id, text) {
    if (text === "passwords match") {
      document.getElementById("register_btn").disabled = false;
      replaceClass(id, "password__message__valid");
    }
    if (text === "passwords do not match") {
      document.getElementById("register_btn").disabled = true;
      replaceClass(id, "password__message__invalid");
    }
    if (text === "") {
      document.getElementById("register_btn").disabled = false;
      replaceClass(id, "password__message");
    }
  }

  function changeActMsgStyle(id, text) {
    replaceClass(id, "action__message" + text);
  }

  const signIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          document.getElementById("action_msg").textContent =
            "Logged in successfully";
          changeActMsgStyle("action_msg", "__valid");
          changeActMsgStyle("action_msg_li", "__valid");
          sleep(1000).then(() => {
            if (auth) {
              history("/");
            }
          });
        })
        .catch((e) => {
          console.log(e);
          if (
            e.code !== "auth/wrong-password" &&
            e.code !== "auth/user-disabled" &&
            e.code !== "auth/user-not-found" &&
            e.code !== "auth/invalid-email"
          ) {
            document.getElementById("action_msg").textContent =
              "Error: Retry later";
            changeActMsgStyle("action_msg", "__invalid");
            changeActMsgStyle("action_msg_li", "__invalid");
          } else {
            if (e.code === "auth/wrong-password") {
              document.getElementById("action_msg").textContent =
                "Error: The password is wrong";
            }
            if (e.code === "auth/user-disabled") {
              document.getElementById("action_msg").textContent =
                "Error: The user account is disabled";
            }
            if (e.code === "auth/user-not-found") {
              document.getElementById("action_msg").textContent =
                "Error: The user account is not found, try to register";
            }
            if (e.code === "auth/invalid-email") {
              document.getElementById("action_msg").textContent =
                "Error: The email is invalid";
            }
            changeActMsgStyle("action_msg", "__invalid");
            changeActMsgStyle("action_msg_li", "__invalid");
          }
        });
    } else {
      if (password === "" && email === "") {
        document.getElementById("action_msg").textContent =
          "Error: No credentials introduced";
      } else {
        if (email === "") {
          document.getElementById("action_msg").textContent =
            "Error: No email introduced";
        }
        if (password === "") {
          document.getElementById("action_msg").textContent =
            "Error: No password introduced";
        }
      }
      changeActMsgStyle("action_msg", "__invalid");
      changeActMsgStyle("action_msg_li", "__invalid");
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (
      verifyPasswd(confirm_password, password) &&
      confirm_password !== "" &&
      email !== ""
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          document.getElementById("action_msg").textContent =
            "Registered and logged in successfully";
          // it successfully created a new user with email and password
          changeActMsgStyle("action_msg", "__valid");
          changeActMsgStyle("action_msg_li", "__valid");
          sleep(1000).then(() => {
            if (auth) {
              history("/");
            }
          });
        })
        .catch((e) => {
          console.log(e);
          if (
            e.code !== "auth/email-already-in-use" &&
            e.code !== "auth/invalid-email" &&
            e.code !== "auth/weak-password"
          ) {
            document.getElementById("action_msg").textContent =
              "Error: Retry later";
            changeActMsgStyle("action_msg", "__invalid");
            changeActMsgStyle("action_msg_li", "__invalid");
          } else {
            if (e.code === "auth/weak-password") {
              document.getElementById("action_msg").textContent =
                "Error: The password should be at least 6 characters";
            }
            if (e.code === "auth/email-already-in-use") {
              document.getElementById("action_msg").textContent =
                "Error: The email is already in use";
            }
            if (e.code === "auth/invalid-email") {
              document.getElementById("action_msg").textContent =
                "Error: The email is invalid";
            }
            changeActMsgStyle("action_msg", "__invalid");
            changeActMsgStyle("action_msg_li", "__invalid");
          }
        });
    } else {
      if (password === "" && email === "") {
        document.getElementById("action_msg").textContent =
          "Error: No credentials introduced";
      } else {
        if (email === "") {
          document.getElementById("action_msg").textContent =
            "Error: No email introduced";
        }
        if (password === "") {
          document.getElementById("action_msg").textContent =
            "Error: No password introduced";
        }
      }
      changeActMsgStyle("action_msg", "__invalid");
      changeActMsgStyle("action_msg_li", "__invalid");
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          alt=""
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container ">
        <div className="login__title">
          <p className="login__firstOption">{login.type[0]}</p>
          <p className="login__separator">|</p>
          <button onClick={toggle} className="grow_skew_forward">
            {login.type[1]}
          </button>
        </div>
        <form className="login__form ">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              document.getElementById("action_msg").textContent = "";
              changeActMsgStyle("action_msg_li", "");
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              document.getElementById("action_msg").textContent = "";
              changeActMsgStyle("action_msg_li", "");
              if (login.type[0] === "Register") {
                if (document.getElementById("pwd_msg").textContent !== "") {
                  document.getElementById("pwd_msg").textContent = verifyPasswd(
                    confirm_password,
                    e.target.value
                  )
                    ? "passwords match"
                    : "passwords do not match";
                }
                if (e.target.value === "" && confirm_password === "") {
                  document.getElementById("pwd_msg").textContent = "";
                }
                changePwdMsgStyle(
                  "pwd_msg",
                  document.getElementById("pwd_msg").textContent
                );
                changePwdMsgStyle(
                  "pwd_msg_li",
                  document.getElementById("pwd_msg").textContent
                );
              }
            }}
          />

          {login.type[0] === "Register" ? (
            <>
              <h5>Confirm Password</h5>
              <input
                id="pwd_input"
                type="password"
                value={confirm_password}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  document.getElementById("action_msg").textContent = "";
                  changeActMsgStyle("action_msg_li", "");
                  if (e.target.value === "" && password === "") {
                    document.getElementById("pwd_msg").textContent = "";
                  } else {
                    document.getElementById("pwd_msg").textContent =
                      verifyPasswd(e.target.value, password)
                        ? "passwords match"
                        : "passwords do not match";
                  }
                  changePwdMsgStyle(
                    "pwd_msg",
                    document.getElementById("pwd_msg").textContent
                  );
                  changePwdMsgStyle(
                    "pwd_msg_li",
                    document.getElementById("pwd_msg").textContent
                  );
                }}
              />
              <li id="pwd_msg_li" className="password__message">
                <span id="pwd_msg" className="password__message"></span>
              </li>
            </>
          ) : (
            <></>
          )}

          <p className="agreement__message">
            By
            {login.type[0] === "Register" ? (
              <> registering</>
            ) : (
              <> signing-in</>
            )}{" "}
            you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>

          {login.type[0] === "Sign-In" ? (
            <button
              id="sign_in_btn"
              type="submit"
              onClick={signIn}
              disabled={false}
              className="login__signInButton"
            >
              Sign In
            </button>
          ) : (
            <button
              id="register_btn"
              type="submit"
              onClick={register}
              disabled={false}
              className="login__registerButton"
            >
              Create your Amazon Account
            </button>
          )}
          <li id="action_msg_li" className="action__message">
            <span id="action_msg" className="action__message"></span>
          </li>
        </form>
      </div>
    </div>
  );
}

export default Login;
