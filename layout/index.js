import { Box, Typography } from "@mui/material";
import Sidebar from "./sidebar";
import TempSidebar from "./TempSidebar";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${drawerWidth}px`,
    ...(!open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar
          drawerWidth={drawerWidth}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        >
          <Box>{children}</Box>
        </Sidebar>
        <Main open={open}>{/* <DrawerHeader /> */}</Main>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <TempSidebar
          drawerWidth={drawerWidth}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        >
          <Box>{children}</Box>
        </TempSidebar>
        <Main open={open}>{/* <DrawerHeader /> */}</Main>
      </Box>
    </div>
  );
}
