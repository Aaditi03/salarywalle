import React, { useEffect, useState } from "react";
import "./AboutAnimated.css";

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
        if (element) observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="responsive-container">
            <h1 className="header-text">
                Welcome to Salary Walle <br /> Your Digital Lending Buddy
            </h1>

            <p
                className={`center-text ${isInView ? "animate-lines" : ""}`}
                id="scrollContent"
            >
                <span>
                    At Salary Walle, we understand the financial struggles many
                    individuals face.
                </span>
                <span>
                    Our mission is to make accessing loans easier and more
                    convenient for everyone, especially those who may not
                    qualify for traditional financing.
                </span>
                <span>
                    We provide quick, hassle-free loans with transparent terms,
                    so you can focus on your goals and dreams without the stress
                    of complicated paperwork or long waiting periods.
                </span>
                <span>
                    Whether you need a loan for education, medical expenses, or
                    personal needs, we are here to help you every step of the
                    way.
                </span>
            </p>
        </div>
    );
};

export default ParagraphComponent;
