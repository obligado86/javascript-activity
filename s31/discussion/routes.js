// ctrl + c = stop the server

const http = require("http");

//creates a variable "port" to store the port number

const port = 4000;

// creates a variable "server" that stores the output of the "createServer" method
const server = http.createServer((request, response) => {

	// Accessing the "greeting" route returns a message of "Hello World"
				// "request" is an object that is sent via the client (browser)
				// The "url" property refers to the url or the link in the browser
	if(request.url == "/greeting"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("hello again");
	} else if (request.url == "/homepage"){
		response.writeHead(200, {"Content-type": "html"});
		response.end("<h1>this is the homepage</h1>");
	} else {
		response.writeHead(404, {"Content-type": "text/plain"});
		response.end("page is not available");
	}
});

// uses "server" and "port" variable created
server.listen(port);

// when server is running console will print the message via terminal.
console.log(`Server now accessible at localhost:${port}.`);