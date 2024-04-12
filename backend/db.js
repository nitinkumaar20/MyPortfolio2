import mongoose from 'mongoose'

const uri = "mongodb://0.0.0.0:27017";

export const connectToDB = mongoose.connect(uri,{dbName:'Portfolio'});


