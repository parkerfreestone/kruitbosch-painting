import { EditAttributesSharp, ReceiptLongSharp } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { setConstantValue } from "typescript";
import HeroBanner from "../components/home/HeroBanner";

const ScheduleAJob = () => {
  const [formData, setFormData] = useState({
    name: "",
    builder: "",
    startDate: null,
    job: "",
    lotNumber: 0,
    totalSqft: 0,
    style: "",
    finish: "",
    rail: "",
    wallPaint: "",
    trimPaint: "",
    ceilingPaint: "",
    stainPaint: "",
    exteriorPaint: "",
    colorChanges: "",
    extras: "",
  });

  return (
    <>
      <HeroBanner
        heading="Schedule A Job"
        desc="Please Provide Detailed Information in order for us to schedule accordingly. "
      />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Paper
          variant="outlined"
          component="form"
          autoComplete="off"
          sx={{ p: 5 }}
        >
          <Stack direction="row" display="flex" alignItems="center">
            <ReceiptLongSharp fontSize="large" />
            <Typography variant="h4" fontWeight={900}>
              General Contractors and Foreman
            </Typography>
          </Stack>

          <Divider sx={{ py: 2 }} />
          <Typography variant="h6" fontWeight={900} py={2}>
            General Information
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              id="name"
              label="Name"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, builder: e.target.value })
              }
              id="bulder"
              label="Builder"
            />
          </Stack>
        </Paper>
        <Paper
          variant="outlined"
          component="form"
          autoComplete="off"
          sx={{ p: 5, my: 2 }}
        >
          <Typography variant="h6" fontWeight={900} py={2}>
            Job Information
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              onChange={(newValue) =>
                setFormData({ ...formData, startDate: newValue })
              }
              value={formData.startDate}
              renderInput={(params) => <TextField {...params} sx={{ mb: 2 }} />}
            />
          </LocalizationProvider>
          <Stack direction="row" spacing={2}>
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
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <FormControl>
              <FormLabel id="finish">Finish</FormLabel>
              <RadioGroup
                row
                name="finish"
                value={formData.finish}
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
              <FormLabel id="rail">Rail</FormLabel>
              <RadioGroup
                row
                name="rail"
                value={formData.rail}
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
        </Paper>
        <Paper
          variant="outlined"
          component="form"
          autoComplete="off"
          sx={{ p: 5 }}
        >
          <Typography variant="h6" fontWeight={900} py={2}>
            Paint / Stain Color
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, wallPaint: e.target.value })
              }
              id="wall"
              label="Wall"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, trimPaint: e.target.value })
              }
              id="trim"
              label="Trim"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, ceilingPaint: e.target.value })
              }
              id="ceiling"
              label="Ceiling"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, stainPaint: e.target.value })
              }
              id="stain"
              label="Stain"
            />
            <TextField
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, exteriorPaint: e.target.value })
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
            value={formData.colorChanges}
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
            value={formData.extras}
            onChange={(e) =>
              setFormData({ ...formData, extras: e.target.value })
            }
          />
        </Paper>
      </Container>
    </>
  );
};

export default ScheduleAJob;
