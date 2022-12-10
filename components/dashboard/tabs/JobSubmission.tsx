import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  Stack,
  Table,
  TableHead,
  Typography,
} from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { JobDetail } from "../JobDetail";

export const JobSubmission = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [view, setView] = useState<"grid" | "detail">("grid");
  const [selectedJob, setSelectedJob] = useState<Record<string, any>>({});

  const supabase = useSupabaseClient();

  useEffect(() => {
    const getInitialData = async () => {
      const { data, error } = await supabase.from("Jobs").select("*");

      if (error) {
        alert("There was a problem fetching job submissions...");
        return;
      }

      setJobList(data);
    };

    getInitialData();
  }, []);

  return (
    <>
      <Typography variant="h5" component="h1" mb={3}>
        Manage Job Submissions
      </Typography>
      {view === "grid" ? (
        <Grid container spacing={2}>
          {jobList.map((job) => (
            <Grid key={job.id} item xs={6}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h5" component="div" fontWeight={900}>
                  Name - {job.name}
                </Typography>
                <Typography variant="body1">Builder - {job.builder}</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    setSelectedJob(job);
                    setView("detail");
                  }}
                  sx={{ mt: 2 }}
                >
                  See Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <JobDetail jobSubmission={selectedJob} />
      )}
    </>
  );
};
