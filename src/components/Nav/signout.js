import React from "react";
import { Button } from "@material-ui/core";

function Signout({ signOut }) {
  return (
    <div>
      <Button
        className="nav-button"
        variant="contained"
        color="secondary"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default Signout;
