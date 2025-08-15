import mongoose, { Connection } from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
  throw new Error(
    "Please define the DATABASE_URI environment variable inside .env.local"
  );
}

let cachedConnection: Connection | null = null;

export async function connectDatabase() {
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }

  try {
    const cnx = await mongoose.connect(DATABASE_URI!);
    cachedConnection = cnx.connection;
    console.log("New mongodb connection established");
    return cachedConnection;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
