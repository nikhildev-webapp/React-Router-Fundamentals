import React from "react";
import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
    
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link> | <Link to="/about">About</Link>
          </nav>
          <main>
              <Outlet/>
          </main>
            <h1>Home Page</h1>
      <p>This is the home page.</p>
    </>
  );
};

export default Home;
