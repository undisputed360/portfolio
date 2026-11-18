const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const preferredPort = Number(process.env.PORT) || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

function startServer(port) {
  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Portfolio server running on port ${port}`);
    console.log(`Health check: http://localhost:${port}/health`);
    console.log(`Server listening on 0.0.0.0:${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      const nextPort = port + 1;
      console.warn(
        `Port ${port} is already in use. Retrying on ${nextPort}...`,
      );
      startServer(nextPort);
      return;
    }

    console.error("Server error:", err);
    process.exit(1);
  });
}

// Health check endpoint for Railway (placed first for immediate response)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Simple ping endpoint
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/demo", (req, res) => {
  res.redirect("/demo.html");
});

app.get("/cyber", (req, res) => {
  res.redirect("/cyber.html");
});

app.get("/tidal", (req, res) => {
  res.redirect("/tidal.html");
});

app.get("/morrow", (req, res) => {
  res.redirect("/morrow.html");
});

app.get("/commons", (req, res) => {
  res.redirect("/commons.html");
});

// Contact form submission
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const senderEmail = process.env.EMAIL_USER;
  const senderPassword = process.env.EMAIL_PASS;
  const recipientEmail = process.env.EMAIL_TO || senderEmail;

  if (!senderEmail || !senderPassword) {
    console.error("Email delivery is not configured.");
    return res.status(500).json({
      success: false,
      message:
        "Email delivery is not configured yet. Please add your Gmail address and app password to the .env file.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  const mailOptions = {
    from: `Portfolio Contact <${senderEmail}>`,
    to: recipientEmail,
    replyTo: email,
    subject: subject
      ? `Portfolio Contact: ${subject}`
      : `Portfolio Contact Form - Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}
Message: ${message}
        `,
    html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject || "N/A"}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Full error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
});

// Demo contact forms
app.post("/demo-contact", async (req, res) => {
  // Handle Web3 demo contact
  console.log("Web3 Demo Contact:", req.body);
  res.json({ success: true, message: "Demo contact received!" });
});

app.post("/cyber-contact", async (req, res) => {
  // Keep the portfolio demo enquiry local; it is not emailed.
  console.log("Cyber Demo Contact:", req.body);
  res.json({
    success: true,
    message: "Demo submission logged locally. No email was sent.",
  });
});

// Start server
startServer(preferredPort);
