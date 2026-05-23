import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const recipientEmail = process.env.CONTACT_EMAIL || "awenvisolutions@gmail.com";

    let transporter;
    let usingTestAccount = false;
    // If SMTP not configured, create an Ethereal test account for development
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usingTestAccount = true;
      console.warn("SMTP credentials not found — using Ethereal test account for email delivery in development.");
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    }

    const info = await transporter.sendMail({
      from: `AWEnvi Website <${smtpUser || (usingTestAccount ? "ethereal@example.com" : "no-reply@awenvi")}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>`,
    });

    if (usingTestAccount) {
      const preview = nodemailer.getTestMessageUrl(info);
      console.info("Ethereal preview URL:", preview);
      return NextResponse.json({ message: "Email sent (ethereal preview).", preview });
    }

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
