import 'express-async-errors';
import express from 'express';
import routes from './routes';
import cors from 'cors';
import ErrorMiddleware from './middlewares/handleError.middleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use(ErrorMiddleware.handle);

app.listen(3000, () => {
  console.log('Server is running');
});

export default app;
