import mongoose from "mongoose";

const hospitalrecordSchema = new mongoose.Schema({
    
},{timestamps:true});

export const HospitalRecord = mongoose.model('HospitalRecord', hospitalrecordSchema);