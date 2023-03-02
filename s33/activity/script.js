//3. Create a fetch request using the GET method that will retrieve all the to do list items from JSON Placeholder API.

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => console.log(json));
;
//4. Using the data retrieved, create an array using the map method to return just the title of every item and print the result in the console.

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => {
		let i = 0
		let titles = json.map((data) => {
			return `${i++}: ${data.title}`;
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

//8. Create a fetch request using the PUT method that will update a to do list item using the JSON Placeholder API.

/*9. Update a to do list item by changing the data structure to contain the following properties:
- Title
- Description
- Status
- Date Completed
- User ID*/

//10. Create a fetch request using the PATCH method that will update a to do list item using the JSON Placeholder API.

//11. Update a to do list item by changing the status to complete and add a date when the status was changed.

//12. Create a fetch request using the DELETE method that will delete an item using the JSON Placeholder API.