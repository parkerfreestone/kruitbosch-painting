import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { ReactElement, useState } from "react";
import theme from "./theme";

interface HeroBannerProps {
  heading: string | ReactElement;
  desc?: string;
  actionArea?: React.ReactNode;
  imagePath?: string;
  height?: "short" | "medium" | "long";
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
  const [, setBackgroundPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: any) => {
    setBackgroundPosition({ x: e.clientX, y: e.clientY });
  };

  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      position="relative"
      onMouseMove={(e) => handleMouseMove(e)}
      top={0}
      sx={{
        background: imagePath
          ? `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${imagePath})`
          : "#001427",
        backgroundSize: "cover",
        height: "auto",
        py:
          !!height && height === "short"
            ? 3
            : height === "medium"
            ? 5
            : height === "long"
            ? isMediumScreen
              ? 15
              : 25
            : 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ pt: { xs: 8, md: 10 } }}>
          {typeof heading === "string" ? (
            <Grid item xs={12} md={9}>
              <Fade in style={{ transitionDelay: "100ms" }}>
                <Typography
                  variant={isMediumScreen ? "h4" : "h2"}
                  component="h1"
                  fontWeight={900}
                  color="white"
                  textTransform="uppercase"
                >
                  {heading}
                </Typography>
              </Fade>
            </Grid>
          ) : (
            heading
          )}
          {desc ? (
            <Grid item xs={12} md={6}>
              <Fade in style={{ transitionDelay: "150ms" }}>
                <Typography color="white">{desc}</Typography>
              </Fade>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            {actionArea}
          </Grid>
        </Grid>
      </Container>
      {height === "long" && <div className="scroll-indicator"></div>}
    </Box>
  );
};

export default HeroBanner;
