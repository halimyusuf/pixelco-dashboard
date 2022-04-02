import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import FileSvg from "../public/icons/file-text.svg";
import { SvgIcon, Typography } from "@mui/material";
import Navbar from "./MdNavbar";
import { sideNavLinks1, sideNavLinks2, sideNavLinks3 } from "../data/sidenav";
import SideNavList from "../components/nav/SidenavList";
import Logo from "../public/Group.svg";

function FileIcon() {
  return <SvgIcon component={FileSvg} sx={{ fill: "var(--accent-2)" }} />;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  })
);

export default function SwipeableTemporaryDrawer({ children, drawerWidth }) {
  const [state, setState] = React.useState(false);
  const [selectedNav, setSelectedNav] = React.useState("Dashboard");

  const anchor = "left";

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <Navbar toggleDrawer={setState} />
        <Main>{children}</Main>
        <SwipeableDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "var(--accent-2)",
            },
          }}
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <DrawerHeader>
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <SvgIcon component={Logo} inheritViewBox /> */}
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
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
