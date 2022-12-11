import { ArrowLeftSharp } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { DetailCard } from "../DetailCard";

export const ContactSubmission = () => {
  const [contactList, setContactList] = useState<any[]>([]);
  const [view, setView] = useState<"grid" | "detail">("grid");
  const [selectedSubmission, setselectedSubmission] = useState<
    Record<string, any>
  >({});

  const supabase = useSupabaseClient();

  useEffect(() => {
    const getInitialData = async () => {
      const { data, error } = await supabase.from("contact").select("*");

      if (error) {
        alert("There was a problem fetching contact submissions...");
        return;
      }

      setContactList(data);
    };

    getInitialData();
  }, []);

  return (
    <>
      <Typography variant="h5" component="h1" mb={3}>
        Manage Contact Submissions
      </Typography>
      {view === "grid" ? (
        <Grid container spacing={2}>
          {contactList.length > 0 ? (
            contactList.map((contact) => (
              <Grid key={contact.id} item xs={12} md={6}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                  <Typography variant="h5" component="div" fontWeight={900}>
                    {contact.name}
                  </Typography>
                  <Typography variant="body1">{contact.email}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setselectedSubmission(contact);
                      setView("detail");
                    }}
                    sx={{ mt: 2 }}
                  >
                    See Details
                  </Button>
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
          <DetailCard submission={selectedSubmission} />
        </>
      )}
    </>
  );
};
