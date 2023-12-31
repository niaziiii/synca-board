// CustomAppBar.js
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import {
  Badge,
  Button,
  InputBase,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Menu, MenuItem } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { drawerWidth } from "./layout";
import { useLocation } from "react-router-dom";

const CustomAppBar = ({ handleDrawerToggle }) => {
  const router = useLocation();
  const [authenticated, setAuthenticated] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "55px",
    marginLeft: "auto",
    backgroundColor: alpha(theme.palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "300px",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: 8,
      fontSize: 14,
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "300px",
      },
    },
  }));

  const O_LOGIN_URL =
    "https://localhost:3000/auth?widgetMode=login#o-anonymous";
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        color: "black",
        background: "#F3F4F8",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {router.pathname === "/" ? (
          <img src={"/assets/welcome.png"} alt="logo" width={210} height={28} />
        ) : (
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontSize={29}>Synca</Typography>
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <Search>
            <StyledInputBase
              placeholder="Search for Anything"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {router.pathname == "/" ? (
            <IconButton
              sx={{ marginX: 1 }}
              size="large"
              color="inherit"
              backgroundColor="white"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsNoneOutlinedIcon sx={{ color: "gray" }} />
              </Badge>
            </IconButton>
          ) : (
            <Button
              startIcon={<LinkIcon />}
              sx={{
                color: "#FFF",
                mx: 1,
                px: "16px",
                py: "10px",
                background: "#2B5CE6",
                "&:hover": {
                  background: "#2B5CE6", // Set the same background color on hover
                },
              }}
            >
              Copy Link
            </Button>
          )}
          <Box sx={{ flexGrow: 0 }} width={155}>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                borderRadius: "50px",
                p: "3px",
                backgroundColor: "white",
              }}
            >
              <Avatar alt="Your" src="/static/images/avatar/2.jpg" />
              <Box sx={{ ml: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Alex Meian
                </Typography>
                <Typography fontSize={10} sx={{ color: "gray" }}>
                  Your Description
                </Typography>
              </Box>
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <a
                href="https://synca.outseta.com/auth?widgetMode=register#o-anonymous"
                style={{ textDecoration: "none", color: "GrayText" }}
              >
                <MenuItem
                  // onClick={handleCloseUserMenu}
                  sx={{ marginRight: 6 }}
                >
                  <Typography textAlign="center">Sign Up</Typography>
                </MenuItem>
              </a>
              {authenticated ? (
                <a
                  href="/#o-logout-link"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  <MenuItem
                    // onClick={handleCloseUserMenu}
                    sx={{ marginRight: 6 }}
                  >
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
                </a>
              ) : (
                <a
                  href="https://synca.outseta.com/auth?widgetMode=login#o-anonymous"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  <MenuItem
                    // onClick={handleCloseUserMenu}
                    sx={{ marginRight: 6 }}
                  >
                    <Typography textAlign="center">Log In</Typography>
                  </MenuItem>
                </a>
              )}
              <a href={O_LOGIN_URL}>Lcogin</a>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
