const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (req) => {
  try {
    const { name, email, service, subject, message, phone } = req.body;

    const adminMsg = {
      to: process.env.EMAIL,
      from: process.env.SUBDOMAIN,
      replyTo: email,
      subject: `Contact Form: ${subject || "No subject"}`,
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      `,
    };
    const clientMsg = {
      to: email,
      from: process.env.SUBDOMAIN,
      replyTo: process.env.EMAIL,
      subject: "We received your message",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Form Submission</title>
<style>
  body { font-family: 'Inter', sans-serif; background: #f9f9f9; color: #636363; margin:0; padding:0; }
  .container { max-width:600px; margin:2rem auto; background:#fff; border-radius:0.75rem; box-shadow:0 4px 24px rgba(33,33,33,0.07); overflow:hidden; }
  .header { background: linear-gradient(90deg, #003663 0%, #f9f9f9 100%); padding:2rem; text-align:center; }
  .header h1 { color:#fff; font-size:2rem; margin:0 0 0.5rem; }
  .header p { color:#fff; font-size:1rem; margin:0; }
  .content { padding:2rem; }
  .details { background:#f9f9f9; border-radius:0.5rem; padding:1rem; margin-bottom:1rem; border:1px dashed #bebebe; }
  .details p { margin:0.5rem 0; color:#212121; font-size:1rem; }
  .details strong { color:#003663; }
  .footer { background:#212121; color:#fff; text-align:center; padding:1rem; font-size:0.9rem; border-top:1px dashed #003663; }
  a.button { display:inline-block; border-radius:1.5rem; background:#003663; color:#fff; padding:0.75rem 1.5rem; text-decoration:none; font-weight:500; margin-top:1rem; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Thank you for contacting Margin!</h1>
    <p>We have received your message and will get back to you soon.</p>
  </div>
  <div class="content">
    <h2>Submitted Details</h2>
    <div class="details">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    </div>
    <p style="color:#636363;">For urgent queries, call <a href="tel:+916383499920" style="color:#003663;">+91 6383499920</a>.</p>
    <a href="https://margin-viv8.onrender.com/" class="button">Visit Our Website</a>
  </div>
  <div class="footer">
    &copy; 2025 Margins. All rights reserved.<br>
    <a href="https://margin-viv8.onrender.com/" style="color:#fff;">margins.com</a>
  </div>
</div>
</body>
</html>
      `,
    };

    // Send both emails
    await sgMail.send(adminMsg);
    await sgMail.send(clientMsg);

    console.log("Emails sent successfully!");
  } catch (error) {
    console.error(
      "SendGrid error:",
      error.response ? error.response.body : error.message
    );
  }
};

module.exports = sendMail;
