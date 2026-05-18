import sgMail from "@sendgrid/mail";

const TO_EMAIL = "neeratirajkamal0505@gmail.com";
const FROM_EMAIL = "neeratirajkamal0505@gmail.com";

export async function sendContactEmail(opts: {
  fromName: string;
  fromEmail: string;
  body: string;
}) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY is not set.");
  }
  sgMail.setApiKey(apiKey);

  await sgMail.send({
    to: TO_EMAIL,
    from: FROM_EMAIL,
    replyTo: { email: opts.fromEmail, name: opts.fromName },
    subject: `New message from ${opts.fromName} — Portfolio Contact`,
    text: `You received a new message via your portfolio contact form.\n\nName: ${opts.fromName}\nEmail: ${opts.fromEmail}\n\nMessage:\n${opts.body}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0f0f1a;color:#e0e0e0;border-radius:12px;overflow:hidden;border:1px solid #2a2a3d;">
        <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);padding:28px 32px;">
          <h2 style="margin:0;color:#fff;font-size:22px;">New Portfolio Contact</h2>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Someone reached out via your portfolio website</p>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#9ca3af;font-size:13px;width:80px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;color:#f3f4f6;font-weight:600;">${opts.fromName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#9ca3af;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${opts.fromEmail}" style="color:#a78bfa;text-decoration:none;">${opts.fromEmail}</a></td>
            </tr>
          </table>
          <div style="background:#1a1a2e;border-radius:8px;padding:20px;border-left:3px solid #7c3aed;">
            <p style="margin:0 0 8px;color:#9ca3af;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
            <p style="margin:0;color:#e5e7eb;line-height:1.7;white-space:pre-wrap;">${opts.body}</p>
          </div>
          <div style="margin-top:24px;padding-top:20px;border-top:1px solid #2a2a3d;">
            <a href="mailto:${opts.fromEmail}" style="display:inline-block;background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${opts.fromName}</a>
          </div>
        </div>
        <div style="padding:16px 32px;background:#0a0a14;text-align:center;font-size:12px;color:#4b5563;">
          Sent from your portfolio at elegant-profile-showcase.onrender.com
        </div>
      </div>
    `,
  });
}
