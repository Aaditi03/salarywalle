import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Banner from "./Banner";
import "./LoanCalculator.css";
import "./Banner.css";
import work from "../assets/image/work.gif"

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTenure, setLoanTenure] = useState(1); // Loan tenure in days
  const [interestRate, setInterestRate] = useState(2.75);

  const minInterestRate = 0.5;
  const maxInterestRate = 2.75;
  const minLoanTenure = 1;
  const maxLoanTenure = 90;

  const calculateTotalInterest = () => {
    return loanAmount * (interestRate / 100) * loanTenure;
  };

  const calculateTotalAmount = () => {
    return loanAmount + calculateTotalInterest();
  };

  const totalInterest = calculateTotalInterest();
  const totalAmount = calculateTotalAmount();
  const totalDays = loanTenure;

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Loan Interest", value: totalInterest },
  ];

  const COLORS = ["#BFBBA9", "#9AA6B2", "#D8A6FF"];

  return (
    <div className="loan-calculator">
      <Banner />
      <section className="service-one">
        <div className="container">
          <div className="block-title text-center">
            <h1>
              <b>Personal Loan Calculator</b>
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 emi-range">
              <div className="calculation">
                {/* <h3 >Calculator</h3> */}

                {/* Loan Amount */}
                <div className="calculation-section">
                  <label>Loan Amount</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      value={loanAmount}
                      min="5000"
                      max="100000"
                      step="1000"
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="slider"
                    />
                    <div className="limits">Limits: ₹5,000 to ₹100,000</div>
                    <div className="slider-scale">
                      {[5000, 20000, 40000, 60000, 80000, 100000].map((value) => (
                        <div key={value} className="scale-item">
                          <div className="tick"></div>
                          <div className="scale-label">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider-value">₹{loanAmount.toLocaleString()}</div>
                </div>

                {/* Loan Tenure */}
                <div className="calculation-section">
                  <label>Loan Tenure (Days)</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      value={loanTenure}
                      min={minLoanTenure}
                      max={maxLoanTenure}
                      step="1"
                      onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                      className="slider"
                    />
                    <div className="limits">
                      Limits: {minLoanTenure} to {maxLoanTenure} Days
                    </div>
                    <div className="slider-scale">
                      {[1, 15, 30, 45, 60, 75, 90].map((value) => (
                        <div key={value} className="scale-item">
                          <div className="tick"></div>
                          <div className="scale-label">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider-value">{loanTenure} Days</div>
                </div>

                {/* Interest Rate */}
                <div className="calculation-section">
                  <label>Interest Rate</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      value={interestRate}
                      min={minInterestRate}
                      max={maxInterestRate}
                      step="0.05"
                      onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                      className="slider"
                    />
                    <div className="limits">
                      Limits: {minInterestRate}% to {maxInterestRate}%
                    </div>
                    <div className="slider-scale-interest">
                      {[minInterestRate, 1.0, 1.5, 2.0, 2.5, maxInterestRate].map((value) => (
                        <div key={value} className="scale-item">
                          <div className="tick"></div>
                          <div className="scale-label">{value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider-value">{interestRate.toFixed(2)}%</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 emi-circle">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={140}  // Adjust the size of the pie chart
                    fill="#82ca9d"
                    label={({ name, value }) => `₹${value.toLocaleString()}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Results Section */}
          <div className="row justify-content-center">
            <div className="col-md-10 emi-results">
              <div className="results">
                <h3 className="results-title">Loan Summary</h3>
                <div className="grid-container">
                  <div className="grid-item">
                    <div className="grid-icon">₹</div>
                    <div className="grid-label">Loan Amount</div>
                    <div className="grid-value">₹{loanAmount.toLocaleString()}</div>
                  </div>

                  <div className="grid-item">
                    <div className="grid-icon">📈</div>
                    <div className="grid-label">Total Interest</div>
                    <div className="grid-value">₹{totalInterest.toFixed(2)}</div>
                  </div>

                  <div className="grid-item">
                    <div className="grid-icon">🔢</div>
                    <div className="grid-label">Total Amount</div>
                    <div className="grid-value">₹{totalAmount.toLocaleString()}</div>
                  </div>

                  <div className="grid-item">
                    <div className="grid-icon">📅</div>
                    <div className="grid-label">Total Days</div>
                    <div className="grid-value">{loanTenure} Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="block-title text-center">
        <h1>
          <b>Personal Loan Calculator</b>
        </h1>
      </div>
      <div className="video-container text-center">
        <img 
          className="loan-calculator-gif" 
          src={work} 
          alt="Working process" 
        />
      </div>    
    </div>
  // </div>

  );
};
export default LoanCalculator;

