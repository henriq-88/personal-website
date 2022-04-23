import * as functions from "firebase-functions";
import * as sendGridMail from "@sendgrid/mail";
import {HttpsError} from "firebase-functions/v1/https";
import isEmail from "validator/lib/isEmail";
import escape from "validator/lib/escape";

export const sendMessage = functions.https.onCall(async (data, context) => {
  if (!process.env.SENDGRID_API_KEY) throw new HttpsError("internal", "Invalid config for SENDGRID_API_KEY");
  sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    name: senderName,
    email: senderEmail,
    message: senderMessage,
  }: {
    name: string;
    email: string;
    message: string;
  } = data;

  const escapedEmail = escape(senderEmail);
  const escapedSenderName = escape(senderName);
  const escapeSenderMessage = escape(senderMessage);
  if (!isEmail(senderEmail) || !escapedSenderName || !escapeSenderMessage) {
    functions.logger.error("Invalid sender body", {sanitizedEmail: escapedEmail, sanitizedSenderName: escapedSenderName, sanitizedSenderMessage: escapeSenderMessage});
    throw new HttpsError("failed-precondition", "Invalid sender body", {senderEmail: escapedEmail, senderName: escapedSenderName, senderMessage: escapeSenderMessage});
  }

  const sendGridBody = {
    to: "henriq88@gmail.com",
    from: "henrik@qap.red",
    subject: `Personal Website Message from ${escapedSenderName}`,
    text: escapeSenderMessage,
    html: `
      <p>${escapedSenderName} (${escapedEmail}) sent you a message</p>
      <p>${escapeSenderMessage}</p>
    `,
  };

  try {
    await sendGridMail.send(sendGridBody);
    return "Email successfully sent!";
  } catch (err) {
    const {code, message} = err as any;
    functions.logger.error("Unknown error", {code, message});
    throw new HttpsError("unknown", `(${code}) ${message}`);
  }
});
