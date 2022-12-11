import {
  Paper,
  Typography,
  Divider,
  TextField,
  IconButton,
  Box,
  Button,
  Container,
} from "@mui/material";
import { VisibilitySharp, VisibilityOffSharp } from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import HeroBanner from "../../components/home/HeroBanner";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const supabase = useSupabaseClient();

  const handleReset = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) setShowMessage(true);
      else alert("Password successfully reset!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <>
      <Box height="15vh" bgcolor="#001427" />
      <Container maxWidth="xs">
        <Paper
          variant="outlined"
          component="form"
          onSubmit={handleReset}
          sx={{ p: 5, mt: 15 }}
        >
          <Typography variant="h5" component="h2" fontWeight={900}>
            Reset Password
          </Typography>
          <Divider sx={{ my: 3 }} />
          <TextField
            fullWidth
            label="New Password"
            type={showPassword ? "text" : "password"}
            value={newPassword}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilitySharp /> : <VisibilityOffSharp />}
                </IconButton>
              ),
            }}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button variant="contained" type="submit">
              Submit Reset
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ResetPassword;
