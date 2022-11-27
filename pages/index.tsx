import { ArrowRightAltSharp, ArrowRightSharp } from "@mui/icons-material";
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Grid,
  FormControl,
} from "@mui/material";
import Image from "next/image";
import Banner from "../public/images/home-image.jpg";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: { xs: 0, md: 10 } }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={900} textTransform="uppercase">
            We&lsquo;re committed to helping you.
          </Typography>
          <Typography>
            If you&lsquo;re looking for high quality and dependable paint
            subcontracting service you have come to the right place. At
            Kruitbosch Painting Inc. we will give you the attention and personal
            service you&lsquo;ll come to expect and enjoy.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowRightAltSharp />}
            sx={{ mt: 2 }}
          >
            Schedule a job
          </Button>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>

      {/* <Box>
          <Typography variant="h4" textTransform="uppercase" fontWeight={900}>
            Services
          </Typography>
          <Stack direction="row">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Interior</Typography>
              </CardContent>
            </Card>
          </Stack>
          <Button endIcon={<ArrowRightAltSharp />}>Learn More</Button>
        </Box> */}
    </Container>
  );
};

export default Home;
