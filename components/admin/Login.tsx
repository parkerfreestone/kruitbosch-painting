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

export const Login = () => {
  const [formData, setFormData] = useState<any>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const supabase = useSupabaseClient();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword(formData);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        variant="outlined"
        component="form"
        onSubmit={handleLogin}
        sx={{ p: 5, my: 15 }}
      >
        <Typography variant="h5" component="h2" fontWeight={900}>
          Login To Dashboard
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            fullWidth
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
              Login
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
