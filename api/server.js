import "dotenv/config";
import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
