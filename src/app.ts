import express from 'express';
import routes from './routes';
import createSessionService from './Services/Session/session.service';

const app = express();

app.use(express.json());
app.use(routes);

// createSessionService({
//   email: 'dudinha81@gmail.com',
//   password: 'xurrasco_021',
// });

app.listen(3000, () => {
  console.log('Server is running');
});

export default app;
