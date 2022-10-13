import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user"

// pass this data down as props to the child component(s) that need it!
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} linkedinUrl={user.links.linkedin} gitUrl={user.links.github} />
    </div>
  );
}

export default App;
