import styles from "@/styles/nav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { link: "/", name: "Home" },
  { link: "/search", name: "詳細検索" },
  { link: "/about", name: "このサイトについて" },
];

export function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <nav>
        <ul className={styles.list}>
          {pages.map((page) => (
            <li key={page.link}>
              <Box
                mr={1}
                sx={{
                  "&:hover": {
                    color: "rgba(255,255,255,0.7)",
                  },
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <Link to={page.link}>
                  <a>
                    <b>{page.name}</b>
                  </a>
                </Link>
              </Box>
            </li>
          ))}
        </ul>
      </nav>
      {/* for mobile */}
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
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
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <Link to={page.link} key={page.link}>
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
