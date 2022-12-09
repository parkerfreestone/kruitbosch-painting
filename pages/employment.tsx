import { InfoOutlined } from "@mui/icons-material";
import {
  Button,
  Container,
  Box,
  Typography,
  Alert,
  Stack,
} from "@mui/material";
import { NextLinkComposed } from "../components/common/Link";
import HeroBanner from "../components/home/HeroBanner";

const Employment = () => {
  return (
    <>
      <HeroBanner
        heading="Employment"
        desc="Come Join Our Team! Apply Today!"
      />
      <Container maxWidth="lg" sx={{ mb: 15 }}>
        <Box my={5}>
          <Alert severity="info" icon={<InfoOutlined />} sx={{ mb: 3 }}>
            Now Hiring All Positions.
          </Alert>
          <Stack spacing={3}>
            <Typography variant="h4" component="h2" fontWeight={900}>
              Join Our Team at Kruitbosch Painting Inc.
            </Typography>
            <Typography variant="body1">
              KPI has been in business for over 40 years. Through our journey,
              we have been honored to employ some of the leading tradesmen in
              our industry.
            </Typography>
            <Typography variant="body1">
              As KPI moves into the next generation of team members, our mission
              is to provide a high quality service, while remaining on the
              cutting edge of industry standards and development. We strive to
              provide exceptional service, attention to detail, and a safe and
              clean work environment. We pride ourselves in providing a family
              like workplace, and the freedom for our staff to grow and
              innovate. Our employees are skilled, professional tradesmen and
              artists. Here at KPI, we make it a priority to put our best work
              forward and have fun while doing it.
            </Typography>
            <Box>
              <Button
                component={NextLinkComposed}
                variant="outlined"
                color="primary"
                to="/contact"
              >
                Contact Us
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Employment;
