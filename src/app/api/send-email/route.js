import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile } = body;

    if (!name || !email || !mobile) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "newindiaexport.sy@gmail.com",
      subject: "New Event Registration: AI Driven Export Strategies",
      html: `
        <h3>New Registration Received</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Event Name:</strong> AI Driven Export Strategies – From Farm to Global Sales</p>
        <p><strong>Registration Date & Time:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      `,
    };

    // If credentials are not provided, we just log it and simulate success
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("EMAIL_USER or EMAIL_PASS not set in environment variables. Email sending simulated.");
      console.log("Email content:", mailOptions);
      return NextResponse.json({ success: true, simulated: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
