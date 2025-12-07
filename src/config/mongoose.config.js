const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST).then(() => {
    console.log(`Connected to MongoDB`);
})
.catch((err) => {
    console.log(`Connected was failed => ${err.message}`)
})