import { ArrowRightAltSharp, ReceiptLongSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import HeroBanner from "../components/home/HeroBanner";

const ScheduleAJob = () => {
  const [formData, setFormData] = useState<any | null>({
    name: "",
    builder: "",
    startDate: null,
    job: "",
    lotNumber: 0,
    totalSqft: 0,
    style: "",
    finish: "",
    rail: "",
    wallColor: "",
    trimColor: "",
    ceilingColor: "",
    stainColor: "",
    exteriorColor: "",
    colorChanges: "",
    extras: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState<string | null>("");

  const supabase = useSupabaseClient();

  const router = useRouter();

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("jobs").insert([formData]);

    if (!error) {
      setSubmissionMessage(
        "Form successfully submitted. We will get back to you as soon as possible."
      );
      setFormData({
        name: "",
        builder: "",
        startDate: null,
        job: "",
        lotNumber: 0,
        totalSqft: 0,
        style: "",
        finish: "",
        rail: "",
        wallColor: "",
        trimColor: "",
        ceilingColor: "",
        stainColor: "",
        exteriorColor: "",
        colorChanges: "",
        extras: "",
      });
      return;
    }

    setSubmissionMessage(
      `There was an error submitting the form. Please contact us if you keep having issues: ${error.message}`
    );
  };

  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Schedule A Job</title>
        <meta
          name="description"
          content="Are you in need of a full service painting contractor? Fill out this form and we'll get back to you!"
        />
      </Head>
      <HeroBanner
        heading="Schedule A Job"
        desc="Please Provide Detailed Information in order for us to schedule accordingly. "
      />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Paper
          variant="outlined"
          component="form"
          autoComplete="off"
          onSubmit={handleFormSubmit}
          sx={{ p: 5 }}
        >
          <Typography variant="h4" component="h2" fontWeight={900}>
            General Contractors and Foreman
          </Typography>

          <Divider sx={{ py: 2 }} />
          <Typography variant="h6" component="h3" fontWeight={900} py={2}>
            General Information
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              fullWidth
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              id="name"
              label="Name"
            />
            <TextField
              fullWidth
              required
              onChange={(e) =>
                setFormData({ ...formData, builder: e.target.value })
              }
              id="bulder"
              label="Builder"
            />
          </Stack>

          <Divider sx={{ py: 2 }} />
          <Typography variant="h6" component="h3" fontWeight={900} py={2}>
            Job Information
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              onChange={(newValue) =>
                setFormData({ ...formData, startDate: newValue })
              }
              value={formData?.startDate}
              renderInput={(params) => <TextField {...params} sx={{ mb: 2 }} />}
            />
          </LocalizationProvider>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, job: e.target.value })
              }
              id="job"
              label="Job"
            />
            <TextField
              fullWidth
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, lotNumber: Number(e.target.value) })
              }
              id="lotNumber"
              label="Lot #"
            />
            <TextField
              fullWidth
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, totalSqft: Number(e.target.value) })
              }
              id="squareFeet"
              label="Total Square Feet"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, style: e.target.value })
              }
              id="style"
              label="Style"
            />
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <FormControl>
              <FormLabel id="finish">Finish</FormLabel>
              <RadioGroup
                row
                name="finish"
                value={formData?.finish}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({
                    ...formData,
                    finish: (e.target as HTMLInputElement).value,
                  })
                }
              >
                <FormControlLabel
                  value="one-tone"
                  control={<Radio />}
                  label="One Tone Finish"
                />
                <FormControlLabel
                  value="two-tone"
                  control={<Radio />}
                  label="Two Tone Finish"
                />
                <FormControlLabel
                  value="three-tone"
                  control={<Radio />}
                  label="Three Tone Finish"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="rail-label">Rail</FormLabel>
              <RadioGroup
                row
                aria-labelledby="rail-label"
                name="rail"
                value={formData?.rail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({
                    ...formData,
                    rail: (e.target as HTMLInputElement).value,
                  })
                }
              >
                <FormControlLabel
                  value="stained"
                  control={<Radio />}
                  label="Stained"
                />
                <FormControlLabel
                  value="two-tone"
                  control={<Radio />}
                  label="Two Tone"
                />
                <FormControlLabel
                  value="stain-and-glaze"
                  control={<Radio />}
                  label="Stain and Glaze"
                />
                <FormControlLabel
                  value="painted"
                  control={<Radio />}
                  label="Painted"
                />
              </RadioGroup>
            </FormControl>
          </Stack>

          <Divider sx={{ py: 2 }} />

          <Typography variant="h6" component="h3" fontWeight={900} py={2}>
            Paint / Stain Color
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, wallColor: e.target.value })
              }
              id="wall"
              label="Wall"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, trimColor: e.target.value })
              }
              id="trim"
              label="Trim"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, ceilingColor: e.target.value })
              }
              id="ceiling"
              label="Ceiling"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, stainColor: e.target.value })
              }
              id="stain"
              label="Stain"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, exteriorColor: e.target.value })
              }
              id="exterior"
              label="Exterior"
            />
          </Stack>
          <TextField
            multiline
            fullWidth
            rows={4}
            label="Color Changes"
            placeholder="Description and Color"
            sx={{ mt: 2 }}
            value={formData?.colorChanges}
            onChange={(e) =>
              setFormData({ ...formData, colorChanges: e.target.value })
            }
          />
          <TextField
            multiline
            fullWidth
            rows={4}
            label="Extras"
            placeholder="Please Provide any Addtional Information"
            sx={{ mt: 2 }}
            value={formData?.extras}
            onChange={(e) =>
              setFormData({ ...formData, extras: e.target.value })
            }
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              endIcon={<ArrowRightAltSharp />}
            >
              Submit Form
            </Button>
          </Box>
        </Paper>
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

export default ScheduleAJob;
