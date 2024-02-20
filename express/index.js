const express = require('express');
const app = express();
app.use((req, res, next)=>{
    req.newObject = 'data'
})
app.get('/', (req, res, next)=>{
    // console.log(req.newObject)
    res.send({some: 'test'})  
})
app.listen(3010, ()=>{
    console.log('listening on port 3010');
})