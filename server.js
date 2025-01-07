import server from "./app.js";
import { connect } from "mongoose";
import { config } from "dotenv";
config({ path: ".env" });

const PORT = 8000;

async function connectDB() {
  try {
    await connect(process.env.DB_STRING);
    console.log("DB Connection made successfully");
  } catch (error) {
    console.log(error.message);
  }
}
connectDB();

server.listen(PORT, function () {
  console.log(`Server is hosted on port ${PORT}.`);
});
