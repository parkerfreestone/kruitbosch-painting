import { ArrowLeftSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailCard } from "../DetailCard";

export const JobSubmission = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [view, setView] = useState<"grid" | "detail">("grid");
  const [selectedJob, setSelectedJob] = useState<Record<string, any>>({});
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const supabase = useSupabaseClient();

  const router = useRouter();

  useEffect(() => {
    const getInitialData = async () => {
      const { data, error } = await supabase.from("jobs").select("*");

      if (error) {
        alert("There was a problem fetching job submissions...");
        return;
      }

      setJobList(data);
    };

    getInitialData();
  }, []);

  const handleDeleteSubmission = async () => {
    try {
      const { error } = await supabase
        .from("jobs")
        .delete()
        .eq("id", selectedJob?.id);
      if (error) throw error;
      router.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Typography variant="h5" component="h1" mb={3}>
        Manage Job Submissions
      </Typography>
      {view === "grid" ? (
        <Grid container spacing={2}>
          {jobList.length > 0 ? (
            jobList.map((job) => (
              <Grid key={job.id} item xs={12} md={6}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                  <Typography variant="h5" component="div" fontWeight={900}>
                    Name - {job.name}
                  </Typography>
                  <Typography variant="body1">
                    Builder - {job.builder}
                  </Typography>
                  <Stack
                    spacing={2}
                    sx={{ mt: 2 }}
                    direction={{ xs: "column", md: "row" }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        setSelectedJob(job);
                        setView("detail");
                      }}
                    >
                      See Details
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        setSelectedJob(job);
                        setDeleteModalIsOpen(true);
                      }}
                    >
                      Delete Submission
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography p={2}>There are no current submissions.</Typography>
          )}
        </Grid>
      ) : (
        <>
          <Button
            variant="outlined"
            sx={{ mb: 2 }}
            onClick={() => setView("grid")}
            startIcon={<ArrowLeftSharp />}
          >
            Back to submissions
          </Button>
          <DetailCard submission={selectedJob} />
        </>
      )}
      <Modal
        open={deleteModalIsOpen}
        onClose={() => setDeleteModalIsOpen(false)}
      >
        <Paper
          sx={{
            p: 5,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography fontWeight={900}>
            Are you sure you want to delete this submission?
          </Typography>
          <Stack
            spacing={2}
            sx={{ mt: 2 }}
            direction={{ xs: "column", md: "row" }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteSubmission}
              disableElevation
            >
              Yes
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setDeleteModalIsOpen(false)}
            >
              No
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};
