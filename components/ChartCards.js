import {
  Box,
  Card,
  CardContent,
  Grid,
  SvgIcon,
  Typography,
} from "@mui/material";
import { cardsContent } from "../data/content";
import MoreHor from "../public/icons/more-horizontal.svg";

export default function ChartCards() {
  return (
    <>
      {cardsContent.map((card) => (
        <Grid key={card.price} item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 345,
              background: "var(--accent-2)",
              position: "relative",
            }}
            elevation={0}
          >
            <CardContent
              sx={{ color: "var(--accent-1)", position: "relative" }}
            >
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
                  {card.label}
                </Typography>
                <SvgIcon component={MoreHor} inheritViewBox />
              </Box>
              <Box sx={{ marginBottom: "1rem" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--accent-1)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  $ {card.price.toLocaleString()}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: `var(--accent-${card.positive ? "5" : "4"})`,
                  }}
                >
                  %{card.change}
                </Typography>
              </Box>
              <Box sx={{ position: "absolute", bottom: "-10px", right: 0 }}>
                {/* <SvgIcon component={card.slope} inheritViewBox /> */}
                <img src={`/dash card/${card.slopePath}.svg`} alt="" />
                {/* <img src="/dash card/slope1.svg" /> */}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
