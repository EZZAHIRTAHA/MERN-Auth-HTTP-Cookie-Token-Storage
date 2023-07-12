import mongoose, { mongo } from "mongoose";


const connectDb = async() => {
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
        console.log(`Connected to: mongodb:${mongoose.connection.host}:${mongoose.connection.port}`.green.bold.underline.italic)
    }
    catch{
        throw new Error("Can't Connect To MongoDB".red.bold)
    } 
}
console.log(mongoose.connection.db)



export default connectDb;