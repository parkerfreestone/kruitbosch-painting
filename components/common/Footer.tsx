import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { NextLinkComposed } from "./Link";
import { navItems } from "./Nav";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#001427",
          py: 3,
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography component="p" variant="h5" fontWeight={900} py={3}>
            Kruitbosch Painting Inc.
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography component="p" variant="h6">
                Contact
              </Typography>
              <Divider sx={{ mb: 2, width: "40px", borderColor: "#fff" }} />
              <Box mb={2}>
                <Typography component="p" variant="body1">
                  Scheduling: <br /> Forrest <br /> (801) 499-1657
                </Typography>
              </Box>
              <Box>
                <Typography component="p" variant="body1">
                  Office: <br /> Dale <br /> (801) 941-9319
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography component="p" variant="h6">
                Quick Links
              </Typography>
              <Divider sx={{ mb: 2, width: "40px", borderColor: "#fff" }} />
              <Stack>
                {navItems.map(({ name, route }) => (
                  <Button
                    key={name}
                    component={NextLinkComposed}
                    to={route}
                    sx={{ color: "white", display: "inline-block" }}
                  >
                    {name}
                  </Button>
                ))}
                <Button
                  component={NextLinkComposed}
                  to={"/admin"}
                  sx={{ color: "white", display: "inline-block" }}
                >
                  Admin Panel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#031b31", p: 1, color: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="body1" color="white">
            Kruitbosch Painting Inc. © 2022
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
