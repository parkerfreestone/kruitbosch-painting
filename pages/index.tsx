import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowRightAltSharp,
  CabinSharp,
  CorporateFareSharp,
  FormatPaintSharp,
} from '@mui/icons-material';
import theme from '../components/common/theme';
import Banner from '../public/images/home-banner.jpg';
import HeroBanner from '../components/common/HeroBanner';
import ServicesSection from '../components/ServicesSection';
import { NextLinkComposed } from '../components/common/Link';
import { FilterableGallery } from '../components/common/photo-gallery/Gallery';
import Head from 'next/head';

const cardContent = [
  {
    icon: <CabinSharp fontSize="large" sx={{ color: '#f4d58d' }} />,
    heading: 'Residential Finishes',
    subHeading: 'Interior & Exterior',
  },
  {
    icon: <CorporateFareSharp fontSize="large" sx={{ color: '#f4d58d' }} />,
    heading: 'Commercial Finishes',
    subHeading: 'Interior & Exterior',
  },
  {
    icon: <FormatPaintSharp fontSize="large" sx={{ color: '#f4d58d' }} />,
    heading: 'Specialty',
    subHeading: 'Interior & Exterior!',
  },
];

const Home = () => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
          <Typography
            variant={isMediumScreen ? 'h4' : 'h2'}
            component="h1"
            fontWeight={900}
            color="white"
            textTransform="uppercase"
          >
            We&lsquo;re committed to helping{' '}
            <span style={{ color: '#f4d58d' }}>you</span>.
          </Typography>
        }
        height="long"
        desc={`If you're looking for high quality and dependable paint
        subcontracting service you have come to the right place. At
        Kruitbosch Painting Inc. we will give you the attention and
        personal service you'll come to expect and enjoy.`}
        imagePath={Banner.src}
        actionArea={
          <Box mt={2}>
            <Button
              component={NextLinkComposed}
              variant="contained"
              color="secondary"
              to="/about"
              endIcon={<ArrowRightAltSharp />}
            >
              Learn More
            </Button>
          </Box>
        }
      />
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }} id="section-two">
        <Typography
          component="h2"
          variant={isMediumScreen ? 'h5' : 'h3'}
          fontWeight={900}
          textTransform="uppercase"
        >
          Here&lsquo;s what we can do for you
        </Typography>
        <Typography
          component="p"
          variant={isMediumScreen ? 'body1' : 'h6'}
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
      <Box bgcolor="#708d81">
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
          <Typography
            component="h2"
            variant={isMediumScreen ? 'h5' : 'h3'}
            fontWeight={900}
            textTransform="uppercase"
          >
            Still Not Convinced?
          </Typography>
          <Typography
            component="p"
            variant={isMediumScreen ? 'body1' : 'h6'}
            mb={3}
          >
            Here&apos;s Some Of Our Work
          </Typography>
          <FilterableGallery />
        </Container>
      </Box>
    </>
  );
};

export default Home;
