const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Configurer le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: "SMTP",
  auth: {
    user: "contact@danielle-roettger.fr", // Ton adresse e-mail
    pass: "your_email_password", // Ton mot de passe e-mail
  },
});

app.post("/api/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: "your_email@example.com",
      to: to,
      subject: subject,
      text: text,
    });

    res.status(200).json({ message: "E-mail sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
