import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from 'morgan';
import { router } from '../routes/router.mjs';
import { conn } from '../db/mongo.mjs';

dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', router);
conn()

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
