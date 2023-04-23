import React, { useEffect, useState } from "react";
import {
  Brush,
  BrushRounded,
  BrushSharp,
  CabinSharp,
  ChevronLeft,
  CorporateFareSharp,
  CropRotateSharp,
  EmailRounded,
  FormatPaintSharp,
  Home,
  HomeSharp,
  MailSharp,
  MenuSharp,
  People,
  PeopleSharp,
  PhoneAndroidRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { NextLinkComposed } from "./Link";
import Link from "next/link";

// !! NOT SUPER PROUD OF THIS COMPONENT BUT NEED TO SHIP WEBSITE FAST !! //

export const navItems = [
  { name: "Home", icon: <Home />, route: "/" },
  { name: "Services", icon: <Brush />, route: "" },
  { name: "Employment", icon: <People />, route: "/employment" },
];

export const navMobile = [
  { name: "Home", icon: <HomeSharp />, route: "/" },
  { name: "Employment", icon: <PeopleSharp />, route: "/employment" },
  {
    name: "Commercial",
    icon: <CorporateFareSharp />,
    route: "/services/commercial",
  },
  {
    name: "Industrial Coatings",
    icon: <FormatPaintSharp />,
    route: "/services/industrial-coatings",
  },
  { name: "Residential", icon: <CabinSharp />, route: "/services/residential" },
];

const Nav = () => {
  const [navProps, setNavProps] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenServicesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setServicesAnchorEl(null);
  };

  const theme = useTheme();

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setNavProps({
            position: "fixed",
            backgroundColor: theme.palette.primary.main,
            top: 0,
            left: 0,
          })
        : setNavProps({});
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  const list = (
    <Box
      role="presentation"
      onClick={() => setDrawerOpen(!drawerOpen)}
      onKeyDown={() => setDrawerOpen(!drawerOpen)}
    >
      <List>
        {navMobile.map(({ name, route, icon }, i) => (
          <>
            <ListItem key={name} disablePadding>
              <ListItemButton component={NextLinkComposed} to={route}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
            {i === 1 ? (
              <>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Services
                  </ListItemText>
                </ListItem>
              </>
            ) : null}
          </>
        ))}
        <ListItem>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Contact
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="tel:8014991657">
            <ListItemIcon>
              <PhoneAndroidRounded />
            </ListItemIcon>
            <ListItemText>(801) 499-1657</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="mailto:kpi@kruitboschpaint.com"
          >
            <ListItemIcon>
              <MailSharp />
            </ListItemIcon>
            <ListItemText>kpi@kruitboschpaint.com</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        py: 2,
        transition: "0.3s ease in",
        ...navProps,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: { xs: 0, md: 2 },
            }}
          >
            <Link href="/">
              <div>
                <Image src={logo} alt="KPI" width={65} />
              </div>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={() => setDrawerOpen(!drawerOpen)}
              color="inherit"
            >
              <MenuSharp />
            </IconButton>
            <Drawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              anchor="left"
            >
              {list}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", flexGrow: 1, md: "none" },
            }}
          >
            <Link href={"/"}>
              <div>
                <Image
                  src={logo}
                  alt="KPI"
                  width={65}
                  style={{ marginTop: 5 }}
                />
              </div>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map(({ name, route }) =>
              name.toLowerCase() === "services" ? (
                <>
                  <Button
                    key={name}
                    onClick={handleOpenServicesMenu}
                    sx={{ my: 2, mr: 1, color: "white", display: "block" }}
                  >
                    {name}
                  </Button>
                  <Menu
                    id="services-menu"
                    anchorEl={servicesAnchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    disableScrollLock={true}
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleCloseServicesMenu}
                  >
                    <MenuItem
                      component={NextLinkComposed}
                      to="/services/commercial"
                    >
                      Commercial
                    </MenuItem>
                    <MenuItem
                      component={NextLinkComposed}
                      to="/services/industrial-coatings"
                    >
                      Industrial Coatings
                    </MenuItem>
                    <MenuItem
                      component={NextLinkComposed}
                      to="/services/residential"
                    >
                      Residential
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  key={name}
                  component={NextLinkComposed}
                  to={route}
                  sx={{ my: 2, mr: 1, color: "white", display: "block" }}
                >
                  {name}
                </Button>
              )
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              startIcon={<PhoneAndroidRounded />}
              variant="outlined"
              color="secondary"
              href="tel:801-499-1657"
              sx={{ color: "white", borderColor: "white" }}
            >
              (801) 499-1657
            </Button>
            <Button
              startIcon={<EmailRounded />}
              variant="outlined"
              color="secondary"
              href="mailto:kpi@kruitboschpaint.com"
              target="_blank"
              sx={{ color: "white", borderColor: "white" }}
            >
              kpi@kruitboschpaint.com
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
