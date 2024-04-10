import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document { //this is your custom schema that you build for your custom data
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({ //Here schema name is Message
    content: {
        type: String,  //here i already define the content type which is string so that i only write String here (in mongoose string must be written in "String" ) 
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})



export interface User extends Document { //this is your custom User schema that you build for your custom data
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: Message[];
    createdAt: Date;
}

const UserSchema: Schema<User> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})