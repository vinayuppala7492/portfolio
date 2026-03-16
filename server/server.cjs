const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email route
app.post("/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vinayuppala7492@gmail.com",
        pass: "zmlxaeaefwufrrlx"
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <vinayuppala7492@gmail.com>`,
      to: "vinayuppala7492@gmail.com",
      subject: "New message from portfolio",
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email"
    });

  }

});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
