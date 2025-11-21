require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendContactEmail(formData) {
  const mailOptions = {
    from: formData.email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${formData.first_name} ${formData.last_name}`,
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Van Size:</strong> ${formData.van_size}</p>
      <p><strong>Name:</strong> ${formData.first_name} ${formData.last_name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Collection Address:</strong> ${formData.collection_address_line1} ${formData.collection_address_line2}, ${formData.collection_city}, ${formData.collection_postcode}</p>
      <p><strong>Delivery Address:</strong> ${formData.delivery_address_line1} ${formData.delivery_address_line2}, ${formData.delivery_city}, ${formData.delivery_postcode}</p>
      <p><strong>Delivery Notes:</strong> ${formData['delivery-notes']}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendContactEmail;
