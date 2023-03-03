//3. Create a fetch request using the GET method that will retrieve all the to do list items from JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => console.log(json));
;
//4. Using the data retrieved, create an array using the map method to return just the title of every item and print the result in the console.

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => {
		let titles = json.map((data) => {
			return data.title;
		});
		console.log([titles])
	});

//5. Create a fetch request using the GET method that will retrieve a single to do list item from JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((json) => console.log(json));

//6. Using the data retrieved, print a message in the console that will provide the title and status of the to do list item.

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((json) => console.log(`The Item "${json.title}" on the list has a status of ${json.completed}`));

//7. Create a fetch request using the POST method that will create a to do list item using the JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos", {
	method: "POST",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		completed: false,
		title: "Created To Do List Item",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));


//8. Create a fetch request using the PUT method that will update a to do list item using the JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "PUT",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		dateCompleted: "Pending",
		description: "To update the my to do list with a different data structure",
		status: "Pending",
		title: "Updated To Do List Item",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));

/*9. Update a to do list item by changing the data structure to contain the following properties:
- Title
- Description
- Status
- Date Completed
- User ID*/

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "PATCH",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		completed: false,
		dateCompleted: "07/09/21",
		status: "Complete",
		title: "delectus aut autem",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));


//10. Create a fetch request using the PATCH method that will update a to do list item using the JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "PATCH",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		completed: false,
		dateCompleted: "08/09/21",
		status: "Pending",
		title: "delectus aut autem",
		userId: 1
	})
}).then(response => response.json())
	.then(json => console.log(json));

//11. Update a to do list item by changing the status to complete and add a date when the status was changed.

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "PUT",
	headers: {
		"Content-type": "application/json"
	},
	body: JSON.stringify({
		dateCompleted: "08/15/21",
		status: "Complete",
	})
}).then(response => response.json())
	.then(json => console.log(json));

//12. Create a fetch request using the DELETE method that will delete an item using the JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos/1", {
	method: "DELETE",
});