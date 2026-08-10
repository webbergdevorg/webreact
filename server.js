/**
 * Webberg Web - Senior Backend Developer Enquiry Microservice
 * 
 * Features:
 * 1. Sends HTML & plain-text email notifications to webbergdevelopment@gmail.com (via Nodemailer / SMTP)
 * 2. Sends real-time SMS notifications to target phone (+91 78100 59511) via Twilio API
 * 
 * Setup instructions:
 * 1. npm install express nodemailer cors dotenv twilio
 * 2. Configure .env file with your credentials:
 *    SMTP_HOST=smtp.gmail.com
 *    SMTP_PORT=587
 *    SMTP_USER=webbergdevelopment@gmail.com
 *    SMTP_PASS=your_app_password
 *    TWILIO_ACCOUNT_SID=your_twilio_sid
 *    TWILIO_AUTH_TOKEN=your_twilio_token
 *    TWILIO_PHONE_NUMBER=+1234567890
 *    OWNER_PHONE_NUMBER=+917810059511
 * 3. Run: node server.js
 */

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const OWNER_EMAIL = process.env.SMTP_USER || 'webbergdevelopment@gmail.com';
const OWNER_PHONE = process.env.OWNER_PHONE_NUMBER || '+917810059511';

// Nodemailer Transporter Config
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: OWNER_EMAIL,
    pass: process.env.SMTP_PASS || '',
  },
});

// Twilio SMS Client (Optional - if SID & Auth Token provided)
let twilioClient = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
  twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

app.post('/api/enquiry', async (req, res) => {
  try {
    const { fname, lname, email, phone, message } = req.body;

    if (!fname || !email || !phone) {
      return res.status(400).json({ error: 'First Name, Email, and Phone are required fields.' });
    }

    const fullName = `${fname} ${lname || ''}`.trim();

    // 1. Email Payload & Dispatch
    const mailOptions = {
      from: `"Webberg Web Enquiries" <${OWNER_EMAIL}>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `🚨 New Enquiry from ${fullName}`,
      text: `New Enquiry Details:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || 'N/A'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0f19; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #3b82f6;">📩 New Webberg Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; color: #e2e8f0; font-size: 15px;">
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}" style="color: #60a5fa;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td>${message || 'No message provided.'}</td></tr>
          </table>
        </div>
      `,
    };

    const emailInfo = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', emailInfo.messageId);

    // 2. SMS Dispatch via Twilio (to Owner Phone)
    let smsSent = false;
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
      const smsBody = `📩 Webberg Enquiry:\nName: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nMsg: ${message || 'N/A'}`;
      await twilioClient.messages.create({
        body: smsBody,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: OWNER_PHONE,
      });
      smsSent = true;
      console.log('📱 SMS sent to phone:', OWNER_PHONE);
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry processed successfully.',
      emailDelivered: true,
      smsDelivered: smsSent,
    });
  } catch (error) {
    console.error('❌ Error processing enquiry:', error);
    return res.status(500).json({ error: 'Internal server error while processing enquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Webberg Enquiry Backend Server running on port ${PORT}`);
});
