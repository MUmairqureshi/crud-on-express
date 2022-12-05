const mongoose = require("mongoose");
const db = `mongodb://umairq:umair1231@cluster0-shard-00-00.uq04z.mongodb.net:27017,cluster0-shard-00-01.uq04z.mongodb.net:27017,cluster0-shard-00-02.uq04z.mongodb.net:27017/?ssl=true&replicaSet=atlas-3jfpkg-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(db).then(()=>{
    console.log("connection is successfull");
}).catch(()=>{
    console.log("no connection");
})