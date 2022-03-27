import * as React from "react";
import { Typography, IconButton, Toolbar, Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { SvgIcon, Tooltip, Avatar, Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "../public/icons/search.svg";
import BellIcon from "../public/icons/bell.svg";
import ChevronDown from "../public/icons/chevron-down.svg";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${width}px)`,
    marginLeft: `${width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar(props) {
  const { drawerWidth, open } = props;
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
      width={drawerWidth}
      elevation={0}
      position="static"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: "var(--accent-2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="body2"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: "var(--accent-1)" }}
          >
            Hello, Maaz
          </Typography>

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

            <Box sx={{ width: "55px", margin: "0 0.5rem" }}>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ color: "var(--accent-1)" }}
              >
                Ruman Aladin
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <SvgIcon
                  component={ChevronDown}
                  sx={{ fill: "var(--accent-2)" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
