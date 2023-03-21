import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Head from "next/head";
import React from "react";
import HeroBanner from "../../components/common/HeroBanner";
import Photos from "../../components/common/Photos";

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
        <Box my={5}></Box>
        <Photos />
      </Container>
    </>
  );
};

export default Exterior;
