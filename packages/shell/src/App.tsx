import * as React from "react";
import { useState } from "react";
import "./App.css";

// @ts-ignore
const Plugin1App = React.lazy(() => import("plugin1/Plugin1App"));

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>Remote app:</h3>
        <Plugin1App />
      </div>
    </>
  );
}

export default App;
