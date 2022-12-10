import { LogoutSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";
import { Login } from "../../components/dashboard/Login";
import { Register } from "../../components/dashboard/Register";
import { JobSubmission } from "../../components/dashboard/tabs/JobSubmission";
import theme from "../../components/common/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, index, value, ...other }: TabPanelProps) => {
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ my: 3 }}>{children}</Box>}
    </div>
  );
};

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const session = useSession();
  const supabase = useSupabaseClient();

  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <Box height="15vh" bgcolor="#001427" />
      {!session ? (
        <Login />
      ) : (
        <Container maxWidth="lg">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 5, flexDirection: { xs: "column", md: "row" } }}
          >
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              variant="scrollable"
              orientation={isMediumScreen ? "vertical" : "horizontal"}
            >
              {[
                "Job Submissions",
                "Contact Submissions",
                "Image Upload",
                "Register",
              ].map((tab) => (
                <Tab key={tab} label={tab} />
              ))}
            </Tabs>
            <Button
              variant="text"
              startIcon={<LogoutSharp />}
              onClick={() => supabase.auth.signOut()}
            >
              Logout
            </Button>
          </Box>
          <Divider />
          <TabPanel value={tabIndex} index={0}>
            <JobSubmission />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Typography>Contact Submissions</Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <Typography>Image Upload</Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={3}>
            <Register />
          </TabPanel>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
