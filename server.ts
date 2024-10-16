import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import session from 'express-session';

dotenv.config();

const app = express();
const port = process.env.PORT!;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// temporarily allowing all cors requests
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.listen(port, async () => {
    console.log(`Server running on port: ${port}`);
});

export default app;