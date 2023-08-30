import base from "../../utils/server";

const handler = base().post(async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    res.status(200).json({ message: "E-mail sent successfully" });
  } catch (error) {
    console.error("An error occurred:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

export default handler;
