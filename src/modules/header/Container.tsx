import React, { useState, useCallback } from "react";
import { Component } from "./Component";

const Container = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const handleOpenLogin = useCallback(() => setIsLoginOpen(true), []);
  const handleCloseLogin = useCallback(() => setIsLoginOpen(false), []);
  const handleLogin = useCallback(() => {
    // api request
    handleCloseLogin();
  }, [handleCloseLogin]);

  return (
    <Component open={isLoginOpen} onClose={handleCloseLogin} onOpenLogin={handleOpenLogin} onSubmit={handleLogin} />
  );
};

export { Container };
