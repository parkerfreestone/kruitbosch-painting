import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Head from "next/head";
import React from "react";
import HeroBanner from "../../../components/common/HeroBanner";
import Photos from "../../../components/common/Photos";

const Exterior = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Services | Residential | Exterior</title>
        <meta
          name="description"
          content="Looking for employment? Well go no further, we are accepting applications... come join our team!"
        />
      </Head>
      <HeroBanner heading="Residential" desc="Exterior Finishes" />
      <Container maxWidth="lg" sx={{ mb: 15 }}>
        <Box my={5}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" fontWeight={900} component="h2">
                Exterior
              </Typography>
              <Typography variant="body2">
                Many people only focus on interior of home. Getting the right
                exterior sets the tone for the interior. Think about that
                beautiful entry door – and spicing it up with a gel stain, being
                daring with a Tricorn Black color. Pergolas and Exterior timbers
                create a great outdoor space for gatherings. Create an outdoor
                cooking kitchen area with rough sawn timbers. Even class up your
                outdoor space by creating living walls to make your exterior
                space more private.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Photos />
      </Container>
    </>
  );
};

export default Exterior;
