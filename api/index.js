const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/User");
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product")
const cartRoute = require("./Routes/cart")
const orderRoute = require("./Routes/order")

dotenv.config();

// express app creation

app.listen(process.env.PORT || 4000, () => {
    console.log("Backend server is up");
});

// mongoDB connection
mongoose
.connect(process.env.Mongo_URL)
.then(()=> console.log("DB connection is successfull"))
.catch((err) => {console.log(err)});

// Routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)