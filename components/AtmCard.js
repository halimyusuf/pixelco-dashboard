import { Card, CardContent, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreHor from "../public/icons/more-horizontal.svg";
import Vector1 from "../public/atm card/Vector1.svg";
import Vector2 from "../public/atm card/Vector2.svg";

export default function AtmCard() {
  return (
    <Card
      sx={{
        // maxWidth: 345,
        background: "var(--accent-2)",
        position: "relative",
      }}
      elevation={0}
    >
      <CardContent sx={{ color: "var(--accent-1)", position: "relative" }}>
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
            My Card
          </Typography>
          <SvgIcon component={MoreHor} inheritViewBox />
        </Box>
        <Box>
          <Card
            sx={{
              maxWidth: 250,
              background: "var(--gradient-2)",
              position: "relative",
              margin: "0 auto",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                color: "var(--accent-1)",
                position: "relative",
                marginBottom: "-10px",
              }}
            >
              <Box sx={{ position: "absolute", bottom: "0", right: 0 }}>
                <img src={`/atm card/Vector.svg`} alt="" />
              </Box>
              {/* <Box sx={{ position: "absolute", bottom: "15px", right: 0 }}>
                <img src={`/atm card/Vector3.svg`} alt="" />
              </Box> */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{
                    color: "var(--accent-1)",
                    fontWeight: 400,
                    fontSize: "13px",
                  }}
                >
                  Current Balance
                </Typography>
                <SvgIcon component={Vector1} inheritViewBox />
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  $ 19,750
                </Typography>
              </Box>

              <Box sx={{ marginTop: "1rem" }}>
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  2357 1689 6251 0380
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  zIndex: 10,
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  06/24
                </Typography>

                <Box sx={{ paddingRight: "10px", zIndex: 10 }}>
                  <SvgIcon
                    component={Vector2}
                    inheritViewBox
                    sx={{ width: 40 }}
                  />
                  {/* <Typography variant="body1" sx={{}}> VISA</Typography> */}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
}
