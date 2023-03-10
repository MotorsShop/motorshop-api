import { PrismaClient } from '@prisma/client';
import { IEmailRequest } from '../../interfaces/email';
import { sendEmail } from '../../utils/sendEmail.util';
const prisma = new PrismaClient();

const sendResetPasswordServices = async (
  email: string,
  protocol: string,
  host: string | undefined,
) => {
  const retrieveUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  console.log(retrieveUser);

  if (retrieveUser) {
    const resetPasswordToken = (Math.random() + 1).toString(36).substring(2);
    await prisma.user.update({
      where: {
        email: retrieveUser.email,
      },
      data: {
        token_reset_password: resetPasswordToken,
      },
    });

    const emailData: IEmailRequest = {
      to: email,
      subject: 'Reset Password',
      text: `
      <html>
        <head>
          <meta charset="utf-8">
          <title>Reset de Senha</title>
        </head>
        <body>
          <h1>Reset de Senha</h1>
          <p>Olá,</p>
          <p>Você solicitou um reset de senha para sua conta. Clique no link abaixo para criar uma nova senha:</p>
          <a href=${protocol}://${host}/user/password/${resetPasswordToken}}>Criar Nova Senha</a>
          <p>O link expira em 24 horas.</p>
          <p>Se você não solicitou um reset de senha, ignore este email.</p>
          <p>Atenciosamente,<br>Sua Equipe</p>
        </body>
      </html>
      `,
    };
    await sendEmail(emailData);
  }
};
export default sendResetPasswordServices;
