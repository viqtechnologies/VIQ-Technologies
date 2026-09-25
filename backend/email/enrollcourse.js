// // email/enrollcourse.js
// import "dotenv/config";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEnrollCourseEmail = async (formData) => {
//   const { name, email, contact, interest, message } = formData;

//   const subject = `New Course Enrollment Request from ${name}`;

//   const html = `
//     <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
//       <h2 style="color: #1e293b;">New Course Enrollment</h2>
//       <p>You have received a new course enrollment request.</p>
//       <hr style="border: none; height: 1px; background: #e2e8f0;" />

//       <table style="width: 100%; border-collapse: collapse;">
//         <tr>
//           <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
//           <td>${name}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px 0; font-weight: bold;">Email:</td>
//           <td>${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px 0; font-weight: bold;">Contact:</td>
//           <td>${contact}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px 0; font-weight: bold;">Interest:</td>
//           <td>${interest}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px 0; font-weight: bold;">Message:</td>
//           <td>${message}</td>
//         </tr>
//       </table>

//       <hr style="border: none; height: 1px; background: #e2e8f0; margin-top: 16px;" />
//     </div>
//   `;

//   const { data, error } = await resend.emails.send({
//     from: "Course Enrollment <onboarding@resend.dev>",
//     to: process.env.EMAIL_USER,
//     subject,
//     html,
//   });

//   if (error) {
//     console.error("Enroll course email error:", error);
//     throw new Error("Failed to send enroll course email");
//   }

//   return data;
// };

// export default sendEnrollCourseEmail;




// email/enrollcourse.js
import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEnrollCourseEmail = async (formData) => {
  // Added college and stream here
  const { name, email, contact, interest, message, college, stream } = formData;

  const subject = `New Course Enrollment Request from ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e293b;">New Course Enrollment</h2>
      <p>You have received a new course enrollment request.</p>
      <hr style="border: none; height: 1px; background: #e2e8f0;" />

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Contact:</td>
          <td>${contact}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">College/University:</td>
          <td>${college}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Stream:</td>
          <td>${stream}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Interest:</td>
          <td>${interest}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Message:</td>
          <td>${message}</td>
        </tr>
      </table>

      <hr style="border: none; height: 1px; background: #e2e8f0; margin-top: 16px;" />
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: "Course Enrollment <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject,
    html,
  });

  if (error) {
    console.error("Enroll course email error:", error);
    throw new Error("Failed to send enroll course email");
  }

  return data;
};

export default sendEnrollCourseEmail;