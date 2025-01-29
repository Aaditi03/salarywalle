import React, { useState } from "react";
import {
    FaHeart,
    FaMoneyBillWave,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import test1Image from "../assets/image/test1.jpeg"; // Import your image
import test2Image from "../assets/image/test2.jpeg"; // Another example image
import test3Image from "../assets/image/test3.jpeg"; // Another example image
import test4Image from "../assets/image/test4.jpeg"; // Another example image
import test5Image from "../assets/image/test5.jpeg"; // Another example image
import "./Testimonial.css";

const testimonials = [
    {
        image: test1Image,
        content:
            "I had a very smooth experience with Salary Walle. Their customer support was really helpful, and the loan was disbursed promptly. Highly recommend!",
        name: "Ravi Sharma",
    },
    {
        image: test2Image,
        content:
            "Hi, this is Raj. It was a pleasure to connect with Salary Walle. In such a short time, they processed my loan with minimal paperwork and genuine service. Overall, a great experience 😊",
        name: "Raj Kumar",
    },
    {
        image: test3Image,
        content:
            "My experience with Salary Walle was fantastic. The support team was very supportive and made sure my loan was processed quickly and efficiently.",
        name: "Arjun Yadav",
    },
    {
        image: test4Image,
        content:
            "I’m grateful for the support I received from the Salary Walle team. The entire process was fast and hassle-free. Their customer service was exceptional!",
        name: "Neha Gupta",
    },
    {
        image: test5Image,
        content:
            "Salary Walle made getting my loan so easy. From start to finish, everything was handled smoothly, and the team was always there to answer any questions I had.",
        name: "Priya Singh",
    },
];

const TestimonialSection = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex(
            (prevIndex) => (prevIndex + 1) % testimonials.length
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const testimonial = testimonials[currentTestimonialIndex];

    return (
        <div className="testimonial-section">
            {/* Header with People, Heart icon, and MoneyTap icon */}
            <div className="testimonial-header">
                <h1 className="header-text">
                    People <FaHeart className="heart-icon" />
                </h1>
            </div>

            <div className="testimonial-container">
                <div className="testimonial-image">
                    <img src={testimonial.image} alt="testimonial" />
                </div>
                <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonial.content}"</p>
                    <div className="testimonial-info">
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-company">
                            {testimonial.company}
                        </p>
                    </div>
                    <div className="testimonial-icons">
                        <FaHeart className="icon heart" />
                        {/* <FaMoneyBillWave className="icon moneytap" /> */}
                    </div>
                    <div className="testimonial-buttons">
                        <button
                            className="next-button"
                            onClick={prevTestimonial}
                        >
                            <FaChevronLeft /> {/* Left arrow for previous */}
                        </button>
                        <button
                            className="next-button"
                            onClick={nextTestimonial}
                        >
                            <FaChevronRight /> {/* Right arrow for next */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
