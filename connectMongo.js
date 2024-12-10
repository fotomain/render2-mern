const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

// const localUri = "mongodb+srv://work_user2:Taras777999$Taras777999$@cluster0.algml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const localUri = "mongodb+srv://vtest777999@gmail.com:password777999password777999@cluster0.algml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const url = process.env.MONGODB_CONNECT_URI || localUri

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB
