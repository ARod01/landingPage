import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Period from "./components/Period";
import About from "./components/About";
import Benefits from "./components/Benefits";
import SignUp from "./components/SignUp";

import "./assets/style/app.scss";

const App = () =>{
  return(
    <>
    <main>
      <Header />
      <Title />
      <Period />
      <About />
      <Benefits />
      <SignUp />
    </main>
    </>
  )
}

export default App;
