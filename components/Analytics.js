import { Box, Card, CardContent, SvgIcon, Typography } from "@mui/material";
import MoreHor from "../public/icons/more-horizontal.svg";
import { analytics } from "../data/analytics";

export default function Analytics() {
  return (
    <Card sx={{ background: "var(--accent-2)" }}>
      <CardContent sx={{ color: "var(--accent-1)" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.25rem",
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              color: "var(--accent-1)",
              fontWeight: 400,
            }}
          >
            Analytics
          </Typography>
          <SvgIcon component={MoreHor} inheritViewBox />
        </Box>
        <Box>
          {analytics.map((a) => (
            <Box key={a.label} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "120px" }}>
                <Typography variant="caption">{a.label}</Typography>
              </Box>
              <Box
                sx={{
                  width: "100px",
                  height: "10px",
                  borderRadius: "90px",
                  overflow: "hidden",
                  background: "var(--accent-3)",
                }}
              >
                <Box
                  sx={{
                    width: `${a.value * 9}%`,
                    height: "100%",
                    borderRadius: "90px",
                    background: "var(--gradient-3)",
                    marginLeft: "0.25rem",
                  }}
                >
                  {" "}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
