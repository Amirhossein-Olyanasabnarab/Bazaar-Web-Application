const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
function main(){
    const app = express();
    const PORT = process.env.PORT;
    require('./src/config/mongoose.config');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

main();