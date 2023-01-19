import { ArrowDownwardRounded } from '@mui/icons-material';
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { MouseEventHandler, ReactElement, useState } from 'react';
import theme from './theme';

interface HeroBannerProps {
  heading: string | ReactElement;
  desc?: string;
  actionArea?: React.ReactNode;
  imagePath?: string;
  height?: 'short' | 'medium' | 'long';
  highlightIndex?: number;
  highlightColor?: string;
}

const HeroBanner = ({
  heading,
  desc,
  actionArea,
  height,
  imagePath,
}: HeroBannerProps) => {
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: any) => {
    setBackgroundPosition({ x: e.clientX, y: e.clientY });
  };

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      position="relative"
      onMouseMove={(e) => handleMouseMove(e)}
      top={0}
      sx={{
        background: imagePath
          ? `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${imagePath})`
          : '#001427',
        backgroundPositionX: `${-backgroundPosition.x / 20}px`,
        backgroundPositionY: `${-backgroundPosition.y / 20}px`,
        backgroundSize: 'cover',
        height: height === 'long' ? '100vh' : 'auto',
        py:
          !!height && height === 'short'
            ? 3
            : height === 'medium'
            ? 5
            : height === 'long'
            ? 25
            : 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ pt: { xs: 5, md: 10 } }}>
          <Grid item xs={12} md={7}>
            {typeof heading === 'string' ? (
              <Typography
                variant={isMediumScreen ? 'h4' : 'h2'}
                component="h1"
                fontWeight={900}
                color="white"
                textTransform="uppercase"
              >
                {heading}
              </Typography>
            ) : (
              heading
            )}
            {desc ? <Typography color="white">{desc}</Typography> : null}
            {actionArea}
          </Grid>
        </Grid>
        {height === 'long' && (
          <Box position="absolute" bottom={20} left="50%">
            <IconButton
              size="large"
              sx={{ color: 'white' }}
              href="#section-two"
            >
              <ArrowDownwardRounded />
            </IconButton>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HeroBanner;
