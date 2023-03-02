// console.log("hi")

// javaScript synchronous vs asynchronous

// Javascript is by default is synchronous meaning that only one statement is executed at a time

// This can be proven when a statement has an error, javascript will not proceed with the next statement
console.log("hello world");

//consote.log("helloagain");
console.log("hello mr");

/*console.log("helloe world");
for(let i = 0; i <= 1500; i++){
	console.log(i);
}*/
console.log("hello again");

// Asynchronous means that we can proceed to execute other statements, while time consuming code is running in the background

// geting all post

// The Fetch API allows you to asynchronously request for a resource (data)
// A "promise" is an object that represents the eventual completion (or failure) of an asynchronous function and it's resulting value

/*
	
	Syntax:
		fetch("url")

*/

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

 /*

 Syntax: 
 		fetch("url");
 				then((response) => {});

 */

fetch("https://jsonplaceholder.typicode.com/posts")
// The "fetch" method will return a "promise" that resolves to a "Response" object
// The "then" method captures the "Reponse" object and returns another "promise" which will eventually be "resolved" or "rejected"
	.then(response => {
		console.log(response.status)
	});

fetch("https://jsonplaceholder.typicode.com/posts")
// Use the "json" method from the "Response" object to convert the data retrieved into JSON format to be used in our application
		.then((response) =>
			response.json()
			// Print the converted JSON value from the "fetch" request
			// Using multiple "then" methods creates a "promise chain"
		).then((json) => 
			console.log(json));
fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			return response.json()
		}).then((json) => console.log(json));
// The "async" and "await" keywords is another approach that can be used to achieve asynchronous code
// Used in functions to indicate which portions of code should be waited for

async function fetchData(){
	// waits for the "fetch" method to complete then stores the value in the "result" variable
	let result = await fetch("https://jsonplaceholder.typicode.com/posts");
	// Result returned by fetch returns a promise
	console.log(result)
	// The returned "Response" is an object
	console.log(typeof result);
	// We cannot access the content of the "Response" by directly accessing it's body property
	console.log(result.body);
	// We cannot access the content of the "Response" by directly accessing it's body property
	let json = await (result.json());
	// Print out the content of the "Response" object6554
	console.log(json);

}

fetchData();

// getting specific post
// Retrieves a specific post following the Rest API (retrieve, /posts/:id, GET)


fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then(response => response.json())
	.then(json => console.log(json));

// creating a post

/*

		Syntax:
			fetch("url" {options})
				.then((response) => {})
				.then(response => ());

*/

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		title: "New post",
		body: "hello world",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));

// updating a post
// Updates a specific post following the Rest API (update, /posts/:id, PUT)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PUT",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		title: "New post",
		body: "update post",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));

// put/update a post
	// Updates a specific post following the Rest API (update, /posts/:id, Patch)
			// The difference between PUT and PATCH is the number of properties being changed
			// PATCH is used to update the whole object
			// PUT is used to update a single/several properties
fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PATCH",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		title: "corrected post",
	})
}).then(response => response.json())
	.then(json => console.log(json));


//Deletting a post

// Deleting a specific post following the Rest API (delete, /posts/:id, DELETE)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "DELETE",
});
