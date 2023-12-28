import mongoose from "mongoose";

// fn to connect to db
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI || "", {
      dbName: "AureusDB",
    });

    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some error occurred. ", error);
    process.exit(1);
  }
};
