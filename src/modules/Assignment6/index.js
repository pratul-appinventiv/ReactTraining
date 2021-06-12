import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import Heading from "./components/Heading";
import "./index.css";

const Assignment6 = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  const checkSignUp = () => {
    setIsSignUpOpen(true);
    setIsHomeOpen(false);
  };

  const checkLogin = () => {
    setIsLoginOpen(true);
    setIsHomeOpen(false);
  };
  return (
    <div className={"mainContainer"}>
      {isSignUpOpen && <SignUpScreen />}
      {isLoginOpen && <LoginScreen />}

      {isHomeOpen && (
        <>
          <Heading
            styleClass={"homeHeading"}
            headingText={"Welcome to the home page"}
          />
          <div className={"homeContainer"}>
            <div className={"existingUser"}>
              <p>{"Already an existing user ?"}</p>
              <button type={"button"} onClick={checkLogin}>
                {"Login"}
              </button>
              <p>{"or"}</p>
            </div>
            <div className={"newUser"}>
              <p>{"Don't have an account ?"}</p>
              <button type={"button"} onClick={checkSignUp}>
                {"SignUp"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Assignment6;
