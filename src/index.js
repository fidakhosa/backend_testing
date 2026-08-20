

import mongoose from "mongoose";

import { DB_NAME } from "./constant";


import express from "express"
const app = express();

( async ()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log(error);
      })
    } catch (error) {
        console.error("error",error)
    }
})()