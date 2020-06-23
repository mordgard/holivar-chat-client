import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./modules/header";
import { Topics } from "./modules/topics";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Topics />
    </>
  );
}

export default App;
