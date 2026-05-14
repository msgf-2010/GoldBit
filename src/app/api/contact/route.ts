import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");

    if (!user || !pass) {
      console.error("[contact] Missing SMTP_USER or SMTP_PASS env vars");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"GoldBit Contact Form" <${user}>`,
      to: "moe.goldbit@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        company ? `Company: ${company}` : null,
        phone   ? `Phone:   ${phone}`   : null,
        ``,
        `Message:`,
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#222;max-width:600px;">
          <tr><td style="padding:4px 0"><strong>Name:</strong> ${name}</td></tr>
          <tr><td style="padding:4px 0"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:4px 0"><strong>Company:</strong> ${company}</td></tr>` : ""}
          ${phone   ? `<tr><td style="padding:4px 0"><strong>Phone:</strong> ${phone}</td></tr>` : ""}
          <tr><td style="padding:16px 0 4px"><strong>Message:</strong></td></tr>
          <tr><td style="padding:4px 0;white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Failed to send.", detail }, { status: 500 });
  }
}
