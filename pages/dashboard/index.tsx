import { Box, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";
import { Login } from "../../components/dashboard/Login";
import { Register } from "../../components/dashboard/Register";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, index, value, ...other }: TabPanelProps) => {
  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const session = useSession();
  const supabase = useSupabaseClient();

  const handleChange = (event: SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <Box height="15vh" bgcolor="#001427" />
      {!session ? (
        <Paper variant="outlined" sx={{ p: 5, my: 15 }}>
          <Tabs value={tabIndex} onChange={handleChange}>
            {["Login", "Register"].map((form) => (
              <Tab key={form} label={form} />
            ))}
          </Tabs>
          <TabPanel value={tabIndex} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Register />
          </TabPanel>
        </Paper>
      ) : (
        <Button variant="outlined" onClick={() => supabase.auth.signOut()}>
          Logout
        </Button>
      )}
    </>
  );
};

export default Dashboard;
