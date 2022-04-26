import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ecom123:ecommerce123@ecommerce.d3pe6.mongodb.net/ecommerce?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))    )
    .catch((error) => console.log(error.message));