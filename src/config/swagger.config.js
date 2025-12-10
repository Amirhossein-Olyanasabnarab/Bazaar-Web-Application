const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Bazaar Web Application",
                version: "1.0.0",
                description: "Node.js, Express.js, MongoDB"
            },
        },
        apis: [process.cwd() + "/src/module/**/*.swagger.js"]
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = swaggerConfig;