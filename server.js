require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.SERVER_PORT || 8080;

// Default Middlewares
app.use(express.json());
app.use(cors());

// Importing Routes
const authRoutes = require('./routes/auth');
const allData =  require('./routes/allCreator');
const donation = require('./routes/donation')
const getDonation = require('./routes/getDonation')

// MongoDB Configuration.
mongoose.connect(process.env.MONGO_DB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("Database Connected");
})
.catch(() => {
    console.log("Unable to connect to Database!");
});

// Implementing Routes.
app.use('/api/v1', authRoutes);
app.use('/api/v1', allData)
app.use('/api/v1', donation)
app.use('/api/v1', getDonation)

// Starting the server.
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
