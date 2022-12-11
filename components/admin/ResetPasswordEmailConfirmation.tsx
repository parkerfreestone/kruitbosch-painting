import {
  CloseSharp,
  VisibilityOffSharp,
  VisibilitySharp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Collapse,
  Alert,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";

export const ResetPasswordEmailConfirmation = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const supabase = useSupabaseClient();

  const handleResetRequest = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/admin/reset-password",
      });
      if (error) throw error;
      else setShowMessage(true);
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 15 }}>
      <Collapse in={showMessage}>
        <Alert
          sx={{ mb: 3 }}
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowMessage(false);
              }}
            >
              <CloseSharp fontSize="inherit" />
            </IconButton>
          }
        >
          Please follow reset instructions sent to your email. (Check spam
          folder)
        </Alert>
      </Collapse>
      <Paper
        variant="outlined"
        component="form"
        onSubmit={handleResetRequest}
        sx={{ p: 5 }}
      >
        <Typography variant="h5" component="h2" fontWeight={900}>
          Email For Password Reset
        </Typography>
        <Divider sx={{ my: 3 }} />
        <TextField
          fullWidth
          label="Email"
          type={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button variant="contained" type="submit">
            Submit Reset
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
