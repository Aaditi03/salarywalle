import React from "react";
import { Link } from "react-router-dom";
import WarningIcon from "@mui/icons-material/Warning"; // Import Warning icon
import AXIS from "../assets/image/axis.png";
import { Grid, Box, Typography, Button, Divider } from "@mui/material";
import Animation from "../assets/image/animated.mp4";

const RepayLoan = () => {
    return (
        <div>
            <video autoPlay loop muted className="background-video">
                <source src={Animation} type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>

            <Box
                sx={{
                    // background: "#f9f9f9",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    padding: { xs: "20px", sm: "45px" }, // Adjust padding for small screens
                }}
            >
                {/* Marquee Section */}
                <Box
                    sx={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        width: "100%",
                        // backgroundColor: "#f9f9f9",
                        border: "none !important",
                        py: 1,
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            display: "inline-block",
                            animation: "scroll-text 20s linear infinite",
                            fontSize: { xs: "14px", sm: "18px" },
                            color: "#B22222",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        "Beware of fraud! Always use our secure Repayment
                        Website Link for loan payments. Salary Walle is not
                        responsible for payments made to other accounts."
                    </Typography>

                    {/* Keyframe animation using Material-UI */}
                    <style>
                        {`
                            @keyframes scroll-text {
                                from {
                                    transform: translateX(100%);
                                }
                                to {
                                    transform: translateX(-100%);
                                }
                            }
                        `}
                    </style>
                </Box>

                {/* Warning Message */}
                <Box
                    sx={{
                        textAlign: "center",
                        borderRadius: "30px",
                        padding: { xs: "5px", md: "16px" },
                        maxWidth: "80vw",
                        margin: "0 auto",
                        mt: 6,
                    }}
                >
                    <Typography
                        variant="h5"
                        color="black"
                        sx={{
                            fontFamily: "Inter",
                            fontSize: { xs: "22px", sm: "30px" }, // Adjust font size for small screens
                            lineHeight: "50px",
                            letterSpacing: "-0.408px",
                            mb: 2,
                        }}
                    >
                        <strong style={{ fontSize: "30px", color: "black" }}>
                            Warning:
                        </strong>{" "}
                        We are not liable for any payments made in <br />
                        personal accounts of employees. Please make all <br />
                        payments in the company’s account only.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <WarningIcon color="error" />
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 1,
                            color: "black",
                            fontFamily: "Inter",
                            fontSize: { xs: "16px", sm: "25px" }, // Adjust font size for small screens
                            lineHeight: "36px",
                            letterSpacing: "-0.408px",
                            mb: 5,
                        }}
                    >
                        Please repay your loan and interest amount into the
                        following bank a/c:
                    </Typography>
                </Box>

                {/* Main Content */}
                <Box
                    mt={10}
                    sx={{
                        background: "#D9D9D9",
                        borderRadius: "30px",
                        margin: 1,
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        {/* Heading Section */}
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: 500,
                                    mb: 4,
                                    textAlign: { xs: "center", md: "left" }, // Center on small screens, left-align on larger screens
                                    paddingX: { xs: "20px", sm: "50px" },
                                }}
                            >
                                Please share a screenshot of your transfer{" "}
                                <br />
                                from your bank/Google Pay to <br />
                                <strong style={{ color: "#fc8403" }}>
                                    recovery@Salary Walle.com
                                </strong>
                                .
                            </Typography>
                        </Grid>

                        {/* Account Details Section */}
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{ marginLeft: { xs: 3, md: 0 } }}
                        >
                            <Box
                                component="form"
                                sx={{
                                    marginRight: 3.5,
                                    marginBottom: 3.5,
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: "center",
                                    padding: "20px",
                                    borderRadius: "20px",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                    background: "#C2C2C2",
                                }}
                            >
                                {/* Left Side - Centered Bank Image and Name */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        color: "white",
                                        mr: 3,
                                        textAlign: "center",
                                        mb: { xs: 3, sm: 0 },
                                    }}
                                >
                                    <img
                                        src={AXIS}
                                        alt="AXIS Bank"
                                        style={{
                                            width: "50px",
                                            marginBottom: "8px",
                                        }}
                                    />
                                </Box>

                                {/* Vertical Divider */}
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{ backgroundColor: "white", mx: 5 }}
                                />

                                {/* Right Side - Bank Details */}
                                <Box sx={{ color: "white" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                fontWeight: "bold",
                                                minWidth: {
                                                    xs: "100px",
                                                    sm: "130px",
                                                },
                                            }}
                                        >
                                            Bank Name
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginLeft: { xs: 2, md: 3 },
                                            }}
                                        >
                                            Axis Bank
                                        </Typography>
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                fontWeight: "bold",
                                                minWidth: {
                                                    xs: "100px",
                                                    sm: "130px",
                                                },
                                            }}
                                        >
                                            Name
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginLeft: { xs: 2, md: 3 },
                                            }}
                                        >
                                            Naman Finlease Private Limited
                                        </Typography>
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                fontWeight: "bold",
                                                minWidth: {
                                                    xs: "100px",
                                                    sm: "130px",
                                                },
                                            }}
                                        >
                                            Account Number
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginLeft: { xs: 2, md: 3 },
                                            }}
                                        >
                                            920020009314172
                                        </Typography>
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                fontWeight: "bold",
                                                minWidth: {
                                                    xs: "100px",
                                                    sm: "130px",
                                                },
                                            }}
                                        >
                                            IFSC Code
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginLeft: { xs: 2, md: 3 },
                                            }}
                                        >
                                            UTIB0000160
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default RepayLoan;
