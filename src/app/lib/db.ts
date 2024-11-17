import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () =>{
    const connectionState = mongoose.connection.readyState;
   if(connectionState == 1){
    console.log("Database is already connected");
    return;
   }

   if(connectionState == 2){
    console.log("Database is connecting...");
    return;
   }
   try{
     mongoose.connect(MONGODB_URI!,{
        dbName : 'fossil_of_knight',
        bufferCommands: true
     });
    console.log("Database is connected");
    }
    catch(error: any){
        console.log("Error connecting to database");
        console.log("Error :", error);
        } 
}

export default connect;