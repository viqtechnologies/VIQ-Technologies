// email/email.js
import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEnquiryEmail = async (formData) => {
  const { name, email, contact, queryType, message } = formData;

  const subject = `New Enquiry - ${queryType || "General"}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Enquiry</h2>
      <p>You have received a new enquiry from your website.</p>
      <hr />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Query For:</strong> ${queryType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p>This email was sent via your enquiry form.</p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: "ENQUIRY FORM <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject,
    html,
  }); 

  if (error) {
    console.error("Resend email error:", error);
    throw new Error("Failed to send enquiry email");
  }

  return data;
};
