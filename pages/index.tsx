import {
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowRightAltSharp,
  CabinSharp,
  CorporateFareSharp,
  FormatPaintSharp,
} from "@mui/icons-material";
import theme from "../components/common/theme";
import Banner from "../public/images/home-banner.jpg";
import HeroBanner from "../components/common/HeroBanner";
import { NextLinkComposed } from "../components/common/Link";
import Head from "next/head";
import ServicesSection from "../components/ServicesSection";

const cardContent = [
  {
    icon: <CabinSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Residential",
  },
  {
    icon: <CorporateFareSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Commercial",
  },
  {
    icon: <FormatPaintSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Industrial",
  },
];

const Home = () => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Home</title>
        <meta
          name="description"
          content="If you're looking for high quality and dependable paint subcontracting service you have come to the right place."
        />
      </Head>
      <HeroBanner
        heading={
          <Fade in>
            <Typography
              variant={isMediumScreen ? "h2" : "h1"}
              component="h1"
              fontWeight={900}
              color="white"
              textTransform="uppercase"
            >
              We&lsquo;re committed to helping
              <span style={{ color: "#f4d58d" }}> you</span>.
            </Typography>
          </Fade>
        }
        height="long"
        desc={`If you're looking for high quality and dependable paint
        subcontracting service you have come to the right place. At
        Kruitbosch Painting Inc. we will give you the attention and
        personal service you'll come to expect and enjoy.`}
        imagePath={Banner.src}
        actionArea={
          <Grid mt={2} item xs={12}>
            <Fade in style={{ transitionDelay: "200ms" }}>
              <Button
                component={NextLinkComposed}
                variant="contained"
                color="secondary"
                to="#about"
                endIcon={<ArrowRightAltSharp />}
              >
                Learn More About Us
              </Button>
            </Fade>
          </Grid>
        }
      />
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }} id="section-two">
        <Typography
          component="h2"
          variant={isMediumScreen ? "h3" : "h2"}
          fontWeight={900}
          textTransform="uppercase"
        >
          Services
        </Typography>
        <Typography
          component="p"
          variant={isMediumScreen ? "body1" : "h6"}
          mb={3}
        >
          We offer services in all three of these areas, if you&apos;re
          interested please give us a call! (801) 499-1657
        </Typography>
        <ServicesSection
          cardContent={cardContent}
          isMediumScreen={isMediumScreen}
        />
      </Container>

      <Box sx={{ backgroundColor: "#708d81" }}>
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 5, md: 10 } }}
          id="section-two"
        >
          <Typography
            component="h2"
            variant={isMediumScreen ? "h3" : "h2"}
            fontWeight={900}
            textTransform="uppercase"
            id="about"
          >
            About Us
          </Typography>
          <Typography
            component="p"
            variant={isMediumScreen ? "body1" : "h6"}
            mb={3}
          >
            KPI is a proud member of NUHB, Northern Utah Home Builders.
          </Typography>
          <Fade in>
            <Typography variant="body1" mt={2}>
              KPI&apos;s original founding father was introduced to painting in
              the late 50&apos;s early 60&apos;s. He was 19 years old. He was
              hooked right away. For the next 10 years painting was a hobby and
              took a back seat to raising a family and many full time jobs.
              During that 10 years he painted for family and friends; many
              family rooms, kitchen remodels and even an occasional new build.
            </Typography>
          </Fade>
          <Fade in>
            <Typography variant="body1" mt={2}>
              In the early 70&apos;s he had an opportunity to paint near the
              lodge at Powder Mountain. His hobby quickly evolved at this point
              to a 96 unit apartment complex and 350 new house construction.
              This created the need for generation 2 to step in &#8212; KPI was
              now a business. Both generations had a concentrated effort on
              quality and building long term relationships with local
              contractors all up and down the Wasatch front and beyond.
            </Typography>
          </Fade>
          <Fade in>
            <Typography variant="body1" mt={2}>
              Kruitbosch Painting is now serving Utah and surrounding states
              with 12 vehicles and multiple crews.
            </Typography>
          </Fade>
        </Container>
      </Box>
    </>
  );
};

export default Home;
