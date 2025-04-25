// @ts-ignore
import * as mailgun from 'mailgun-js';

const DOMAIN = "mail.chameleontv.co.nz";
const APIKEY = "f9e03091771233686100a949029c0a7d-d5e69b0b-513f15a1";

const mg = mailgun({ apiKey: APIKEY, domain: DOMAIN });

export async function sendInquireEmail(email: string) {
  const data = {
    from: 'ChameleonTV ISB <sam@isb.co.nz>',
    to: email,
    subject: "Free Community Advertising - ISB ChameleonTV",
    template: "inquire-email",
  };
  await mg.messages().send(data, (error: any, body: any) => {
    if (error) {
      console.log(JSON.stringify(error));
    } else {
      console.log(body);
    }
  });
}
