import { Divider, Grid, TextField, Typography } from "@mui/material";

const excludedFields = ["id", "colorChanges", "extras", "createdAt", "request"];

export const DetailCard = ({ submission }: any) => {
  return (
    <>
      <Grid container wrap="wrap" spacing={2}>
        {Object.entries(submission)
          .filter(([key, val]) => !excludedFields.includes(key))
          .map(([key, val]) => (
            <Grid key={key} item xs={12} md={3}>
              <Typography variant="h5" fontWeight={900} component="h2">
                {key.toUpperCase()}
              </Typography>
              <TextField multiline fullWidth disabled value={val} />
            </Grid>
          ))}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight={900} component="h2">
            RECIEVED ON
          </Typography>
          <TextField
            multiline
            fullWidth
            disabled
            value={new Date(submission?.createdAt).toLocaleDateString()}
          />
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      {submission?.colorChanges && (
        <>
          <Typography variant="h5" mb={1} fontWeight={900} component="h2">
            COLOR CHANGES
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            disabled
            value={
              submission?.colorChanges ||
              "There are no specified color changes."
            }
          />
        </>
      )}
      {submission?.extras && (
        <>
          <Typography variant="h5" fontWeight={900} component="h2" mt={2}>
            EXTRAS
          </Typography>
          <TextField
            multiline
            fullWidth
            disabled
            rows={4}
            value={
              submission?.extras || "There are no specified color changes."
            }
          />
        </>
      )}
      {submission?.request && (
        <>
          <Typography variant="h5" fontWeight={900} component="h2" mt={2}>
            REQUEST
          </Typography>
          <TextField
            multiline
            fullWidth
            disabled
            rows={4}
            value={submission?.request || "There was no request."}
          />
        </>
      )}
    </>
  );
};
