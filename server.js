const express = require('express');
eobj = express();

const {MongoClient} = require('mongodb');
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL); // Connect buttuon in compass

port = 5100;

eobj.listen(port,function(){
    console.log('Server is listening now....');
})

eobj.use((req,res,next) =>{

    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");

    next();
})


eobj.get('/',function(request,response){
    response.send("Marvellous server is live now")
})

eobj.get('/readData',readData);



//////////////////// Function Definations ////////////////////////////////////////

async function getConnection()
{
    let conn =  await client.connect();

    let db = conn.db("Marvellous");

    return db.collection("Batches");
}

async function readData(req,res)
{
    let collection = await getConnection();
    let result = await collection.find().toArray();
    res.send(result);
}



