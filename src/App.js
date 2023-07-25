import React from "react";
import Flipcoin from "./components/Flipcoin/Flipcoin";
import Pxtoemconv from "./components/Pxtoemconv/Pxtoemconv";
import Dictionary from "./components/Dictionary/Dictionary";
import AspectRationCalc from "./components/AspectRationCalc/AspectRationCalc";
import RGb2Hex from "./components/RGbtoHex/RGb2Hex";
import TipCalc from "./components/TipCalc/TipCalc";
import GradientGen from "./components/GradientGen/GradientGen";
import QuoteGen from "./components/QuotoGen/QuoteGen";
import JokeGen from "./components/JokeGen/JokeGen";
import AgeCalc from "./components/AgeCalc/AgeCalc";
import PwdGen from "./components/PwdGen/PwdGen";
import BMICalc from "./components/BMICalc/BMICalc";
import RPS from "./components/RPS/RPS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CurCnvtr from "./components/CurCnvtr/CurCnvtr";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bmicalc" component={BMICalc} />
          <Route path="/agecalc" component={AgeCalc} />
          <Route path="/pwdgen" component={PwdGen} />
          <Route path="/jokegen" component={JokeGen} />
          <Route path="/quotegen" component={QuoteGen} />
          <Route path="/gradientgen" component={GradientGen} />
          <Route path="/rgbgex" component={RGb2Hex} />
          <Route path="/aspectratiocalc" component={AspectRationCalc} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/pxtoemconv" component={Pxtoemconv} />
          <Route path="/rps" component={RPS} />
          <Route path="/flipcoin" component={Flipcoin} />
          <Route path="/tipcalc" component={TipCalc} />
          <Route path="/currencyconv" component={CurCnvtr} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
