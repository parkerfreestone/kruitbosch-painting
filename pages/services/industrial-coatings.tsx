import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Head from "next/head";
import React from "react";
import HeroBanner from "../../components/common/HeroBanner";
import Photos from "../../components/common/Photos";

const IndustrialCoatings = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Services | Industrial Coatings</title>
        <meta
          name="description"
          content="Check out what we can do for you business in terms of Industrial Coatings!"
        />
      </Head>
      <HeroBanner heading="Industrial Coatings" />
      <Container maxWidth="lg" sx={{ mb: 15 }}>
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={900}>
            Heading
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            facilis sequi molestiae veniam in repudiandae et repellendus,
            molestias dolorum? Unde consequuntur sapiente libero fuga ea ad
            dolores maxime dignissimos dolore.
          </Typography>
        </Box>
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={900}>
            Heading
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            facilis sequi molestiae veniam in repudiandae et repellendus,
            molestias dolorum? Unde consequuntur sapiente libero fuga ea ad
            dolores maxime dignissimos dolore.
          </Typography>
        </Box>
        <Box my={5}>
          <Typography variant="h4" component="h2" fontWeight={900}>
            Heading
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            facilis sequi molestiae veniam in repudiandae et repellendus,
            molestias dolorum? Unde consequuntur sapiente libero fuga ea ad
            dolores maxime dignissimos dolore.
          </Typography>
        </Box>
        <Photos />
      </Container>
    </>
  );
};

export default IndustrialCoatings;
