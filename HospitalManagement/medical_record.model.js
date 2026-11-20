import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientName:{
        type: String,
        required: true
    },
    patientId:{
        type: String,
        required: true
    },
    doctorName:{
        type: String,
        required: true
    },
    doctorId:{
        type: String,
        required: true
    },
    
},{timestamps:true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);