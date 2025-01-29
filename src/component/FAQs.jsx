import React from "react";
import Animation from "../assets/image/animated.mp4";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";

const FAQs = () => {
    // Animation for lines coming in one by one
    const lineAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <div>
            <video autoPlay loop muted className="background-video">
                <source src={Animation} type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>
            <Box
                sx={{
                    paddingTop: 3,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "#f9f9f9",
                    width: "100%", // Ensures full-width of the container
                }}
            >
                <Box
                    sx={{
                        borderRadius: "10px",
                        width: "80%", // Adjust width percentage (or use 'px' for fixed width)
                        maxWidth: "1000px", // Adjust max width if you want a limit
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "black",
                            mb: 3,
                            fontSize: { xs: "2rem", md: "3rem" },
                            padding: "0.5rem",
                            borderRadius: "8px",
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <p>
                        At SalaryWalle.com, a platform of Naman Finlease Private
                        Limited, an RBI-registered NBFC, we specialize in
                        providing short-term personal loans ranging from ₹5,000
                        to ₹1,00,000 exclusively to salaried individuals. Below
                        are some frequently asked questions to assist you:
                    </p>
                    <Paper
                        elevation={6}
                        sx={{
                            borderRadius: "8px",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                        }}
                    >
                        <div className="accordion-wrapper">
                            {[
                                {
                                    id: "faq1",
                                    question: "1. What is SalaryWalle.com?",
                                    answer: `SalaryWalle.com is a digital lending platform offering quick and convenient personal loans to salaried professionals in India. Our aim is to provide financial assistance with minimal documentation and swift disbursal.`,
                                },
                                {
                                    id: "faq2",
                                    question:
                                        "2. Who is eligible to apply for a loan?",
                                    answer: [
                                        "To be eligible for a personal loan, you must be:",
                                        "• Be a salaried individual aged between 21 and 60 years.",
                                        "• Have a minimum monthly net salary of ₹35,000.",
                                        "• Possess a valid government-issued ID and address proof.",
                                        "• Maintain an active bank account with a recognized bank in India.",
                                    ],
                                },

                                {
                                    id: "faq3",
                                    question: "3) How can I apply for a loan?",
                                    answer: [
                                        "Applying for a loan is simple:",
                                        "1.	Online Application: Visit our website and fill out the online application form with your personal and employment details.",
                                        "2.	Document Submission: Upload the required documents, including ID proof, address proof, recent salary slips, and bank statements.",
                                        "3.	Verification: Our team will review your application and documents.",
                                        "4.	Approval and Disbursal: Upon approval, the loan amount will be credited directly to your bank account.",
                                    ],
                                },
                                {
                                    id: "faq4",
                                    question:
                                        "4) What documents are required for the loan application?",
                                    answer: [
                                        "You will need to provide:",
                                        "•	A valid government-issued ID proof (e.g., Aadhaar Card, Passport, Voter ID).",
                                        "•	Address proof (e.g., Utility bills, Rental agreement).",
                                        "•Recent salary slips (last three months).",
                                        "•	Bank statements reflecting salary credits (last three months).",
                                    ],
                                },

                                {
                                    id: "faq5",
                                    question:
                                        "5) How long does the approval process take?",
                                    answer: `Our streamlined process ensures quick approvals. Once all documents are submitted and verified, loans are typically approved within a few hours, and funds are disbursed shortly thereafter.`,
                                },
                                {
                                    id: "faq6",
                                    question:
                                        "6) What are the interest rates and fees?",
                                    answer: `Interest rates vary based on the loan amount, tenure, and your credit profile. Detailed information about interest rates, processing fees, and any other charges will be transparently provided during the application process.`,
                                },
                                {
                                    id: "faq7",
                                    question: "7) How do I repay the loan?",
                                    answer: `You can repay through electronic transfers, post-dated cheques, or auto-debit mandates from your bank account.`,
                                },
                                {
                                    id: "faq8",
                                    question:
                                        "8) Is there a prepayment option?",
                                    answer: `Yes, you can prepay your loan. Please refer to our prepayment policy for any applicable charges or conditions.`,
                                },
                                {
                                    id: "faq9",
                                    question:
                                        "9) What happens if I miss a repayment?",
                                    answer: `Missing a repayment may attract late fees and can impact your credit score. We recommend setting up auto-debit to ensure timely payments.`,
                                },
                                {
                                    id: "faq10",
                                    question:
                                        "10)How can I contact customer support?",
                                    answer: [
                                        "For any queries or assistance, you can reach our customer support team at:",
                                        "•Email: info@salarywalle.com.",
                                        "•Phone: +91-XXXXXXXXXX",
                                        "•Address: S-370, Basement, Panchsheel Park, New Delhi, 110017.",
                                    ],
                                },
                            ].map((faq, index) => (
                                <Accordion
                                    key={faq.id}
                                    sx={{
                                        fontFamily: "cursive",
                                        marginBottom: "1rem",
                                        backgroundColor: "transparent",
                                        animation: `${lineAnimation} 0.5s ease-in-out ${
                                            index * 0.2
                                        }s forwards`,
                                        opacity: 0,
                                        transform: "translateY(20px)",
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                sx={{
                                                    color: "black", // Default color is black
                                                    transition:
                                                        "color 0.3s ease", // Smooth color transition
                                                    ".Mui-expanded &": {
                                                        color: "white", // Change to white when expanded
                                                    },
                                                    "&:hover": {
                                                        color: "white", // White icon on hover
                                                    },
                                                }}
                                            />
                                        }
                                        aria-controls={`${faq.id}-content`}
                                        id={`${faq.id}-header`}
                                        sx={{
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "transparent", // Black background on hover
                                                color: "white", // White text on hover
                                            },
                                            "&.Mui-expanded": {
                                                backgroundColor: "transparent",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        <Typography>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            animation: `${lineAnimation} 0.5s ease-in-out`,
                                        }}
                                    >
                                        {Array.isArray(faq.answer) ? (
                                            faq.answer.map((line, index) => (
                                                <Typography
                                                    key={index}
                                                    sx={{
                                                        marginBottom: "0.5rem",
                                                    }}
                                                >
                                                    {line}
                                                </Typography>
                                            ))
                                        ) : (
                                            <Typography>
                                                {faq.answer}
                                            </Typography>
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </Paper>
                </Box>
            </Box>
        </div>
    );
};

export default FAQs;
