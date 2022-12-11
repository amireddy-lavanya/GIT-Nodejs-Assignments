const http = require("http");
const port = 8081;

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    //res.setHeader(200, "Content-Type", "application/json");
    const url= req.url;
    switch (url) {
        case "/welcome":
            res.writeHead(200,"Content-Type", "text/plain");
            res.end("Welcome to Dominos!");
            break
        case "/contact":
            res.writeHead(200 , "Content-Type", "application/json");
             let data={
                  "phone": '18602100000',
               "email": 'guestcaredominos@jublfood.com'
                 }
                 res.write(JSON.stringify(data))
            res.end();
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
    
    } 

module.exports = httpServer;
httpServer.listen(port , ()=>console.log(` listening on port ${port}`))

