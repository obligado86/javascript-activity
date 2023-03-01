const http = require("http");

const port = 4000;

http.createServer((request, response) => {
	if(request.url == "/" && request.method == "GET"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Welcome to booking system");
	} else if(request.url == "/profile" && request.method == "GET"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Welcome to your profile");
	} else if(request.url == "/courses" && request.method == "GET"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Here's our courses available");
	} else if(request.url == "/addCourse" && request.method == "POST"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Add courses to our resourses");
	} else if(request.url == "/updateCourse" && request.method == "PUT"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Update a course to our resources");
	} else if(request.url == "/archieveCourse" && request.method == "DELETE"){
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Archeive courses to our resources");
	} else {
		response.writeHead(404, {"Content-type": "text/plain"});
		response.end("page is not available");
	}
}).listen(port);

console.log(`Server now accessible at localhost:${port}.`);