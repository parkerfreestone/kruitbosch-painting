import {
  ImageList,
  ImageListItem,
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

const Interior = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Services | Residential | Interior</title>
        <meta
          name="description"
          content="Looking for employment? Well go no further, we are accepting applications... come join our team!"
        />
      </Head>
      <HeroBanner heading="Residential" desc="Interior Finishes" />
      <Container maxWidth="lg" sx={{ mb: 15 }}>
        <Grid container spacing={2} my={5}>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" fontWeight={900} component="h2">
                  Two Tone Finish
                </Typography>
                <Typography variant="body2">
                  When referring to paint finish a 2 tone means baseboards one
                  color and walls/ceiling another color. It is customary for
                  example to do doors and baseboard trim in gloss white and
                  walls/ceiling in a warmer color, creating two color tones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" fontWeight={900} component="h2">
                  Three Tone Finish
                </Typography>
                <Typography variant="body2">
                  When referring to paint finish a 2 tone means baseboards one
                  color and walls/ceiling another color. It is customary for
                  example to do doors and baseboard trim in gloss white and
                  walls/ceiling in a warmer color, creating two color tones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Photos />
      </Container>
    </>
  );
};

export default Interior;
