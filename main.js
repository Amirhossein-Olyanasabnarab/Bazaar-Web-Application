const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const swaggerConfig = require('./src/config/swagger.config');

function main(){
    const app = express();
    const PORT = process.env.PORT;
    swaggerConfig(app);
    require('./src/config/mongoose.config');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

main();