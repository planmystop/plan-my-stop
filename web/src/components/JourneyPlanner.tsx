"use client";

import { useState } from "react";
import { Box, TextField, Button, Card, Typography, Stack } from "@mui/material";

export default function JourneyPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <Card sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        Plan Your Journey
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          fullWidth
        />

        <TextField
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          fullWidth
        />

        <Button variant="contained" size="large">
          Generate AI Route
        </Button>
      </Stack>
    </Card>
  );
}