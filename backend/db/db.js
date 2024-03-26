const mongoose = require ('mongoose');

const db = async ()=> {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL) ;
        console.log("Mongo DB connected ")
    }catch{
        console.log("DB Connected Error")
    }

}

module.exports = {db}