import sendGridMailClient, { MailService } from "@sendgrid/mail";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var sendGridMail: MailService | undefined;
}

const sendMessage = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("Invalid config for SENDGRID_API_KEY");
  }
  sendGridMailClient.setApiKey(process.env.SENDGRID_API_KEY);
  const sendGridBody = {
    to: "henriq88@gmail.com",
    from: "henrik@qap.red",
    subject: `Personal Website Message from ${name}`,
    text: message,
    html: `
      <p>${name} (${email}) sent you a message</p>
      <p>${message}</p>
      `,
  };
  await sendGridMailClient.send(sendGridBody);
};

export const sendGrid = {
  sendMessage,
};

export { MailService, ResponseError } from "@sendgrid/mail";
export type { ClientResponse, MailDataRequired } from "@sendgrid/mail";
