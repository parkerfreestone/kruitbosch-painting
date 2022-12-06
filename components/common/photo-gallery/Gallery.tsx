import { useState } from "react";
import { Box, Chip, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { relative } from "path";

export const Gallery = () => {
  const [filterSelectedIndex, setFilterSelectedIndex] = useState(0);
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        {["Floors", "Commercial", "Residential", "Custom"].map((name, i) => (
          <Chip
            key={name}
            label={name}
            color="primary"
            variant={filterSelectedIndex === i ? "contained" : "outlined"}
            onClick={() => setFilterSelectedIndex(i)}
          />
        ))}
      </Stack>
      <Grid container mt={2}>
        <Grid item xs={4}>
          {/* <Image
            alt=""
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80"
            fill
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
};
