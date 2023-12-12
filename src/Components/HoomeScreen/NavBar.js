import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import igicon from "../images/Instagram_logo.png";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import AccountMenu from "./AccoutMenu";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  let Navigate = useNavigate();
  const feedPage = () => {
    Navigate("/feed");
  };

  const instagramPost = () => {
    Navigate("/InstagramPost");
  };

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const handleOpen = (type) => {
    setOpen(true);
    setType(type);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: "15px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // const [modal, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={1.5} />
            <Grid item xs={1}>
              <Typography position="relative">
                <img
                  style={{ height: "70px", width: "120px" }}
                  src={igicon}
                  alt="#"
                />
              </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={2.75}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={0.5} />
            <Grid
              item
              display="inline-flex"
              verticalAlign="center"
              boxSizing="inherit"
              textAlign="center"
              alignItems="center"
              xs={4}
            >
              <IconButton size="large" color="inherit" onClick={instagramPost}>
                <HomeSharpIcon style={{ color: "aliceblue" }} />
              </IconButton>
              <IconButton size="large" color="inherit">
                <ChatSharpIcon />
              </IconButton>
              <IconButton size="large" color="inherit" onClick={handleOpen}>
                <AddBoxSharpIcon />
              </IconButton>
              <IconButton size="large" color="inherit" onClick={feedPage}>
                <ExploreSharpIcon />
              </IconButton>
              <IconButton size="large" color="inherit">
                <FavoriteBorderSharpIcon />
              </IconButton>
              <IconButton>
                <AccountMenu />
              </IconButton>
            </Grid>
            <Grid item xs={1.5} />
          </Grid>
        </Toolbar>
        <Modal open={open} setOpen={setOpen} type={type} />
      </AppBar>
    </>
  );
};

export default NavBar;
