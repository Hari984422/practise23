const HTTP = require ('http');
const server = http.createServer((req,res)=>{
    console.log("new req. received");
    res.end("Hello Server");
})
server.listen(8000,(err)=>{
    if(err){
        throw error
    }
    console.log("server is running on port no 8000");
})