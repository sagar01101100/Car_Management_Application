import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
        console.log("Database is already connected");
        return;
    }

    if (connectionState === 2) {
        console.log("Database is connecting...");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI!, {
            dbName: 'CMAdb',
            bufferCommands: true
        });
        console.log("Database is connected");
    } catch (error: unknown) {
        console.log("Error connecting to database");
        if (error instanceof Error) {
            console.log("Error:", error.message);
        } else {
            console.log("An unknown error occurred:", error);
        }
    }
};

export default connect;
