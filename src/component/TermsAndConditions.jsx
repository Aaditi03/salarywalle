import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Typography,
    Container,
    Paper,
    Divider,
    Slide,
    Fade,
} from "@mui/material";
import privacyImage from "../assets/image/Privacy Policy (1).webp";
import Animation from "../assets/image/animated.mp4";

const TermsAndConditions = () => {
    ``;
    const sections = [
        {
            title: "Terms & Conditions",
            content: [
                "Welcome to SalaryWalle.com. Please read these terms and conditions carefully before using our website and services. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you are advised not to use our services.",
            ],
        },
        {
            title: "1. Definitions",
            content: [
                "The term 'Application' refers to the mobile software developed by our company, designed to provide end-users with access to Salary Walle.",
                "The term 'Lender' refers to any bank or non-banking financial company (NBFC) with which our company has an agreement to approve, process, and disburse loans to customers through our platform.",
                "The term 'We' refers to Naman Finlease Private Limited, a Delhi-based NBFC established in 1997.",
                "The term 'Loan' refers to the financial assistance that you can apply for through our platform. The loan is subject to approval by the Lender under specific terms and conditions.",
                "The 'Loan Agreement' is the agreement between the Lender and the customer, either in physical or digital form.",
                "The term 'App' represents the mobile application made available to users.",
                "The 'Outstanding Amount' refers to the total loan, interest, and fees owed by you to the Lender by the due date.",
                "The term 'Platform' includes both the mobile app and the website.",
                "The term 'Services' pertains to the Lender’s ability to approve and provide short-term loans through our platform.",
                "The term 'User Data' refers to any information, documents, or materials provided by you.",
                "The term 'Website' corresponds to the company's online platform.",
            ],
        },
        {
            title: "2. Services",
            content: [
                "Our services allow you to apply for a loan if you meet the specific criteria outlined in the app. By using our services, you agree that Salary Walle is responsible for collecting, verifying, tracking, and validating your User Data, including documents and other information needed by the Lender to approve the loan. You give us permission to collect and store your User Data via the mobile application form available on the Platform.",
                "To access our services, you will need to register and log in using your third-party platform account. During this process, you will be required to submit and upload your personal information, including your name, email address, gender, date of birth, contact number, password, photo, and mobile phone number. This includes financial details such as bank statements, income information, PAN card details, and credit history from credit information companies such as Credit, CRIF Highmark, Equifax, etc. By signing up, you authorize Salary Walle to verify your credit history and access this data.",
                "You may be required to update your personal information periodically to ensure accuracy and compliance with RBI's KYC guidelines. Salary Walle undertakes all actions on your behalf with your explicit permission. Once verified, you may become eligible for loan approval, subject to the Lender's criteria.",
                "You will also need to complete additional forms such as ECS or NACH mandates, provide checks, or any other documents requested by the Lender. The company may also collect physical documents, including signatures.",
                "The approved loan will be disbursed into your account as specified in the app. You are responsible for repaying the loan to the Lender as outlined in your sanction letter.",
                "If you uninstall or discontinue using our services, you remain responsible for any outstanding balances. You are solely accountable for all activities conducted through your User Account, and Salary Walle cannot be held liable for any consequences arising from its use. You agree to maintain the confidentiality of your account credentials.",
            ],
        },
        {
            title: "3. Loan Application Process",
            content: [
                "The loan application process at SalaryWalle includes registration, filling out the application form, document submission, and credit assessment. Approval of loans is at the sole discretion of Datta Finance and Trading Private Limited.",
            ],
        },
        {
            title: "4. General Terms",
            content: [
                "1.1. SalaryWalle.com is a platform operated by Naman Finlease Private Limited, an RBI-registered NBFC, offering short-term personal loans exclusively to salaried individuals.",
                "1.2. Loans are provided in the range of ₹5,000 to ₹1,00,000, subject to eligibility and approval.",
                "1.3. Use of this website and our services is restricted to individuals who are above the age of 21 years and below 58 years.",
            ],
        },
        {
            title: "5. Eligibility Criteria",
            content: [
                "2.1. To apply for a loan, the borrower must meet the following criteria:",
                "•	Be a salaried individual employed in India.",
                "•	Have a minimum monthly income of ₹35,000.",
                "•	Provide valid identity proof (Aadhaar, PAN, etc.) and address proof.",
                "•	Maintain a valid and active bank account.",
                "2.2. The applicant must submit accurate and complete information during the loan application process.",
                "Misrepresentation or fraudulent information will lead to immediate rejection of the application and potential legal action.",
            ],
        },
        {
            title: "6. Loan Terms",
            content: [
                "3.1. Loan Tenure: Loans are offered for a tenure of up to 90 days, depending on the loan amount and repayment capacity.",
                "3.2. Interest Rates: Interest rates are determined based on the applicant's credit profile, loan amount, and tenure. ",
                "3.3. Processing Fee: A non-refundable processing fee will be charged.",
                "3.4. Repayment: Borrowers are required to repay the loan auto-debit, UPI, IMPS or NEFT.",
            ],
        },
        {
            title: "7. Application and Approval Process",
            content: [
                "4.1. Submitting a loan application does not guarantee approval. Approval is subject to:",
                "•	Verification of submitted documents.",
                "•	Evaluation of creditworthiness.",
                "•	Discretion of SalaryWalle.com.",
                "4.2. SalaryWalle.com reserves the right to reject any loan application without providing specific reasons.",
            ],
        },
        {
            title: "8. Late Payment and Default",
            content: [
                "5.1. Borrowers are required to repay the loan as per the agreed schedule.",
                "5.2. In case of delayed payments:",
                "•	A late payment penalty on the overdue amount will be charged.",
                "•	Continued delays may result in reporting to credit bureaus, which can negatively affect your credit score.",
                "5.3. In the event of default, SalaryWalle.com reserves the right to:",
                "•	Initiate legal proceedings to recover the outstanding amount.",
                "•	Recover the amount from the guarantor (if applicable).",
            ],
        },
        {
            title: "9.  Cancellation Policy",
            content: [
                " 6.1. Once the loan amount is disbursed to the borrower's account, it cannot be cancelled.",
                "  6.2. Borrowers may prepay the loan by notifying SalaryWalle.com and settling the outstanding principal along with any applicable charges.",
            ],
        },
        {
            title: "10. Use of Information",
            content: [
                "7.1. By using SalaryWalle.com, you consent to the collection, storage, and processing of your personal information in accordance with our Privacy Policy.",
                "7.2. SalaryWalle.com may share your information with third-party service providers for verification and processing purposes.",
            ],
        },
        {
            title: "11. Intellectual Property",
            content: [
                "8.1. All content, including logos, text, images, and software, on SalaryWalle.com is the property of Naman Finlease Private Limited.",
                "8.2. Unauthorized use or reproduction of any material from this website is strictly prohibited.",
            ],
        },
        {
            title: "12. Limitation of Liability",
            content: [
                "9.1. SalaryWalle.com will not be liable for:",
                "•	Any indirect, incidental, or consequential damages arising from the use of our platform.",
                "•	Delays in loan disbursement caused by external factors beyond our control.",
                "9.2. We make no guarantees regarding uninterrupted access to our website or services.",
            ],
        },
        {
            title: "13. Governing Law and Jurisdiction",
            content: [
                "10.1. These terms and conditions are governed by the laws of India.",
                "10.2. Any disputes arising out of or in connection with the use of SalaryWalle.com shall be subject to the exclusive jurisdiction of the courts of New Delhi.",
            ],
        },
        {
            title: "14. Amendments",
            content: [
                " SalaryWalle.com reserves the right to modify or update these terms and conditions at any time. Users are advised to review this page periodically for any changes.",
            ],
        },
        {
            title: "15. Contact Us",
            content: [
                "  For any questions or clarifications regarding these terms, you can contact us at:",
                "  Email: info@salarywalle.com",
                "  Customer Care: +91-XXXXXXXXXX",
            ],
        },
        // {
        //     title: "16. License",
        //     content: [
        //         "To use the services, you must download and install the app. By accessing the services, you confirm that you are of legal age and able to understand and agree to these terms. You are granted a limited right to download, install, and use the app on compatible devices. The app is licensed, not sold, to you and is for personal use only.",
        //     ],
        // },
        // {
        //     title: "17. Restrictions",
        //     content: [
        //         "By using our platform, you agree to the following:",
        //         "• Do not engage in any fraudulent activity or misuse the platform for illegal purposes.",
        //         "• Do not copy, sell, or redistribute any part of the platform.",
        //         "• Do not upload malicious content or viruses that could harm the platform or associated networks.",
        //         "• Follow all applicable laws and regulations when using the platform.",
        //     ],
        // },
        // {
        //     title: "18. Proprietary Rights",
        //     content: [
        //         "By registering with Salary Walle, you agree to respect and uphold our intellectual property rights, including any trademarks or service marks. Unauthorized use of such property may violate applicable laws.",
        //     ],
        // },
        // {
        //     title: "19. Termination",
        //     content: [
        //         "Salary Walle reserves the right to terminate these terms under specific conditions, such as:",
        //         "• Violation of these terms",
        //         "• Legal obligations",
        //         "• Discontinuation of services",
        //         "If terminated, your access to the platform will be revoked, and you are responsible for settling any outstanding debts.",
        //     ],
        // },
        // {
        //     title: "20. Disclaimer of Warranties",
        //     content: [
        //         "By using the platform, you agree that the services are provided on an 'as is' and 'as available' basis. Salary Walle does not guarantee uninterrupted or error-free services and is not liable for any damage caused by the use of the platform.",
        //     ],
        // },
        // {
        //     title: "21. Indemnity",
        //     content: [
        //         "You agree to indemnify Salary Walle, its affiliates, employees, and partners against any claims arising from your violation of these terms, misuse of the platform, or violation of any laws.",
        //     ],
        // },
        // {
        //     title: "22. Limitations of Liability",
        //     content: [
        //         "Salary Walle is not liable for any direct, indirect, or incidental damages arising from your use of the platform or services.",
        //     ],
        // },
        // {
        //     title: "23. Force Majeure",
        //     content: [
        //         "Salary Walle will not be liable for any disruptions caused by events outside its control, such as natural disasters or changes in regulations.",
        //     ],
        // },
        // {
        //     title: "24. Cancellation and Refund Policy",
        //     content: [
        //         "(i) Pre-Disbursement Cancellation: Cancellation is allowed if the loan has been sanctioned but not yet disbursed.",
        //         "(ii) Post-Disbursement Cancellation: If cancelled within 24 hours of disbursement, the principal amount must be repaid.",
        //         "(iii) Refunds for overpayments will be processed within 5-7 days.",
        //     ],
        // },
        // {
        //     title: "25. Privacy Policy",
        //     content: [
        //         "Your personal information is collected and processed as outlined in our Privacy Policy. For more information, refer to our Privacy Policy on the website.",
        //     ],
        // },
        // {
        //     title: "26. Changes",
        //     content: [
        //         "Salary Walle reserves the right to update these terms at any time. Continued use of the platform constitutes acceptance of these changes.",
        //     ],
        // },
        // {
        //     title: "27. Governing Law and Jurisdiction",
        //     content: [
        //         "These terms are governed by the laws of Delhi, India. Any disputes will be subject to the jurisdiction of courts in Delhi.",
        //     ],
        // },
        // {
        //     title: "28. Miscellaneous",
        //     content: [
        //         "These terms, along with the Loan Agreement, Mobile Application Form, and Privacy Policy, constitute the complete agreement between you and Salary Walle.",
        //     ],
        // },
        // {
        //     title: "29. Violations",
        //     content: [
        //         "If you have concerns or complaints about these terms, please contact us at info@Salary Walle.com.",
        //     ],
        // },
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
        <div ref={policyRef}>
            <div>
                <video autoPlay loop muted className="background-video">
                    <source src={Animation} type="video/mp4" />
                    <p>Your browser does not support the video tag.</p>
                </video>
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
                                    Terms And Conditions
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
                                            (line, lineIndex) => (
                                                <Fade
                                                    in={isVisible}
                                                    timeout={
                                                        1200 +
                                                        sectionIndex * 500 +
                                                        lineIndex * 500
                                                    }
                                                    key={lineIndex}
                                                >
                                                    <Typography>
                                                        {line}
                                                    </Typography>
                                                </Fade>
                                            )
                                        )}
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                </div>
                            ))}
                        </Paper>
                    </Container>
                </Box>
            </div>{" "}
        </div>
    );
};

export default TermsAndConditions;
