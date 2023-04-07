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

const Commercial = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Services | Commercial</title>
        <meta
          name="description"
          content="Looking for employment? Well go no further, we are accepting applications... come join our team!"
        />
      </Head>
      <HeroBanner heading="Commercial" />
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

export default Commercial;
