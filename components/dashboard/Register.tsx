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
  const [formData, setFormData] = useState<any>({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const supabase = useSupabaseClient();

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp(formData);
    console.log(data, error);
  };

  return (
    <>
      <Box height="15vh" bgcolor="#001427" />
      <Container maxWidth="xs">
        <Paper
          variant="outlined"
          component="form"
          onSubmit={handleRegister}
          sx={{ p: 5, my: 15 }}
        >
          <Typography variant="h5" fontWeight={900} component="h2">
            Register
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              value={formData?.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData?.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <VisibilitySharp />
                    ) : (
                      <VisibilityOffSharp />
                    )}
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
      </Container>
    </>
  );
};
