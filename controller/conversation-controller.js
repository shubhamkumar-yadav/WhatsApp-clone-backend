import { conversation } from "../model/conversation.js";
const newConversation = async (request,response)=>{
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
    try {
        const exist = await conversation.findOne({members:{$all : [senderId,receiverId]}});
        if (exist){
            response.status(200).json("Conversation already exist");  
            return;
        }
        else{
            const newConversation = new conversation({members:[senderId,receiverId]});
            await newConversation.save();
            response.status(200).json("new coversation added successfully");
        }
    } catch (error) {
        response.status(500).json(error);
    }
};
const getConversation = async (request,response)=>{
    try {
        const Conversation = await conversation.findOne({members:{$all:[request.body.sender,request.body.receiver]}});
        response.status(200).json(Conversation);
    } catch (error) {
        response.status(500).json(error);
    }
};
export {newConversation,getConversation};