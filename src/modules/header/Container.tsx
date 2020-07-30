import React, { useState, useCallback } from "react";
import { Component } from "./Component";
import { submitForm } from "../login";

const Container = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const handleOpenLogin = useCallback(() => setIsLoginOpen(true), []);
  const handleCloseLogin = useCallback(() => setIsLoginOpen(false), []);

  const handleSubmit = useCallback(
    ({ email, password }) => {
      submitForm({ email, password });
      handleCloseLogin();
    },
    [handleCloseLogin],
  );

  return (
    <Component
      isLoginOpen={isLoginOpen}
      onOpenLogin={handleOpenLogin}
      onCloseLogin={handleCloseLogin}
      onSubmit={handleSubmit}
    />
  );
};

export { Container };
