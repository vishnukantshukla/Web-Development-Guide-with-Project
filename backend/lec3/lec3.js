const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('tut.html')

//creating the server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(fileContent)// it is used to serve the content
}
)
server.listen(80, '127.0.0.1', () => { console.log("listening on port ") })

// what is the meaning of using the port number 80?
// 80 is the default port number for http requests
//
// what is the meaning of using the ip address
//
