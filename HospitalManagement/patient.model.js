import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number, 
        required: true
    },
    reletiveInfo:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    admittedAt:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }

},{timestamps:true});

export const Patient = mongoose.model('Patient', patientSchema);