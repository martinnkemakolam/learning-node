let {path} = require('./module')
let array = []
let string = ''
let number = 10
let object = {}
let buffer = Buffer.from(['0x10','0x15','0x20','0x25','0x30','0x35'])
console.log(buffer.toString())
let logProcess = ()=>{
    console.log(__dirname + '/test')
    console.log(process.pid)
    console.log(process.argv)
    console.log(process.env)
    console.log(process.platform)
    console.log(process.release)
    console.log(process.versions)
    console.log(process.cwd())
    console.log(process.uptime())
    console.log(process.memoryUsage())
}
console.log(path, array, string, number, object)
logProcess()