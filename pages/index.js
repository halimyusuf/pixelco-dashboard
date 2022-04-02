import { Box, Card, CardContent, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ChartCards from "../components/ChartCards";
import AtmCard from "../components/AtmCard";
import { DashboardChart } from "../components/DashboardChart";
import Income from "../components/Income";
import LatestTransactions from "../components/LatestTransactions";
import Analytics from "../components/Analytics";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pixelco Dashboard</title>
        <meta
          name="description"
          content="Pixelco Dashboard using next.js and Mui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ maxWidth: "100%" }}>
        <Grid container spacing={2}>
          <Grid item container sm={12} md={7} lg={9} spacing={2}>
            <ChartCards />
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <AtmCard />
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  background: "var(--accent-2)",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <DashboardChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Income />
            </Grid>
            <Grid item xs={12} lg={6}>
              <LatestTransactions />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={3}
            minHeight
            spacing={2}
            direction="column"
            flexWrap="wrap"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              sx={{
                paddingBottom: "1rem",
                display: { xs: "none", sm: "block" },
              }}
            >
              <AtmCard />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Analytics />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
