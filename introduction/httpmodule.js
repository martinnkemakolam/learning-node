let http = require('http')
let server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'application/json'})
    // console.log(req)
    res.end(JSON.stringify({
        "success": true
    }))
})
server.listen(3100, ()=>{
    console.log('listening on port 3100')
})
