import mongoose from "mongoose";

// Connect to database
export async function connectToDB() {
  const connection = {};
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("Connected to database successfully....");
    })
    .catch((err) => {
      console.log(err);
    });
}

