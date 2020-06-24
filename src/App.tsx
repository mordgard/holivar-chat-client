import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext, context } from "./modules/auth";
import { Routes } from "./Routes";

const App = () => {
  return (
    <AuthContext.Provider value={context}>
      <Router>
        <Routes />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
