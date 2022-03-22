import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    givenName:{
        type:String,
        required:true
    },
    givenName:{
        type:String
    }
    
});
const user = mongoose.model('WhatsAppUser',userSchema);
export {user};