import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../data/Menu";
import { jwtDecode } from "jwt-decode";



function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const rediriger = useNavigate()
  let settings
  const token = localStorage.getItem("token");
  if (!token) {
    settings = ["Login", 'Register'];
  }
  try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      settings = ["Login", 'Register'];
    } else {
      settings = ["dashboard", "Account", "Logout"];
    }
  } catch (e) {
    localStorage.removeItem("token");
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    rediriger('login')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === "Home" ? (
                    <Link to="/"> {page}</Link>
                  ) : (
                    <Link to={page}>
                      <Typography textAlign="center">{page}</Typography>{" "}
                    </Link>
                  )}
                </MenuItem>
              ))} */}

              {/* ici on ajoute les items menu */}

              {MenuItems.map((item, index) => (

                <MenuItem key={index} onClick={handleCloseNavMenu}>

                  <Link to={item.name}>
                    <Typography textAlign="center">{item.name}</Typography>{" "}
                  </Link>

                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page, index) => (
              <div key={index}>
                {page === "Home" ? (
                  <Link to="/" className="ml-2 font-bold">
                    {" "}
                    {page}
                  </Link>
                ) : (
                  <Link to={page} className="ml-2 font-bold">
                    {page}
                  </Link>
                )}
              </div>
            ))} */}


            {MenuItems.map((item, index) => (

              <div key={index} onClick={handleCloseNavMenu}>

                <Link to={item.name} className="ml-3 border-l border-gray-400 border-solid p-2">
                  {item.name}
                </Link>

              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  {setting === 'Logout' ?
                    <>
                      <Typography textAlign="center" onClick={Logout}>{setting}</Typography>
                    </> :
                    <>
                      <Link to={setting}>
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
                    </>}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
