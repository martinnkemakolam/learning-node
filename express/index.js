const express = require('express');
const app = express();
app.use((req, res, next)=>{
    // middleware gets called before any request method is executed
    res.newObject = 'data'
    next()
})
app.set('port', 2000)
app.get('/', (req, res, next)=>{
    console.log(res.newObject)
    res.send({some: res.newObject})  
})
app.listen(3010, ()=>{
    console.log('listening on port 3010');
})