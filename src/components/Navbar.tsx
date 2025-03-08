import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../assets/Gsynergy Logo V2 Long Description.svg";
const Navbar: React.FC = () => {
  const [logoMenu, setLogoMenu] = useState<null | HTMLElement>(null);
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);

  const handleLogoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLogoMenu(event.currentTarget);
  };
  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };
  const handleClose = () => {
    setLogoMenu(null);
    setUserMenu(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        padding: "0 16px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "40px", width: "auto" }} />
          <Menu anchorEl={logoMenu} open={Boolean(logoMenu)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Logo Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Logo Option 2</MenuItem>
          </Menu>
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Data Viewer App
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon fontSize="large" />
            <IconButton onClick={handleUserClick} size="small">
              <ExpandMore />
            </IconButton>
          <Menu anchorEl={userMenu} open={Boolean(userMenu)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
