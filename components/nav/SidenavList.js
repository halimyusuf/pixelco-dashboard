import { Box, SvgIcon, Typography } from "@mui/material";

export default function SideNavList({ navLinks, selectedNav, setSelectedNav }) {
  return (
    <>
      {navLinks.map((nav, index) => (
        <Box
          key={nav.text}
          onClick={() => setSelectedNav(nav.text)}
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <Box
            button
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              margin: "0.4rem 0",
              padding: "0.4rem  1rem",
              background: nav.text == selectedNav ? "var(--accent-3)" : "",
              borderTopLeftRadius: "99px",
              borderBottomLeftRadius: "99px",
            }}
          >
            <SvgIcon
              component={nav.icon}
              sx={{ fill: "var(--accent-2)" }}
              inheritViewBox
            />
            <Box sx={{ color: "var(--accent-1)", margin: "0 0 0 1rem" }}>
              <Typography noWrap variant="body1" sx={{ fontSize: "14px" }}>
                {nav.text}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
