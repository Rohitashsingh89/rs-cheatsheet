"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Payment {
  id: string;
  amount: number;
  status: string;
}

interface PaymentResponse {
  successfulPayments: Payment[];
  failedPayments: Payment[];
}

export default function PaymentStatus() {
  const [successfulPayments, setSuccessfulPayments] = useState<Payment[]>([]);
  const [failedPayments, setFailedPayments] = useState<Payment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const response = await axios.get("/api/payments");

        // Set the state with the payment data
        setSuccessfulPayments(response.data.successfulPayments);
        setFailedPayments(response.data.failedPayments);
      } catch (err) {
        setError("An error occurred while fetching payments");
        console.error(err); // Optional: Log the error for debugging
      }
    }
    async function fetchBalance() {
      try {
        const response = await axios.get(
          "https://api.razorpay.com/v1/payments"
        );
        console.log(response.data);
        // Set the state with the payment data
        // setSuccessfulPayments(response.data.successfulPayments);
        // setFailedPayments(response.data.failedPayments);
      } catch (err) {
        setError("An error occurred while fetching payments");
        console.error(err); // Optional: Log the error for debugging
      }
    }

    fetchPayments();
    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Successful Payments</h2>
      <ul>
        {successfulPayments.map((payment) => (
          <li key={payment.id}>
            {payment.id} - {payment.amount / 100} INR
          </li>
        ))}
      </ul>

      <h2>Failed Payments</h2>
      <ul>
        {failedPayments.map((payment) => (
          <li key={payment.id}>
            {payment.id} - {payment.amount / 100} INR
          </li>
        ))}
      </ul>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
