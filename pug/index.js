const pug = require('pug')
const path = require('path')
let location = path.join(__dirname, 'template.pug')
let data = {
    title: 'Testing pug standalone',
    heading: 'what is pug used for',
    uses: [
        'Rendering html',
        'Making email templates',
        'Can be used in cli'
    ],
    admin: true
}
pug.renderFile(location, data, (err, html)=>{
    if (err) {
        console.error(err)
        return
    }
    console.log(html)
})