const http = require("http");

const port = 4000;

http.createServer(function(request, response){
	// The HTTP method of the incoming request can be accessed via the "method" property of the "request" parameter
	// The method "GET" means that we will be retrieving or reading information
	if(request.url == "/items" && request.method == "GET"){
		// Requests the "/items" path and "GETS" information
		response.writeHead(200, {"Content-type": "text/plain"});
		// Ends the response process
		response.end("data retrieve from the database");
		// The method "POST" means that we will be adding or creating information
		// In this example, we will just be sending a text response for now
	} else if (request.url == "/items" && request.method == "POST"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("data to be send to the database");
	}
}).listen(port);

console.log("running at localhost:4000");