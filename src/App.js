import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routs/Home";
import About from "./routs/About";

function App() {
  return (
    <HashRouter>
      <Route path="/a" component={Home}></Route>
      <Route path="/About" component={About}></Route>
    </HashRouter>
  );
}
export default App;
