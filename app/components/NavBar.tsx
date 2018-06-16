import {
  AppBar,
  Icon,
  IconButton,
  Input,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { IStore, storeObserver } from "../models/Store";

export const Navbar = storeObserver(({store}: {store?: IStore}) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon
          style={{
            marginLeft: -12,
            marginRight: 10
          }}
        />
      </IconButton>
      <Typography
        variant="title"
        color="inherit"
        style={{
          flex: "0 1 0%",
          whiteSpace: "nowrap",
          padding: "0 10px 0 0",
          fontWeight: 500
        }}
      >
        Fluid Notion
      </Typography>
      <IconButton color="inherit" aria-label="Menu">
        <Icon
          style={{
            marginRight: -12,
            marginLeft: 10
          }}
          onClick={store!.saveFile}
        >
            cloud_download
        </Icon>
      </IconButton>
      <Input placeholder="Search ..." style={{ flex: 1 }} />
    </Toolbar>
  </AppBar>
));
