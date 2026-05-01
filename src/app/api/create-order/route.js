import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Create order request body:", body);
    const { amount } = body;

    if (!amount || amount < 100) {
      console.error("Invalid amount:", amount);
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount, // in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    console.log("Creating Razorpay order with options:", options);
    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created:", order.id);

    return NextResponse.json(order);
  } catch (err) {
    console.error("Create order error detailed:", err);
    return NextResponse.json(
      { error: "Order creation failed", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}
