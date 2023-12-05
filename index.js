const fs = require('fs')
const http = require('http')
const url = require('url')

//////////////////////////////////////////////////////
//files

//blocking, synchronous way
// const { text } = require('stream/consumers')

// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textInput)

// const textOutput = `this is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}` 
// fs.writeFileSync('./txt/output.txt', textOutput)
// console.log('File written')

//non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3)

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written')
//             })
//         })
//     })
// })
// console.log('Will read file!')

/////////////////////////////////////////
//server
const tempOverview = fs.readFileSync('./dev-data/templates/template-overview.html', 'utf-8')
const tempCard = fs.readFileSync('./dev-data/templates/template-card.html', 'utf-8')
const tempProduct = fs.readFileSync('./dev-data/templates/template-product.html', 'utf-8')
const data = fs.readFileSync('./dev-data/data.json', 'utf-8') //read file synchronously
const dataObject = JSON.parse(data)


const server = http.createServer((req, res) => {

    const pathName = req.url

//Overview page

    if(pathName === '/' || pathName === '/overview'){

        res.end("this is the overview")

    //Product page
    } else if(pathName === '/product'){
        res.end("this is the product")

    //API
    } else if(pathName === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(data)

    //Not Found
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end("<h1>page not found!</h1>")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log(`Listening at port 8000`)
})