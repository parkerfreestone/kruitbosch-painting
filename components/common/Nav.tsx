import React, { useEffect, useState } from "react";
import {
  EmailRounded,
  MenuSharp,
  PhoneAndroidRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
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

export const navItems = [
  { name: "Home", route: "/" },
  { name: "Services", route: "" },
  { name: "Employment", route: "/employment" },
];

const Nav = () => {
  const [navProps, setNavProps] = useState({});
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const theme = useTheme();

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
            <Link href={"/"}>
              <div>
                <Image src={logo} alt="KPI" width={65} />
              </div>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuSharp />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navItems.map(({ name, route }) => (
                <MenuItem
                  key={name}
                  component={NextLinkComposed}
                  to={route}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleCloseServicesMenu}
                  >
                    <Stack direction="row" gap={2} p={2}>
                      <Box>
                        <Typography variant="button" fontWeight={900} px={2}>
                          Residential
                        </Typography>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/residential/custom"
                        >
                          Custom
                        </MenuItem>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/residential/multi-family"
                        >
                          Multi-Family
                        </MenuItem>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/residential/interior-exterior-finishes"
                        >
                          Interior/Exterior Finishes
                        </MenuItem>
                      </Box>

                      <Divider orientation="vertical" flexItem />

                      <Box>
                        <Typography variant="button" fontWeight={900} px={2}>
                          Industrial Coatings
                        </Typography>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/industrial-coatings/sealer"
                        >
                          Sealer
                        </MenuItem>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/industrial-coatings/acid-wash-grinding"
                        >
                          Acid Wash/Grinding
                        </MenuItem>
                      </Box>

                      <Divider orientation="vertical" flexItem />

                      <Box>
                        <Typography variant="button" fontWeight={900} px={2}>
                          Commercial
                        </Typography>
                        <MenuItem
                          component={NextLinkComposed}
                          to="/services/commercial/graffiti"
                        >
                          Graffiti
                        </MenuItem>
                      </Box>
                    </Stack>
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
              href="mailto:emailhere@gmail.com"
              sx={{ color: "white", borderColor: "white" }}
            >
              emailhere@gmail.com
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
