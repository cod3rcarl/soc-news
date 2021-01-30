import "./Nav.css";

import Signout from "./signout";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav({ user, signOut }) {
  const { email, photo } = user;
  const classes = useStyles();
  return (
    <div id="nav-bar" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className="userImg" src={photo} alt="user" />
          <Typography variant="h6" className={classes.title}>
            {email}
          </Typography>
          {user && <Signout signOut={signOut} />}
        </Toolbar>
      </AppBar>
      <br /> <br />
    </div>
  );
}

export default Nav;
