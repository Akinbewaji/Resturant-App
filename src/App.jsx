import React from "react";
import HomeView from "./components/pages/home/HomeView";
import Login from "./components/pages/auth/Login";
import PizzaList from "./components/pages/menu/PizzaList";

const App = () => {
  return (
    <>
      {/* <div>
        <HomeView />
      </div>
      <br />

      <div>
        <Login/>
      </div>
      <br /><br /> */}

      <div>
        <PizzaList/>
      </div>

    </>
  );
};

export default App;
