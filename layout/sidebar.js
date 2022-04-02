import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import FileSvg from "../public/icons/file-text.svg";
import { SvgIcon } from "@mui/material";
import Navbar from "./navbar1";
import { sideNavLinks1, sideNavLinks2, sideNavLinks3 } from "../data/sidenav";
import SideNavList from "../components/nav/SidenavList";
import Logo from "../public/Group.svg";

function FileIcon() {
  return <SvgIcon component={FileSvg} sx={{ fill: "var(--accent-2)" }} />;
}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({
  open,
  drawerWidth,
  handleDrawerOpen,
  handleDrawerClose,
  children,
}) {
  const theme = useTheme();
  const [selectedNav, setSelectedNav] = useState("Dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "var(--accent-2)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            sx={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <SvgIcon
              component={Logo}
              inheritViewBox
              sx={{ display: "block" }}
            /> */}
            <img src="/Group.svg" alt="" />

            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                marginLeft: "8px",
                color: "var(--accent-1)",
              }}
            >
              Pixel Co.
            </Typography>
          </Box>
        </DrawerHeader>
        {/* <Divider sx={{ color: "var(--accent-3)" }} /> */}
        <Box
          sx={{ height: "1px", background: "var(--accent-3)", width: "100%" }}
        />
        <Box sx={{ paddingLeft: "20px" }}>
          <List>
            <SideNavList
              navLinks={sideNavLinks1}
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </List>
          {/* <Divider sx={{ color: "var(--accent-3)" }} /> */}
          <Box
            sx={{
              height: "1px",
              background: "var(--accent-3)",
              width: "100%",
            }}
          />
          <List>
            <SideNavList
              navLinks={sideNavLinks2}
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </List>

          {/* <Divider sx={{ color: "var(--accent-3)" }} /> */}
          <Box
            sx={{
              height: "1px",
              background: "var(--accent-3)",
              width: "100%",
            }}
          />

          <List>
            <SideNavList
              navLinks={sideNavLinks3}
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
