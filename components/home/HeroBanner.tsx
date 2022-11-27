import { ArrowRightAltSharp } from "@mui/icons-material";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ReactElement } from "react";
import theme from "../common/theme";

interface HeroBannerProps {
  heading: string | ReactElement;
  desc?: string;
  actionArea?: ReactElement;
  imagePath?: string;
  highlightIndex?: number;
  highlightColor?: string;
}

const HeroBanner = ({
  heading,
  desc,
  actionArea,
  imagePath,
}: HeroBannerProps) => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width="100vw"
      position="relative"
      top={0}
      zIndex={-1}
      sx={{
        background: imagePath
          ? `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${imagePath})`
          : "#001427",
        backgroundSize: "cover",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ pt: { xs: 5, md: 10 } }}>
          <Grid item xs={12} md={7}>
            {typeof heading === "string" ? (
              <Typography
                variant={isMediumScreen ? "h4" : "h2"}
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
      </Container>
    </Box>
  );
};

export default HeroBanner;
