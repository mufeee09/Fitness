
import React, { useState } from "react";
import "./Plans.css";

const PaymentSelection = () => {
  const [plan, setPlan] = useState("individual");
  const [duration, setDuration] = useState(3);

  const durations = {
    individual: [100, 200, 300],
    buddy: [100, 200, 300],
  };

  const prices = {
    individual: { 100: 9999, 200: 18999, 300: 26999 },
    buddy: { 100: 14999, 200: 27999, 300: 39999 },
  };

  const discounts = {
    individual: { 200: 999, 300: 2999 },
    buddy: { 200: 1999, 300: 4998 },
  };

  const price = prices[plan]?.[duration] || 0;
  const discount = discounts[plan]?.[duration] || 0;
  const finalPrice = price - discount;

  return (
    <div className="payment-container">
      <h3 className="title">How do you want to train?</h3>
      <div className="toggle-container">
        <button
          className={`toggle-btn ${plan === "individual" ? "active" : ""}`}
          onClick={() => {
            setPlan("individual");
            setDuration(100);
          }}
        >
          INDIVIDUAL
        </button>
        <button
          className={`toggle-btn ${plan === "buddy" ? "active" : ""}`}
          onClick={() => {
            setPlan("buddy");
            setDuration(100);
          }}
        >
          BUDDY
        </button>
      </div>

      <h3 className="title">How long do you want to train for?</h3>
      <div className="duration-container">
        {durations[plan].map((days) => (
          <button
            key={days}
            className={`duration-btn ${duration === days ? "selected" : ""}`}
            onClick={() => setDuration(days)}
          >
            {days} {days > 12 ? "DAYS" : "MONTHS"}
          </button>
        ))}
      </div>

      <h2 className="price">
        ₹ {finalPrice.toLocaleString()} / {duration} {duration > 12 ? "days" : "months"}
      </h2>

      {discount > 0 && (
        <p className="discount-text">🎉 You save ₹ {discount.toLocaleString()}!</p>
      )}

      <button className="buy-btn">BUY NOW</button>
    </div>
  );
};

export default PaymentSelection;
