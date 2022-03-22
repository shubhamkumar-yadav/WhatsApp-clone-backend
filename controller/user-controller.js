import { user } from "../model/WhatsAppUser.js";
const addUser = async (request,response)=>{
    try {
        let exist = await user.findOne({googleId:request.body.googleId});
        if(exist){
            response.status(200).json("User already exist");
        }
        else{
            const newUser = new user(request.body);
            await newUser.save();
            response.status(200).json('user saved sucessfully');
        }
    } catch (error) {
        response.status(500).json(error);
    }
};
const getUsers = async (request,response)=>{
    try {
        let users = await user.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json(error);
    }
};
export {addUser,getUsers};