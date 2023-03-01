// Use the "require" directive to load Node.js modules
		// A "module" is a software component or part of a program that contains one or more routines
		// The "http module" lets Node.js transfer data using the Hyper Text Transfer Protocol
		// The "http module" is a set of individual files that contain code to create a "component" that helps establish data transfer between applications
		// HTTP is a protocol that allows the fetching of resources such as HTML documents
		// Clients (browser) and servers (node JS/express JS applications) communicate by exchanging individual messages.
		// The messages sent by the client, usually a Web browser, are called requests
		// The messages sent by the server as an answer are called responses.
let http = require("http");

// Using this module's createServer() method, we can create an HTTP server that listens to requests on a specified port and gives responses back to the client
		// The http module has a createServer() method that accepts a function as an argument and allows for a creation of a server
		// The arguments passed in the function are request and response objects (data type) that contains methods that allow us to receive requests from the client and send responses back to it
http.createServer(function (request, response){

	response.writeHead(200, {"Content-type": "text/plain"});

	response.end("hello")
	// A port is a virtual point where network connections start and end.
			// Each port is associated with a specific process or service
			// The server will be assigned to port 4000 via the "listen(4000)" method where the server will listen to any requests that are sent to it eventually communicating with our server
}).listen(4000);

console.log("server running at localhost:4000");