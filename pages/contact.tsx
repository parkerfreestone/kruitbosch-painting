import {
  ArrowRightAltSharp,
  CalendarMonthSharp,
  FaxSharp,
  QuestionAnswerSharp,
  QuestionMarkSharp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";
import HeroBanner from "../components/home/HeroBanner";

const Contact = () => {
  const [submissionMessage, setSubmissionMessage] = useState<string | null>("");
  const [formData, setFormdData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    request: "",
  });

  const supabase = useSupabaseClient();

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("Contact").insert([formData]);

    if (!error) {
      setSubmissionMessage(
        "Form successfully submitted. We will get back to you as soon as possible."
      );
      return;
    }

    setSubmissionMessage(
      `There was an error submitting the form. Please contact us if you keep having issues: ${error.message}`
    );
  };

  return (
    <>
      <HeroBanner
        heading="Contact Us"
        desc="Our team of professional painters 
are  the best in the industry!"
      />
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ my: 5 }}>
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 5 }}>
              <Typography variant="h5" fontWeight={900}>
                Get A Quote
              </Typography>
              <Typography variant="body1">Or Request Information</Typography>
              <Divider sx={{ my: 3 }} />
              <Box component="form" onSubmit={handleFormSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormdData({ ...formData, name: e.target.value })
                    }
                  />
                  <TextField
                    label="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormdData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Phone"
                    value={formData.phone}
                    type="tel"
                    onChange={(e) =>
                      setFormdData({ ...formData, phone: e.target.value })
                    }
                  />
                  <TextField
                    multiline
                    rows={3}
                    label="Request"
                    value={formData.request}
                    onChange={(e) =>
                      setFormdData({ ...formData, request: e.target.value })
                    }
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowRightAltSharp />}
                  >
                    Submit Form
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={900}>
              Simply Give Us A Call!
            </Typography>
            <Stack spacing={2}>
              <Paper variant="outlined" sx={{ p: 2, mt: 3 }}>
                <Stack direction="row" display="flex" alignItems="center">
                  <FaxSharp fontSize="large" sx={{ mr: 1 }} />
                  <Stack>
                    <Typography
                      variant="h6"
                      fontWeight={900}
                      style={{ marginBottom: 0 }}
                    >
                      Office
                    </Typography>
                    <Typography variant="body1">
                      Dale: (801) 941-9319
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
              <Paper variant="outlined" sx={{ p: 2, mt: 5 }}>
                <Stack direction="row" display="flex" alignItems="center">
                  <CalendarMonthSharp fontSize="large" sx={{ mr: 1 }} />
                  <Stack>
                    <Typography
                      variant="h6"
                      fontWeight={900}
                      style={{ marginBottom: 0 }}
                    >
                      Scheduling
                    </Typography>
                    <Typography variant="body1">
                      Forrest: (801) 499-1657
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={!!submissionMessage}
        message={submissionMessage}
        onClose={() => setSubmissionMessage(null)}
        autoHideDuration={4000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
    </>
  );
};

export default Contact;
