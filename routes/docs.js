const express = require("express");
const router = express.Router();
const swagger = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.1.0",
        info: {
            title: "Portfolio Budget 2",
            version: "1.0.0",
            description: "Backend API built with Node, Express and Postgresql for managing a portfolio budget using envelope budgeting",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/",
            },
        },
    },
    apis: ["./routes/envelopes.js", "./routes/transactions.js"],
};
const specs = swagger(swaggerOptions);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs, {
    explorer: true,
})
);

module.exports = router;