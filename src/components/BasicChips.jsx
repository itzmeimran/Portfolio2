import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function BasicChips({ name }) {
  const { heading, border } = useSelector((state) => state.colors);
  return (
    <Stack direction="row" spacing={1}>
      {/* <Chip sx={{color:heading, fontWeight:'bold'}} label={name} /> */}
      <Chip
        sx={{
          color: heading,
          fontWeight: "bold",
          borderColor: border,
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: "blur(10px)",
          cursor: "pointer",
        }}
        label={name}
        variant="outlined"
      />
    </Stack>
  );
}
