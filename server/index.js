import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {graphqlHTTP} from "express-graphql";
import connectDB from './config/db.js'
import {schema} from './schema/schema.js'
dotenv.config()
connectDB();


const port =process.env.PORT || 5000

const app=express();
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development'
}))

app.listen(port,console.log(`Server is running on port ${port}`))