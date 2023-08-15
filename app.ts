import express, { Application } from 'express';
import dotenv from 'dotenv';
import router from './router/route';
const app:express.Application = express();
dotenv.config();

app.use(express.json());

app.use('/api', router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
