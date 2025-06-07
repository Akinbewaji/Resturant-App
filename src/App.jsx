import React from "react";
import HomeView from "./components/pages/home/HomeView";
import Login from "./components/pages/auth/Login";

const App = () => {
  return (
    <>
      <div>
        <HomeView />
      </div>
      <br />

      <div>
        <Login/>
      </div>
    </>
  );
};

export default App;
