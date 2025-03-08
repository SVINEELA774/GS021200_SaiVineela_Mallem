import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Stores from "./pages/Stores";
import SKUs from "./pages/SKUs";
import Planning from "./pages/Planning";
import Chart from "./pages/Chart";
const drawerWidth = 200; 
const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <Navbar />
        <Toolbar sx={{ minHeight: 64 }} />
          <Routes>
            <Route path="/store" element={<Stores/>} />
            <Route path="/sku" element={<SKUs />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/charts" element={<Chart/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};
export default App;

