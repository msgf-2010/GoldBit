import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.RESEND_FROM?.trim();

    if (!apiKey || !from) {
      console.error("[contact] Missing RESEND_API_KEY or RESEND_FROM env vars");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from,
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
          <tr><td style="padding:4px 0"><strong>Name:</strong> ${esc(name)}</td></tr>
          <tr><td style="padding:4px 0"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          ${company ? `<tr><td style="padding:4px 0"><strong>Company:</strong> ${esc(company)}</td></tr>` : ""}
          ${phone   ? `<tr><td style="padding:4px 0"><strong>Phone:</strong> ${esc(phone)}</td></tr>` : ""}
          <tr><td style="padding:16px 0 4px"><strong>Message:</strong></td></tr>
          <tr><td style="padding:4px 0;white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px">${esc(message)}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("[contact] Resend rejected the send:", error);
      return NextResponse.json(
        { error: "Failed to send.", detail: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] send failed:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Failed to send.", detail }, { status: 500 });
  }
}
