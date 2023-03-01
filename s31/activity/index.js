const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
	if(request.url == "/login"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Welcome to the login page.")
	} else {
		response.writeHead(404, {"Content-type": "text/plain"});
		response.end("I'm sorry the page you are looking for connot be found.")
	}
});

server.listen(port);

console.log(`Server now accessible at localhost:${port}.`)