import mongoose from 'mongoose';
const Connection = async () => {
    const URL = 'mongodb+srv://codeWithShubham:shubhamkinidhi130617@ecommerceweb.spevi.mongodb.net/PROJECT?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("connected to database");
    } catch (error) {
        console.log("error while connecting to database")
    }
};
export {Connection};