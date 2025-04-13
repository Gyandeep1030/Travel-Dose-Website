import nodemailer from 'nodemailer';
import process from 'process';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Set up Nodemailer transporter using Gmail and app password
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

  // Email content
  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`, // Must be your Gmail
    replyTo: email, // Where replies go
    to: process.env.GMAIL_USER,
    subject: subject,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
      code: error.code,
    });
  }
}
