"use client";

import { Box, Typography, Button, Card, Stack } from "@mui/material";
import Navbar from "@/components/Navbar";
import JourneyPlanner from "@/components/JourneyPlanner";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #F7F8FC, #FFFFFF)",
          textAlign: "center",
          px: 2,
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 500 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Plan My Stop
          </Typography>

          <Typography variant="body1" color="text.secondary">
            AI-powered journey intelligence for smarter road trips
          </Typography>

          <Card sx={{ p: 2, textAlign: "left" }}>
            <Typography>🧭 Smart route planning</Typography>
            <Typography>💰 Budget optimization</Typography>
            <Typography>📍 Hidden stop discovery</Typography>
          </Card>

          <Button variant="contained" size="large">
            Start Planning Journey
          </Button>
        </Stack>
      </Box>
      <JourneyPlanner />
    </>
  );
}