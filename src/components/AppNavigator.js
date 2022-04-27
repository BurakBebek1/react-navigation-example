import { AppBar, Box, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function AppNavigator() {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Link to="/colorScreen/red" color="inherit">
              Red
            </Link>
            <Link to="/colorScreen/green" color="inherit">
              Green
            </Link>
            <Link to="/colorScreen/blue" color="inherit">
              Blue
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
