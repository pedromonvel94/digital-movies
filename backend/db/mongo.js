import mongoose from "mongoose";

export async function connectMongo() {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("Falta MONGO_URI en .env");
    
    try{
        mongoose.set("strictQuery", true);

        await mongoose.connect(uri);
        console.log("✅ MongoDB conectado");
    } catch(e){
        throw new Error("El error es: " + e);
    }
}