import React, { useState, useCallback, useContext } from "react";
import api from "../../api";
import { AuthContext } from "../auth";
import { Component } from "./Component";

const Container = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isBecomeUserOpen, setIsBecomeUserOpen] = useState<boolean>(false);

  const authContext = useContext(AuthContext);

  console.log("authContext", authContext);

  const handleOpenLogin = useCallback(() => setIsLoginOpen(true), []);
  const handleCloseLogin = useCallback(() => setIsLoginOpen(false), []);

  const handleOpenBecomeUser = useCallback(() => setIsBecomeUserOpen(true), []);
  const handleCloseBecomeUser = useCallback(() => setIsBecomeUserOpen(false), []);

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

  const handleBecomeUser = useCallback(
    async (email, password) => {
      try {
        const response = await api.auth.becomeUser(email, password);
        console.log("handleBecomeUser Response", response);
        handleCloseBecomeUser();
      } catch (error) {
        console.log(error);
      }
    },
    [handleCloseBecomeUser]
  );

  return (
    <Component
      isLoginOpen={isLoginOpen}
      onOpenLogin={handleOpenLogin}
      onLogin={handleLogin}
      onCloseLogin={handleCloseLogin}
      isBecomeUserOpen={isBecomeUserOpen}
      onOpenBecomeUser={handleOpenBecomeUser}
      onCloseBecomeUser={handleCloseBecomeUser}
      onBecomeUser={handleBecomeUser}
    />
  );
};

export { Container };
