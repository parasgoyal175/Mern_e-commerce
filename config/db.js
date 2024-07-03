import mongoose from "mongoose"
//connect database
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongodb databsse ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in mongodb ${error}`)
    }
}

export default connectDB