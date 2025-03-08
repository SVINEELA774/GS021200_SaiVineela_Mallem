import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import InventoryIcon from "@mui/icons-material/Inventory";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
const Sidebar: React.FC = () => {
  const menuItems = [
    { text: "Store", icon: <StoreIcon />, path: "/store" },
    { text: "SKU", icon: <InventoryIcon />, path: "/sku" },
    { text: "Planning", icon: <TableChartIcon />, path: "/planning" },
    { text: "Charts", icon: <BarChartIcon />, path: "/charts" },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          paddingTop: "64px",
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} component={NavLink} to={item.path}
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&.active": { backgroundColor: "#ddd" },
              padding: "10px 16px",
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default Sidebar;
