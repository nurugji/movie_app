import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routs/Home";
import About from "./routs/About";
import Detail from "./routs/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}
export default App;
