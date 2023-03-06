import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log('Server is running');
});

export default app;
