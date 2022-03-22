import { message } from "../model/message.js";
const newMessage = async(request,response)=>{
    try {
        const newMessage = new message(request.body);
        await newMessage.save();
        response.status(200).json("message saved");
    } catch (error) {
        response.status(500).json(error);
    }
};
const getMessage = async(request,response)=>{
    try {
        const messages = await message.find({conversationId:request.params.id})
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }
};
export {newMessage,getMessage};