import mongoose from 'mongoose'

const Message = new mongoose.Schema({
 
    Fname: {type:  String},
    Lname: {type:  String},
    email: {type:  String},
    phone: {type:  String},
    message: {type:  String},
  
})
export const messageModel = mongoose.model('message', Message);

