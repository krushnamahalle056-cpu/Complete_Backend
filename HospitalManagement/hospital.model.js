import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    doctors:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    ],
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,   // pincode can be string because some countries have alphanumeric pincode
        required: true
    }
},{timestamps:true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);