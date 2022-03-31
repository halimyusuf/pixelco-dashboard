import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { incomeData, incomePrices } from "../data/incomeData";

export default function Income() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "57%",
        background: "var(--accent-2)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          rigth: 0,
          width: "100%",
        }}
      >
        <Card
          sx={{
            margin: "0 0 1rem 0",
            background: "var(--accent-2)",
            // textAlign: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              color: "var(--accent-1)",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
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
                Income
              </Typography>

              <Box></Box>
            </Box>

            <Box
              sx={{
                height: "100%",
                display: "flex",
                flex: 1,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  justifyContent: "space-between",
                  paddingBottom: "25px",
                }}
              >
                {incomePrices.map((ip) => (
                  <Box key={ip}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{
                        color: "var(--accent-1)",
                        fontWeight: 400,
                        fontSize: "12px",
                        textAlign: "left",
                      }}
                    >
                      $ {ip.toLocaleString()}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  paddingLeft: "20px",
                  display: "flex",
                  height: "100%",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                {incomeData.map((a) => (
                  <Box
                    key={a.month}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        background: "var(--accent-3)",
                        height: "100%",
                        borderRadius: "100px",
                        marginBottom: "10px",
                        overflow: "hidden",
                        transform: "rotate(180Deg)",
                      }}
                    >
                      <Box
                        sx={{
                          height: `${Math.round((a.amount / 30000) * 100)}%`,
                          width: "100%",
                          background: "var(--gradient-3)",
                          borderRadius: "100px",
                        }}
                      >
                        {" "}
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{
                          color: "var(--accent-1)",
                          fontWeight: 400,
                          fontSize: "10px",
                          textAlign: "center",
                        }}
                      >
                        {a.month}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
