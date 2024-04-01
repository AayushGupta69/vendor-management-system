const express = require("express");
const { connectToMongoDB } = require("./database");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

connectToMongoDB();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
