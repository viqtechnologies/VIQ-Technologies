import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendJobApplicationEmail = async (formData) => {
  const { name, email, contact, jobTitle, message } = formData;

  const subject = `New Job Application: ${jobTitle}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e293b;">🎉 New Job Application Received</h2>
      <p>A candidate has applied for <strong>${jobTitle}</strong></p>
      
      <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h3 style="margin: 0 0 10px 0; color: #1e40af;">📋 Application Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${contact}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Position:</td><td><strong>${jobTitle}</strong></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td><td>${message}</td></tr>
        </table>
      </div>

      <hr style="border: none; height: 1px; background: #e2e8f0;" />
      <p style="font-size: 12px; color: #64748b;">
        This application was submitted via your career page on ${new Date().toLocaleDateString()}
      </p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: "JOB ENROLLMENT <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject,
    html,
  });

  if (error) {
    console.error("Resend job email error:", error);
    throw new Error("Failed to send job application email");
  }

  return data;
};
