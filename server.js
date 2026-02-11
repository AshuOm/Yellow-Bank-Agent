require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const loanRoutes = require("./routes/loans");
const csatRoutes = require("./routes/csat");
const englishOnly = require("./middleware/englishOnly");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(englishOnly);

app.use("/auth", authRoutes);
app.use("/loans", loanRoutes);
app.use("/csat", csatRoutes);

app.get("/", (req, res) => {
    res.send("Yellow Bank Agent Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Yellow Bank Agent Running on port ${PORT}`);
});
