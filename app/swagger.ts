// import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDocument from "../openapi.json";
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API For Binar Car Rental',
            version: '1.0.0',
            description: 'Open API For Binar Car Rental',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
            },
        ],
    },
    apis: ['./app/routes/*.ts', './app/models/*.ts'],
};

// const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;
