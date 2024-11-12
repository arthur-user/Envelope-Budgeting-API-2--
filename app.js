const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" }); //follows the The Twelve-Factor App methodology 

const envelopesRouter = require("./routes/envelopes");
const transactionsRouter = require("./routes/transactions");
const docsRouter = require("./routes/docs");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/api-docs", docsRouter);

app.use("/api/v1/envelopes", envelopesRouter);
app.use("/api/v1/transactions", transactionsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server active on port ${PORT}`);
});
