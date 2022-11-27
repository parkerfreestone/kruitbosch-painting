import {
  Typography,
  Box,
  Card,
  Grid,
  useMediaQuery,
  Container,
} from "@mui/material";
import {
  CabinSharp,
  CorporateFareSharp,
  BadgeSharp,
} from "@mui/icons-material";
import theme from "../components/common/theme";
import HeroBanner from "../components/home/HeroBanner";
import ServicesSection from "../components/home/ServicesSection";

const cardContent = [
  {
    icon: <CabinSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Residential Finishes",
    subHeading: "Interior & Exterior",
    services: [
      "All ​Paint, Stain, and Lacquer Finishes",
      "Water Proofing",
      "Block Sealer",
      "Floor Coating: Epoxy, and Stain",
      "Deck, Skirting, and Landing Finishes",
      "Metal Rail and Staircase Finishes",
    ],
  },
  {
    icon: <CorporateFareSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Commercial Finishes",
    subHeading: "Interior & Exterior",
    services: [
      "​All New Construction Finishes",
      "All Repaint Finishes",
      "Exterior: Hardy Board",
      "Floor Epoxy",
      "Concrete Stain",
      "Wood Deck and Landing Finishes",
    ],
  },
  {
    icon: <BadgeSharp fontSize="large" sx={{ color: "#f4d58d" }} />,
    heading: "Specialty",
    subHeading: "Interior & Exterior",
    services: [
      "​Color Consulting Services",
      "Glazing",
      "Wood Graining",
      "Marbling",
      "Custom Murals",
    ],
  },
];

const Services = () => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <HeroBanner
        heading="Services"
        desc="Prompt and accurate scheduling is one of our main priorities."
      />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography component="h2" variant="h4" fontWeight={900}>
          Some of our services include
        </Typography>
        <Typography component="p" variant="h6" mb={3}>
          But are not limited to
        </Typography>
        <ServicesSection
          isMediumScreen={isMediumScreen}
          cardContent={cardContent}
        />
      </Container>
    </Box>
  );
};

export default Services;
