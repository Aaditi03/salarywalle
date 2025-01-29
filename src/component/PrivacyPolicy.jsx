import React, { useEffect, useRef, useState } from "react";
import Animation from "../assets/image/animated.mp4";

import {
    Box,
    Typography,
    Container,
    Paper,
    Divider,
    Slide,
    Fade,
} from "@mui/material";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Privacy Policy",
            content: [
                "At SalaryWalle.com, operated under the RBI-registered NBFC Naman Finlease Private Limited, we are committed to protecting the privacy of our customers. This Privacy Policy outlines how we collect, use, store, and safeguard your personal information when you use our services. By accessing or using SalaryWalle.com, you agree to the practices described in this policy.",
            ],
        },

        {
            content: [
                "This website, Salary Walle.com, is owned and operated by Naman Finlease Private Limited , headquartered at  D-190, Sector 74, Phase 8, Industrial Area, Mohali - 160071. The Company operates under the brand name Salary Walle (which expression shall include its affiliates, successors, and permitted assigns). Salary Walle is committed to safeguarding the privacy of its users and ensuring transparency in how their data is handled. If you do not agree with this policy or any part of it, please refrain from using our website, mobile applications, or any related services.",
            ],
        },

        {
            content: [
                "At Salary Walle, a subsidiary of Naman Finlease Private Limited, we value the trust you place in us. We are dedicated to upholding the highest ethical standards in the collection, usage, and protection of your information. Your privacy is our priority. This policy governs the use of our website, mobile applications, products, and services. By accessing or using our services, you acknowledge and accept this Privacy Policy and our Terms of Use.",
            ],
        },

        {
            content: [
                "We recognize your concerns regarding the collection, use, and sharing of your personal information. Rest assured, we take appropriate measures to safeguard your data. Please review this Privacy Policy carefully alongside the Terms of Use provided on our website. Your continued use of our website or services constitutes your agreement to this policy. If you do not agree, please discontinue using our platforms.",
            ],
        },
        {
            content: [
                "By accepting this Privacy Policy, you explicitly consent to Salary Walle's collection, retention, processing, use, and disclosure of your personal information.",
            ],
        },

        {
            title: "1. Information We Collect",
            content: [
                "To provide you with seamless personal loan services, we may collect the following information:",
            ],
        },
        {
            title: "1.1 Personal Information",
            content: [
                "•	Name, date of birth, gender, and marital status.",
                "• Aadhaar number and PAN card details for identity verification.",
                "• Bank account details and salary slips for financial verification.",
            ],
        },
        {
            title: "1.2 Contact Information",
            content: [
                "• Mobile number and email address for communication purposes.",
            ],
        },

        {
            title: "1.3 Employment Details",
            content: ["•	Current employer, designation, and monthly income."],
        },

        {
            title: " 1.4 Additional Information",
            content: [
                "•	Any other data provided voluntarily while filling out loan application forms or through customer support interactions.",
            ],
        },

        {
            title: "2. How We Use Your Information",
            content: [
                "We use the collected information for the following purposes:",
                "• Loan Processing: To assess eligibility and process your loan application.",
                "• Verification: To comply with legal and regulatory requirements, including KYC and AML checks.",
                "• Communication: To notify you about your application status, repayment reminders, or promotional offers.",
                "• Customer Support: To address your queries and improve our services.",
                "• Analytics: To understand user preferences and enhance the website’s functionality.",
            ],
        },
        {
            title: "3. Sharing of Information",
            content: [
                "We respect your privacy and ensure your information is shared only when necessary: ",
                "• With Regulatory Authorities: To comply with applicable laws and regulations.",
                "• With Service Providers: For identity verification, credit checks, or payment processing.",
                "•	With Law Enforcement Agencies: If required by law or to protect our legal rights.",
                "•	With Your Consent: For purposes explicitly agreed upon by you.",
            ],
        },
        {
            title: "4. Data Security",
            content: [
                "We employ robust security measures to protect your data:",
                " • Encryption: Your sensitive data is encrypted during storage and transmission.",
                " •	Access Control: Only authorized personnel can access your information.",
                " •	Regular Audits: Our systems are regularly monitored and updated to prevent breaches. ",
                " • Despite our best efforts, no system is entirely foolproof. In case of any data breach, we will notify affected users promptly.",
            ],
        },

        {
            title: " 5. Data Retention",
            content: [
                "We retain your personal information:",
                " • As long as required to provide our services.",
                " •	As mandated by applicable legal and regulatory requirements.",
                " •	Until the closure of your account and repayment of any outstanding loans.",
                "After the retention period, your data will be securely deleted or anonymized.",
            ],
        },

        {
            title: "6. Your Rights",
            content: [
                "You have the right to:",
                " •	Access Your Data: Request a copy of the personal information we hold about you.",
                " •	Update Your Data: Correct any inaccuracies in your information.",
                " •	Withdraw Consent: Opt-out of receiving promotional communications at any time.",
                " •	Request Deletion: Request the deletion of your data, subject to regulatory obligations. ",
                " For any such requests, please contact us at info@salarywalle.com.",
            ],
        },
        {
            title: "7. Cookies Policy",
            content: [
                "We use cookies to improve your experience on SalaryWalle.com:",
                "•	Essential Cookies: Required for website functionality.",
                "•	Analytical Cookies: Help us understand how you use our website.",
                "•	Advertising Cookies: Deliver personalized ads based on your preferences.You can manage or disable cookies through your browser settings",
            ],
        },
        {
            title: "8. Third-Party Links",
            content: [
                "Our website may contain links to third-party websites or services. Please note that we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.",
            ],
        },
        {
            title: "9. Updates to This Policy",
            content: [
                "We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. The updated policy will be posted on our website with the effective date mentioned. We encourage you to review this page periodically.",
            ],
        },
        {
            title: "10. Contact Us",
            content: [
                "If you have any questions or concerns about this Privacy Policy or the handling of your information, please reach out to us:",
                "•	Email: info@salarywalle.com",
                "•	Phone: xxxxxxxxxx ",
                "•	Address: S-370, Basement, Panchsheel Park, New Delhi, 110017.",
                "By using SalaryWalle.com, you agree to this Privacy Policy. Thank you for trusting us to meet your financial needs.",
            ],
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const policyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        if (policyRef.current) observer.observe(policyRef.current);

        return () => {
            if (policyRef.current) observer.unobserve(policyRef.current);
        };
    }, []);

    return (
        <div>
            <video autoPlay loop muted className="background-video">
                <source src={Animation} type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>
            <div ref={policyRef}>
                <Box
                    sx={{
                        minHeight: "100vh",
                        padding: { xs: 2, md: "30px" },
                        // backgroundColor: "#f9f9f9",
                    }}
                >
                    {/* Image Section */}
                    {/* <Box
                    sx={{
                    backgroundColor: '#f9f9f9',

                    position: 'relative',
                    width: '100%',
                    height: { xs: '20vh', md: '60vh' },
                    overflow: 'hidden',
                    borderRadius: '50px',
                    mb: 5,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Slide direction="left" in={isVisible} timeout={1000}>
                        <img 
                            src={privacyImage} 
                            alt="Privacy Policy" 
                            style={{
                                width: '100%', 
                                height: 'auto', 
                                objectFit: 'cover',
                                borderRadius: '50px'
                            }} 
                        />
                    </Slide>
                </Box> */}

                    <Container maxWidth="lg">
                        {/* Prominent Heading */}
                        <Box sx={{ textAlign: "center", mt: 4 }}>
                            <Fade in={isVisible} timeout={1000}>
                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    sx={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: { xs: "2rem", md: "3rem" },
                                        letterSpacing: "0.05em",
                                        transition:
                                            "transform 0.3s ease-in-out",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                >
                                    Privacy Policy
                                </Typography>
                            </Fade>
                        </Box>

                        {/* Policy Content */}
                        <Paper
                            elevation={3}
                            sx={{
                                borderRadius: "30px",
                                overflow: "hidden",
                                backgroundColor: "transparent",
                                padding: { xs: 2, md: 8 },
                            }}
                        >
                            {sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    <Box
                                        sx={{
                                            transition:
                                                "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                        }}
                                    >
                                        <Fade
                                            in={isVisible}
                                            timeout={1000 + sectionIndex * 500}
                                        >
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {section.title}
                                            </Typography>
                                        </Fade>
                                        {section.content.map(
                                            (line, lineIndex) => {
                                                if (typeof line === "string") {
                                                    return (
                                                        <Fade
                                                            in={isVisible}
                                                            timeout={
                                                                1200 +
                                                                sectionIndex *
                                                                    500 +
                                                                lineIndex * 500
                                                            }
                                                            key={lineIndex}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    textAlign:
                                                                        "justify", // Default alignment for regular strings
                                                                    ml: 0,
                                                                }}
                                                            >
                                                                {line}
                                                            </Typography>
                                                        </Fade>
                                                    );
                                                } else if (
                                                    typeof line === "object"
                                                ) {
                                                    return (
                                                        <Fade
                                                            in={isVisible}
                                                            timeout={
                                                                1200 +
                                                                sectionIndex *
                                                                    500 +
                                                                lineIndex * 500
                                                            }
                                                            key={lineIndex}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    textAlign:
                                                                        line.align ||
                                                                        "justify", // Use specified alignment
                                                                    ml: line.indent
                                                                        ? 1
                                                                        : 0, // Indent if specified
                                                                }}
                                                            >
                                                                {line.text}
                                                            </Typography>
                                                        </Fade>
                                                    );
                                                }
                                            }
                                        )}
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                </div>
                            ))}
                        </Paper>
                    </Container>
                </Box>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
