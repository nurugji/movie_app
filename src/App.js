import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routs/Home";
import About from "./routs/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/About" component={About}></Route>
    </HashRouter>
  );
}
export default App;
