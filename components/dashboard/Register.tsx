import { VisibilityOffSharp, VisibilitySharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState<any>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const supabase = useSupabaseClient();

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    await supabase.auth.signUp(formData);
  };

  return (
    <Paper
      variant="outlined"
      component="form"
      onSubmit={handleRegister}
      sx={{ p: 5 }}
    >
      <Typography variant="h5" fontWeight={900} component="h2">
        Register
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <TextField
          label="Email"
          type="email"
          value={formData?.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={formData?.password}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilitySharp /> : <VisibilityOffSharp />}
              </IconButton>
            ),
          }}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};
