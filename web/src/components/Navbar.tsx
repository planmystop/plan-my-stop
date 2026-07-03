"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ background: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Plan My Stop
        </Typography>

        <Box>
          <Button color="inherit">Explore</Button>
          <Button color="inherit">Pricing</Button>
          <Button variant="contained" sx={{ ml: 2 }}>
            Login
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}