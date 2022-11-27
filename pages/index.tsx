import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowRightAltSharp,
  CabinSharp,
  CorporateFareSharp,
  BadgeSharp,
} from "@mui/icons-material";
import theme from "../components/common/theme";
import Banner from "../public/images/home-banner.jpg";
import HeroBanner from "../components/home/HeroBanner";
import ServicesSection from "../components/home/ServicesSection";

const cardContent = [
  {
    icon: <CabinSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Residential Finishes",
    subHeading: "Interior & Exterior",
  },
  {
    icon: <CorporateFareSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Commercial Finishes",
    subHeading: "Interior & Exterior",
  },
  {
    icon: <BadgeSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Employment",
    subHeading: "We're hiring!",
  },
];

const Home = () => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HeroBanner
        heading={
          <Typography
            variant={isMediumScreen ? "h4" : "h2"}
            component="h1"
            fontWeight={900}
            color="white"
            textTransform="uppercase"
          >
            We&lsquo;re committed to helping{" "}
            <span style={{ color: "#f4d58d" }}>you</span>.
          </Typography>
        }
        desc={`If you're looking for high quality and dependable paint
        subcontracting service you have come to the right place. At
        Kruitbosch Painting Inc. we will give you the attention and
        personal service you'll come to expect and enjoy.`}
        imagePath={Banner.src}
        actionArea={
          <Stack direction="row" sx={{ mt: 2 }} gap={2}>
            <Button variant="contained" color="secondary">
              Get a quote
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowRightAltSharp />}
              sx={{ color: "white", borderColor: "white" }}
            >
              Schedule a job
            </Button>
          </Stack>
        }
      />
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
        <Typography
          component="h2"
          variant={isMediumScreen ? "h5" : "h3"}
          fontWeight={900}
        >
          Here&lsquo;s what we can do for you
        </Typography>
        <Typography
          component="p"
          variant={isMediumScreen ? "body1" : "h6"}
          mb={3}
        >
          As a Full Service Painting Contractor
        </Typography>
        <ServicesSection
          isMediumScreen={isMediumScreen}
          cardContent={cardContent}
          includeCardActions
        />
      </Container>
    </>
  );
};

export default Home;
