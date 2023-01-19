import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import HeroBanner from '../components/common/HeroBanner';

const About = () => {
  return (
    <>
      <HeroBanner heading="About Us" />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            ipsa quae sint veritatis quam illo! Ex nemo quibusdam veritatis!
            Odio nobis facilis animi quae reiciendis numquam praesentium
            temporibus officia ipsa?
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
