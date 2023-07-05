import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import gitRoutes from './routes/gif.routes';

const app = express();

app.use(helmet())
app.use(morgan('dev'))
app.use(json())
app.use('/gif', gitRoutes)

export default app