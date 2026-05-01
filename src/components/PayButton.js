"use client";

export default function PayButton() {
  const handlePayment = async () => {
    try {
      // 1. Create order via Next.js API route
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 50000 }), // ₹500 in paise
      });

      const order = await res.json();

      if (!order.id) throw new Error("Order creation failed");

      // 2. Load Razorpay script dynamically
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: "INR",
          order_id: order.id,

          handler: async function (response) {
            // 3. Verify payment via Next.js API route
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const result = await verifyRes.json();

            if (result.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed");
            }
          },

          modal: {
            ondismiss: function () {
              alert("Payment cancelled.");
            },
          },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
          alert("Payment failed: " + response.error.description);
        });

        rzp.open();
      };
    } catch (err) {
      console.error(err);
      alert("Something went wrong during payment initiation.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
    >
      Pay ₹500
    </button>
  );
}
