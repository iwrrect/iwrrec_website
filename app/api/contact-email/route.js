import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const INTEREST_LABELS = {
  "equipment-certification": "Equipment Certification",
  "laboratory-accreditation": "Laboratory Accreditation",
  standards: "Machinery Standards",
  training: "Testing & Training",
  partnership: "Technical Partnership",
  other: "Something Else",
};

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getMailConfig() {
  const host = process.env.EMAIL_SMTP_HOST;
  const port = Number(process.env.EMAIL_SMTP_PORT || 587);
  const user = process.env.EMAIL_ID;
  const pass = process.env.EMAIL_PASSWORD;
  const mailTo = process.env.MAIL_TO || user;

  const missing = [];
  if (!host) missing.push("EMAIL_SMTP_HOST");
  if (!process.env.EMAIL_SMTP_PORT) missing.push("EMAIL_SMTP_PORT");
  if (!user) missing.push("EMAIL_ID");
  if (!pass) missing.push("EMAIL_PASSWORD");
  if (!mailTo) missing.push("MAIL_TO");

  return { host, port, user, pass, mailTo, missing };
}

function buildInquiryEmail({ name, email, phone, company, interestLabel, message }) {
  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "UTC",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const row = (label, value) => `
    <tr>
      <td style="padding:5px 6px;width:140px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#5c6b7a;vertical-align:top;border-bottom:1px solid #e5e9ef;">
        ${esc(label)}
      </td>
      <td style="padding:5px 6px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#162e51;vertical-align:top;border-bottom:1px solid #e5e9ef;">
        ${value}
      </td>
    </tr>
  `;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Contact Inquiry — IWRREC</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f6f9;padding:5px 3px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background:#ffffff;border:1px solid #d8dee8;">
          <!-- Gold accent -->
          <tr>
            <td style="height:4px;background:#c69214;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:18px 20px 14px;background:#162e51;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#c69214;">
                IWRREC Secretariat
              </p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.3;font-weight:700;color:#ffffff;">
                New Official Inquiry
              </h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:16px 20px 6px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#5c6b7a;">
                A formal inquiry has been received. Reply directly to this email to respond to the sender.
              </p>
            </td>
          </tr>

          <!-- Topic badge -->
          <tr>
            <td style="padding:8px 20px 6px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:8px 14px;background:#f4f6f9;border-left:4px solid #c69214;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#162e51;">
                    Topic: ${esc(interestLabel)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:12px 20px 6px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#1a4480;">
                Inquiry Details
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e9ef;background:#ffffff;">
                ${row("Name", esc(name))}
                ${row("Email", `<a href="mailto:${esc(email)}" style="color:#1a4480;text-decoration:none;font-weight:600;">${esc(email)}</a>`)}
                ${phone ? row("Phone", esc(phone)) : ""}
                ${company ? row("Organization", esc(company)) : ""}
                ${row("Interest", esc(interestLabel))}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:12px 20px 16px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#1a4480;">
                Message
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e9ef;background:#f8fafc;">
                <tr>
                  <td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#162e51;white-space:pre-line;">
${esc(message)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:12px 20px;background:#f4f6f9;border-top:1px solid #e5e9ef;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#5c6b7a;">
                International Waste Resource Recovery and Energy Council (IWRREC)<br />
                This notification was generated automatically from the official inquiry form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    "NEW OFFICIAL INQUIRY — IWRREC",
    `Submitted: ${submittedAt} UTC`,
    "",
    `Topic: ${interestLabel}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Organization: ${company}` : null,
    `Interest: ${interestLabel}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "Reply directly to this email to contact the sender.",
  ]
    .filter(Boolean)
    .join("\n");

  return { html, text };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const interest = String(body.interest || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !interest || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    const { host, port, user, pass, mailTo, missing } = getMailConfig();
    if (missing.length) {
      const payload =
        process.env.NODE_ENV !== "production"
          ? { error: "Email env not configured", missing }
          : { error: "Email env not configured" };
      return NextResponse.json(payload, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    try {
      await transporter.verify();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : "SMTP verification failed";
      return NextResponse.json(
        process.env.NODE_ENV !== "production"
          ? { error: errMsg }
          : { error: "SMTP verification failed" },
        { status: 500 },
      );
    }

    const interestLabel =
      INTEREST_LABELS[interest] || interest.replaceAll("-", " ");
    const { html, text } = buildInquiryEmail({
      name,
      email,
      phone,
      company,
      interestLabel,
      message,
    });

    await transporter.sendMail({
      from: `"IWRREC Inquiry" <${user}>`,
      to: mailTo,
      replyTo: email,
      subject: `[Inquiry] ${interestLabel} — ${name}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      process.env.NODE_ENV !== "production"
        ? { error: errMsg }
        : { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
