import React from "react";
import DashboardLayout from "pageLayouts/DashboardLayout";
import { Box, Typography, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box p={1}>
        <Typography variant="h4">Car Details</Typography>
      </Box>

      <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={6}>
                        <Box
                            component="img"
                            src={"images/bugatti.jpeg"}
                            mb="8px"
                            sx={({ breakpoints }) => ({
                                width: "100%",
                                borderRadius: "15px",
                            })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                        <Typography
                            variant="h3"
                            color="white"
                            fontWeight="bold"
                        >
                            Bugatti Chiron X-Clusive Edition 2023
                        </Typography>
                        <Box display="flex" alignItems="center" my={3}>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                mr="6px"
                                sx={({ breakpoints, palette }) => ({
                                    color: palette.warning.main,
                                })}
                            >
                                ₺ 8.679.000
                            </Typography>
                            <Typography>
                                (Average Price)
                            </Typography>
                        </Box>
                      
                        <Typography
                            variant="h4"
                            color="text"
                            mb={2}
                        >
                            Other Features
                        </Typography>
                        <Box
                            p="20px"
                            sx={() => ({
                                backgroundColor: "#070b28",
                                marginTop: "10px",
                                borderRadius: "15px",
                            })}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={3} xl={3}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        - Engine
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={9} xl={9}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        : &nbsp;&nbsp;&nbsp;&nbsp; 8.0L W16 Engine
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={3} xl={3}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        - Horsepower
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={9} xl={9}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        : &nbsp;&nbsp;&nbsp;&nbsp; 1.500 HP
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={3} xl={3}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        - Gas Mileage
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={9} xl={9}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        : &nbsp;&nbsp;&nbsp;&nbsp; 5.5L/100km
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={3} xl={3}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        - Tyre Size
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={9} xl={9}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        : &nbsp;&nbsp;&nbsp;&nbsp; 255/35 R20
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={3} xl={3}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        - Top Speed
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={9} xl={9}>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        fontStyle="italic"
                                        mb={"5px"}
                                    >
                                        : &nbsp;&nbsp;&nbsp;&nbsp; 420 km/h
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
      </Box>


    </DashboardLayout>
  );
};

export default Dashboard;
