import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed !! ", error);
})

// import express from "express";
// const app = express();

// (async () => {
//     try {
//         console.log("Connecting to DB...", process.env.MONGODB_URI);
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(`DB connected on ${process.env.MONGODB_URI}/${DB_NAME}`);

//         app.on("error", (error) => {
//             console.log("App error: ", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Connection error: ", error);
//         throw error;
//     }
// })();