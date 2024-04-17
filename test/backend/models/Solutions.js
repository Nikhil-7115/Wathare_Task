import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SolutionsSchema = new Schema(
    {
        ts:{
            type:String,
            length:40,
        },
        machine_status:{
            type:Boolean,
            default: 0
            // Plot yellow if sample is 0. Plot green if sample is 1. Plot red if sample is missing 
        },
        vibration:{
            type:String,
            default: 0
        }
    }
)

const Solutions = mongoose.model("Solutions","SolutionsSchema");   //We making model by taking crud operations function from mongoose 

export default Solutions;

/*
 "ts": "2024-01-21T15:00:06Z",
        "machine_status": 1,
        "vibration": 574
*/