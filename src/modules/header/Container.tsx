import React, { useState, useCallback, useContext } from "react";
import api from "../../api";
import { AuthContext } from "../auth";
import { Component } from "./Component";

const Container = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const authContext = useContext(AuthContext);

  console.log("authContext", authContext);

  const handleOpenLogin = useCallback(() => setIsLoginOpen(true), []);
  const handleCloseLogin = useCallback(() => setIsLoginOpen(false), []);

  const handleOpenSignUp = useCallback(() => setIsSignUpOpen(true), []);
  const handleCloseSignUp = useCallback(() => setIsSignUpOpen(false), []);

  const handleLogin = useCallback(
    async (email, password) => {
      try {
        const response = await api.auth.login(email, password);
        console.log("response", response);
        handleCloseLogin();
      } catch (error) {
        console.log(error);
      }
    },
    [handleCloseLogin]
  );

  const handleSignUp = useCallback(
    async (email, password) => {
      try {
        const response = await api.auth.signup(email, password);
        console.log("response", response);
        handleCloseSignUp();
      } catch (error) {
        console.log(error);
      }
    },
    [handleCloseSignUp]
  );

  return (
    <Component
      isLoginOpen={isLoginOpen}
      onOpenLogin={handleOpenLogin}
      onLogin={handleLogin}
      onCloseLogin={handleCloseLogin}
      isSignUpOpen={isSignUpOpen}
      onOpenSignUp={handleOpenSignUp}
      onCloseSignUp={handleCloseSignUp}
      onSignUp={handleSignUp}
    />
  );
};

export { Container };
