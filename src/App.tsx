import React from "react";
import { Header } from "./components/header";
import { useSocket } from "./web-socket";

function App() {
  useSocket();

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
