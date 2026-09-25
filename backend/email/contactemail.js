// email/contactemail.js
import "dotenv/config";
import { Resend } from "resend";

 const resend = new Resend(process.env.RESEND_API_KEY); 

 export  const sendContactEmail = async (formData) => {
  const { name, email, contact, address, message } = formData;

  const subject = `New Contact Enquiry from ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e293b;">New Contact Form Submission</h2>
      <p>You have received a new enquiry from the website contact form.</p>
      <hr style="border: none; height: 1px; background: #e2e8f0;" />
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td>${name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Contact:</td><td>${contact}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${address}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td>${message}</td></tr>
      </table>
      <hr style="border: none; height: 1px; background: #e2e8f0; margin-top: 16px;" />
      
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject,
    html,
  }); 

  if (error) {
    console.error("Contact email error:", error);
    throw new Error("Failed to send contact email");
  }

  return data;
};
export default sendContactEmail;

