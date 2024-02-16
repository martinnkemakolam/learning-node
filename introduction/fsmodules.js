// The file system module for reading and writing files
let fs = require('fs')
const path = require('path')
// let dataWritten
debugger
let writeData = (arg)=>{
    debugger
    fs.writeFile(path.join(__dirname,'introduction.js'), arg + 'test',(err)=>{
        if(err) {
            console.error(err)
        }else{
            console.log('written successfully')
        }
    })
}
debugger
fs.readFile(path.join(__dirname,'introduction.js'), (err, data)=>{
    if (err) {
        console.error(err)
        process.exit(1)
    }else{
        console.log(data.toString())
        writeData(data.toString())
    }
})

// streaming with fs

fs.createReadStream(path.join(__dirname,'introduction.js')).pipe(process.stdout)

