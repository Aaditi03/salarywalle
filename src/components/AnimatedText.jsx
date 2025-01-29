import React, { useEffect, useState } from "react";
import "./style.css"; // Include the updated CSS file

const ParagraphComponent = () => {
    const [isInView, setIsInView] = useState(false);

    // Intersection Observer to detect when content comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true); // Trigger animation when in view
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the content is in view
        );

        const element = document.getElementById("scrollContent");
        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="center-container">
            {/* Header Section */}
            <h1 className="header-text">Welcome to Salary Walle</h1>

            {/* Paragraph Section */}
            <p
                className={`center-text ${isInView ? "animate-lines" : ""}`}
                id="scrollContent"
            >
                <span>
                    At Salary Walle, we understand the financial struggles many
                    individuals face.
                </span>
                <span>
                    At Salary Walle, we are at the forefront of digital lending,
                    offering innovative financial solutions as the fintech arm
                    of Naman Finlease Private Limited, a trusted NBFC based in
                    Delhi.
                </span>
                <span>
                    We are a RBI licensed NBFC, offering quick and assured
                    personal loans to salaried individuals. Our Personal Loans
                    are designed to give you hope especially at the end of the
                    month when you are desperate for quick money.
                </span>
                <span>
                    Apply easily and safely on our secure website for a Personal
                    loan and enter your basic information to get approved within
                    30 minutes. Online personal loans are available exclusively
                    for all salaried customers with a minimum salary of INR
                    30,000 monthly. We want to be a reliable partner to help you
                    financially, so that you can be happy again!
                </span>
            </p>
        </div>
    );
};

export default ParagraphComponent;
