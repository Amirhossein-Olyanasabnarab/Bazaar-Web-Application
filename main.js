const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const swaggerConfig = require('./src/config/swagger.config');
const mainRoutes = require('./src/app.routes');

function main(){

    const app = express();
    const PORT = process.env.PORT;

    app.use(express.json());
    app.use(mainRoutes);
    swaggerConfig(app);
    require('./src/config/mongoose.config');

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

main();