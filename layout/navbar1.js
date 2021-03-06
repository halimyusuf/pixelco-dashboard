import * as React from "react";
import { Typography, IconButton, Toolbar, Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { SvgIcon, Tooltip, Avatar, Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "../public/icons/search.svg";
import BellIcon from "../public/icons/bell.svg";
import ChevronDown from "../public/icons/chevron-down.svg";
import SLogo from "../public/logo.svg";
import Menu from "../public/icons/menu.svg";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, dwidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100vw - ${dwidth}px)`,
    marginLeft: `${dwidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar(props) {
  const { drawerWidth, open, handleDrawerClose, handleDrawerOpen } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      open={open}
      dwidth={drawerWidth}
      elevation={0}
      position="fixed"
      sx={{
        // width: `calc(100% - ${drawerWidth}px)`,
        // ml: `${drawerWidth}px`,
        background: "var(--accent-2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{
                color: "var(--accent-1)",
                display: { xs: "none", md: "block" },
              }}
            >
              Hello, Maaz
            </Typography>

            <Box
              noWrap
              sx={{
                color: "var(--accent-1)",
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* <SvgIcon component={SLogo} inheritViewBox /> */}
              <img src="/Group.svg" alt="" />

              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  marginLeft: "5px",
                  color: "var(--accent-1)",
                }}
              >
                Pixel Co..
              </Typography>
            </Box>
            {/* <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{
                color: "var(--accent-1)",
                display: { xs: "flex", md: "none" },
              }}
            >
              <SvgIcon component={Logo} inheritViewBox />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  marginLeft: "5px",
                  color: "var(--accent-1)",
                }}
              >
                Pixel Co.
              </Typography>
            </Typography> */}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Box>
              <IconButton>
                <SvgIcon
                  component={SearchIcon}
                  sx={{ fill: "var(--accent-2)" }}
                />
              </IconButton>
            </Box>

            <Box sx={{ position: "relative" }}>
              <IconButton>
                <SvgIcon
                  component={BellIcon}
                  sx={{ fill: "var(--accent-2)" }}
                />
                <Box sx={{ position: "absolute", top: "8px", right: "11px" }}>
                  <Box
                    sx={{
                      width: "7px",
                      height: "7px",
                      background: "var(--gradient-1)",
                      borderRadius: "99px",
                    }}
                  ></Box>
                </Box>
              </IconButton>
            </Box>

            <Tooltip title="Open settings">
              <IconButton onClick={null}>
                <Avatar alt="Remy Sharp" src="/nav/avatar.jpg" />
              </IconButton>
            </Tooltip>

            <IconButton
              sx={{
                display: { xs: "block", md: "none" },
              }}
              onClick={handleDrawerOpen}
            >
              <SvgIcon
                component={Menu}
                sx={{
                  fill: "var(--accent-2)",
                }}
                inheritViewBox
              />
            </IconButton>

            <Box
              sx={{
                width: "55px",
                margin: "0 0.5rem",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ color: "var(--accent-1)" }}
              >
                Ruman Aladin
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton>
                <SvgIcon
                  component={ChevronDown}
                  sx={{
                    fill: "var(--accent-2)",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
