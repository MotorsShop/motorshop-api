import { IEmailRequest } from '../../interfaces/email';
import { sendEmail } from '../../utils/sendEmail.util';
const sendEmailService = async ({ subject, text, to }: IEmailRequest) => {
  await sendEmail({ subject, text, to });
};

export default sendEmailService;
