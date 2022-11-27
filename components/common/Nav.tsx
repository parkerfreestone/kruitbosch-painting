import React, { useState } from "react";
import { MenuSharp, PersonSharp } from "@mui/icons-material";
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
} from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { NextLinkComposed } from "./Link";
import Link from "next/link";

const navItems = [
  { name: "Services", route: "/services" },
  { name: "Schedule A Job", route: "/schedule-job" },
  { name: "Contact Us", route: "/contact" },
  { name: "Employment", route: "/employment" },
  { name: "Photos", route: "/photos" },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
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
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Admin</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", flexGrow: 1, md: "none" },
            }}
          >
            <Image src={logo} alt="KPI" width={65} style={{ marginTop: 5 }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map(({ name, route }) => (
              <Button
                key={name}
                component={NextLinkComposed}
                to={route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 1, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              startIcon={<PersonSharp />}
              variant="outlined"
              color="secondary"
            >
              Admin
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
