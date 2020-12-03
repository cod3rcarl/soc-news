import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

export default function Login({ handleClick }) {
  return (
    <div className="login">
      <header className="underline">
        <h1>Welcome to SoC News</h1>
      </header>
      <h2>Please Sign In</h2>
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Sign In with Google
      </Button>
      <span style={{ color: "Tomato" }}>
        <i class="fa fa-google icon"></i>
      </span>
      <span></span>
    </div>
  );
}
