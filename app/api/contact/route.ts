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
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#444;line-height:1.7;">
      <p style="font-size:15px;">
        Dear ${data.name || "Customer"},
      </p>
      <p style="font-size:15px;">
        Thank you for your inquiry!
      </p>
      <p style="font-size:15px;">
        I am a Client Solutions Specialist at Horizon Line, UAE’s leading company formation services provider, offering end-to-end corporate solutions.
      </p>
      <p style="font-size:15px;">
        To assist you further with personalized solutions and a cost estimate, kindly provide the following details:
      </p>
      <p style="font-size:15px;margin-left:16px;">
        <strong>Nature of Business:</strong><br>
        <strong>Number of Shareholders:</strong><br>
        <strong>Jurisdiction (Free Zone or Mainland):</strong><br>
        <strong>Preferred Emirate:</strong>
      </p>
      <p style="font-size:15px;">
        Once we have this information, we’ll be able to offer a more tailored service to meet your requirements.
      </p>
      <p style="font-size:15px;">
        Best Regards,<br>
        <strong>Team Horizon Line</strong><br>
        Working hours: 9 AM – 6 PM GST, Monday to Friday
      </p>
      <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0;">
      <p style="font-size:13px;color:#666;">
        Office No-103, Juma Al Masjid Building, Industrial Area 4, Sharjah - United Arab Emirates<br>
        Visit Our Website:<br>
        <a href="https://www.horizonlineuae.com" style="display:inline-block;margin-top:8px;">
          <img src="https://www.horizonlineuae.com/img/logo/logo-dark.svg" alt="Horizon Line" style="height:35px;" onerror="this.style.display='none'" />
        </a>
      </p>
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
        text: `Dear ${data.name || "Customer"},\n\nThank you for your inquiry!\n\nI am a Client Solutions Specialist at Horizon Line, UAE’s leading company formation services provider, offering end-to-end corporate solutions.\n\nTo assist you further with personalized solutions and a cost estimate, kindly provide the following details:\n\nNature of Business:\nNumber of Shareholders:\nJurisdiction (Free Zone or Mainland):\nPreferred Emirate:\n\nOnce we have this information, we’ll be able to offer a more tailored service to meet your requirements.\n\nBest Regards,\nTeam Horizon Line\nWorking hours: 9 AM – 6 PM GST, Monday to Friday\n\nOffice No-103, Juma Al Masjid Building, Industrial Area 4, Sharjah - United Arab Emirates\nVisit Our Website: https://www.horizonlineuae.com`,
      });
    }

    return NextResponse.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: `Failed to send message: ${message}` }, { status: 500 });
  }
}
