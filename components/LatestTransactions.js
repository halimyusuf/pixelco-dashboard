import { Card, CardContent, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { transactions } from "../data/transactions";
import MoreHor from "../public/icons/more-horizontal.svg";

export default function LatestTransactions() {
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
            background: "var(--accent-2)",
            borderRadius: "10px",
            margin: "0 0 1rem 0",
            // textAlign: "center",
            height: "100%",
            width: "100%",
          }}
          elevation={0}
        >
          <CardContent
            sx={{
              color: "var(--accent-1)",
              width: "100%",
            }}
          >
            <Box
              sx={{
                marginBottom: "0.25rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{
                  color: "var(--accent-1)",
                }}
              >
                Latest Transactions
              </Typography>
              <SvgIcon component={MoreHor} inheritViewBox />
            </Box>
            <Box>
              {transactions.map((t, i) => (
                <Box
                  key={t.text}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3% 0",
                    borderTop: i !== 0 ? "1px solid var(--accent-3)" : "",
                  }}
                >
                  <Box>
                    <Typography variant="body2" noWrap>
                      {t.text}
                    </Typography>
                  </Box>
                  <Box sx={{ color: `var(--accent-${t.deposit ? "5" : "4"})` }}>
                    $ {t.deposit ? "+" : "-"}
                    {t.amount.toLocaleString()}
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
