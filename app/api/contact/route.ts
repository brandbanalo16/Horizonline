import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  city?: string;
  message?: string;
}

// ─── Nodemailer transporter ───────────────────────────────────────────────────

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "enquiry@horizonlineuae.com",
      pass: "cwdvekqrcxjnclpo",
    },
  });
}

// ─── Email builders ───────────────────────────────────────────────────────────

function buildAdminEmailHtml(data: FormData): string {
  const phone = data.countryCode
    ? `${data.countryCode} ${data.phone}`
    : data.phone || "—";
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      <div style="background:#2c3650;padding:24px 28px;">
        <h2 style="color:#fff;margin:0;font-size:20px;">New Enquiry – Horizon Line</h2>
      </div>
      <div style="padding:24px 28px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;font-weight:700;color:#555;width:120px;">Name</td>
            <td style="padding:8px 0;color:#222;">${data.name || "—"}</td>
          </tr>
          <tr style="background:#f8f9fb;">
            <td style="padding:8px 6px;font-weight:700;color:#555;">Email</td>
            <td style="padding:8px 6px;color:#222;">${data.email || "—"}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:700;color:#555;">Phone</td>
            <td style="padding:8px 0;color:#222;">${phone}</td>
          </tr>
          ${data.city ? `
          <tr style="background:#f8f9fb;">
            <td style="padding:8px 6px;font-weight:700;color:#555;">City</td>
            <td style="padding:8px 6px;color:#222;">${data.city}</td>
          </tr>` : ""}
          ${data.message ? `
          <tr>
            <td style="padding:8px 0;font-weight:700;color:#555;vertical-align:top;">Message</td>
            <td style="padding:8px 0;color:#222;">${data.message.replace(/\n/g, "<br>")}</td>
          </tr>` : ""}
        </table>
      </div>
      <div style="padding:14px 28px;background:#f4f4f4;font-size:12px;color:#888;">
        This message was submitted via the website contact form.
      </div>
    </div>`;
}

function buildAutoReplyHtml(data: FormData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      <div style="background:#2c3650;padding:28px 32px;text-align:center;">
        <img src="https://www.horizonlineuae.com/img/logo/logo-light.svg" alt="Horizon Line" style="height:50px;margin-bottom:12px;" onerror="this.style.display='none'" />
        <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">Thank You for Contacting Us!</h1>
      </div>
      <div style="padding:28px 32px;background:#fff;">
        <p style="color:#444;font-size:15px;line-height:1.7;margin-top:0;">
          Dear <strong>${data.name || "Valued Customer"}</strong>,
        </p>
        <p style="color:#444;font-size:15px;line-height:1.7;">
          Thank you for reaching out to <strong>Horizon Line Consultancy</strong>. We have received your enquiry and one of our experts will get back to you within <strong>24 business hours</strong>.
        </p>
        <div style="background:#f0f7ff;border-left:4px solid #2563eb;padding:16px 20px;border-radius:0 6px 6px 0;margin:24px 0;">
          <p style="margin:0;font-size:14px;color:#1e3a5f;font-weight:600;">Need an immediate response?</p>
          <p style="margin:8px 0 0;font-size:14px;color:#444;">
            📞 Call us: <a href="tel:+971566866849" style="color:#2563eb;">+971566866849</a><br>
            💬 WhatsApp: <a href="https://wa.me/971541787863" style="color:#25d366;">+971566866849</a>
          </p>
        </div>
        <p style="color:#444;font-size:15px;line-height:1.7;">
          We look forward to helping you with your business setup journey in the UAE.
        </p>
        <p style="color:#444;font-size:15px;margin-bottom:0;">
          Warm regards,<br>
          <strong>Horizon Line Consultancy Team</strong>
        </p>
      </div>
      <div style="padding:16px 32px;background:#f4f4f4;text-align:center;font-size:12px;color:#888;">
        Office No. 103, Juma Al Majid Building, Industrial Area 4, Sharjah, UAE<br>
        <a href="https://www.horizonlineuae.com" style="color:#2563eb;text-decoration:none;">www.horizonlineuae.com</a>
      </div>
    </div>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Basic validation
    if (!data.name || !data.name.trim()) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    const transporter = createTransporter();
    const fromAddress = '"Horizon Line Consultancy" <enquiry@horizonlineuae.com>';
    const adminEmail = "enquiry@horizonlineuae.com";

    const phone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone || "—";
    const subject = `New Enquiry from ${data.name} – Horizon Line Website`;

    // 1️⃣ Send admin notification
    await transporter.sendMail({
      from: fromAddress,
      to: adminEmail,
      bcc: "brandbanalo16@gmail.com",
      replyTo: data.email || undefined,
      subject,
      html: buildAdminEmailHtml(data),
      text: `New enquiry\nName: ${data.name}\nEmail: ${data.email || "—"}\nPhone: ${phone}\nCity: ${data.city || "—"}\nMessage: ${data.message || "—"}`,
    });

    // 2️⃣ Send auto-reply to user (only if they provided an email)
    if (data.email && data.email.includes("@")) {
      await transporter.sendMail({
        from: fromAddress,
        to: data.email,
        subject: "We received your enquiry – Horizon Line Consultancy",
        html: buildAutoReplyHtml(data),
        text: `Dear ${data.name},\n\nThank you for contacting Horizon Line Consultancy. We have received your enquiry and will get back to you within 24 business hours.\n\nFor immediate assistance:\nCall / WhatsApp: +971566866849\n\nWarm regards,\nHorizon Line Consultancy Team`,
      });
    }

    return NextResponse.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: `Failed to send message: ${message}` }, { status: 500 });
  }
}
