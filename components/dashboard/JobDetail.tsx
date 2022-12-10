import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const JobDetail = ({ jobSubmission }: any) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {Object.entries(jobSubmission).map(([key, val]) => (
          <Grid key={key} item xs={6} md={3}>
            <Typography variant="h5" component="h2">
              {key}
            </Typography>
            <Typography>{val}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
