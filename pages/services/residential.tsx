import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  CardContent,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import HeroBanner from "../../components/common/HeroBanner";
import Photos from "../../components/common/Photos";

const Residential = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Services | Residential</title>
        <meta
          name="description"
          content="Looking for employment? Well go no further, we are accepting applications... come join our team!"
        />
      </Head>
      <HeroBanner heading="Residential" desc="" />
      <Container maxWidth="lg" sx={{ mb: 15 }}>
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={900}>
            Interior
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                color={"secondary"}
                fontWeight={900}
                component="h3"
                mt={1}
              >
                Two Tone Finish
              </Typography>
              <Typography variant="body1">
                When referring to paint finish a 2 tone means baseboards one
                color and walls/ceiling another color. It is customary for
                example to do doors and baseboard trim in gloss white and
                walls/ceiling in a warmer color, creating two color tones.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                fontWeight={900}
                mt={1}
                color={"secondary"}
                component="h3"
              >
                Three Tone Finish
              </Typography>
              <Typography variant="body1">
                When referring to paint finish a 2 tone means baseboards one
                color and walls/ceiling another color. It is customary for
                example to do doors and baseboard trim in gloss white and
                walls/ceiling in a warmer color, creating two color tones.
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h4" fontWeight={900} component="h2" mt={3}>
            Exterior
          </Typography>
          <Typography variant="body2" mb={3}>
            Many people only focus on interior of home. Getting the right
            exterior sets the tone for the interior. Think about that beautiful
            entry door – and spicing it up with a gel stain, being daring with a
            Tricorn Black color. Pergolas and Exterior timbers create a great
            outdoor space for gatherings. Create an outdoor cooking kitchen area
            with rough sawn timbers. Even class up your outdoor space by
            creating living walls to make your exterior space more private.
          </Typography>

          <Typography variant="h4" fontWeight={900} component="h2" mt={3}>
            Custom
          </Typography>
          <Typography variant="body1" mb={3}>
            Sealing, Coating, Garage, and Basement Floors
          </Typography>
          <Typography variant="body1" mb={3}>
            Our consultants start with understanding what feeling you are trying
            to achieve within your space for example rustic, modern, casual etc.
          </Typography>
          <Typography variant="h5" component="h3" fontWeight={900}>
            Accent Walls
          </Typography>
          <Typography variant="body1">
            When selecting either a 2 tone or 3 tone you can enhance the space
            by adding an accent wall design and/or color. In addition to accent
            wall color you can change the depth of surface by adding accent wall
            color to shiplap or hardy board Residential wall design. For
            example; it is trendy right now to put shiplap on a headboard wall
            with a color change that not only sets the tone but enhances the
            room. See our photo gallery for reference.
          </Typography>
          <Typography variant="body1" mt={2}>
            Our consultants start with understanding what feeling you are trying
            to achieve within your space for example rustic, modern, casual etc.
          </Typography>
          <Typography variant="body1" mt={2}>
            Sealing ● Coating ● Garage and Basement Floors
          </Typography>
        </Box>
        <Photos />
      </Container>
    </>
  );
};

export default Residential;
