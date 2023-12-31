import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Typography, Button, IconButton } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CustomAppBar from "./appbar";
import CreateNewPageModal from "./createnewpage";
import { useLocation } from "react-router-dom";
export const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <CreateNewPageModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Box sx={{ padding: 3 }} display="flex" flexDirection="column">
        <a href="/" style={{ textDecoration: "none", color: "#FFF" }}>
          <Box display={"flex"} alignItems={"center"}>
            <img src={"/assets/logo.png"} alt="logo" width={30} height={24} />
            <Typography variant="h5" marginLeft={1} letterSpacing={-1}>
              Synca
            </Typography>
          </Box>
        </a>
        <Button
          startIcon={
            <AddCircleIcon sx={{ color: "#2B5CE6" }} fontSize="large" />
          }
          sx={{
            background: "white",
            fontSize: 16,
            display: router.pathname === "/" ? "" : "none",
            width: "100%",
            mt: 6,
            "&:hover": {
              background: "white",
            },
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Create New Page
        </Button>
        <a
          href={"/salesroom"}
          style={{
            display: router.pathname === "/salesroom" ? "block" : "none",
          }}
        >
          <Button
            sx={{
              background: "white",
              color: "#2B5CE6",
              fontSize: 16,
              width: "100%",
              mt: 6,
              "&:hover": {
                background: "white",
              },
            }}
          >
            ACME Deal
          </Button>
        </a>
        <a
          href={"/dashboard"}
          style={{ display: router.pathname === "/" ? "block" : "none" }}
        >
          <Button
            startIcon={
              <GridViewIcon sx={{ color: "#2B5CE6" }} fontSize="large" />
            }
            sx={{
              background: "white",
              fontSize: 16,
              width: "100%",
              mt: 6,
              "&:hover": {
                background: "white", // Set the same background color on hover
              },
            }}
          >
            Dashboard
          </Button>
        </a>
        <IconButton
          sx={{
            background: "#2B5CE6",
            position: "absolute",
            bottom: 18,
            padding: "12px",
            "&:hover": {
              background: "#2B5CE6", // Set the same background color on hover
            },
          }}
        >
          <HelpOutlineIcon fontSize="medium" sx={{ color: "#FFF" }} />
        </IconButton>
      </Box>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "black", // Set the background color for the sidebar
          color: "white", // Set the text color for the sidebar items
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          paddingTop: "80px",
          background: "#F3F4F8",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
