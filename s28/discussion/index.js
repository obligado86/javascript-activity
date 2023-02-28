// CRUD Operations
/*
	- CRUD operations are the heart of any backend application.
	- Mastering the CRUD operations is essential for any developer.
	- This helps in building character and increasing exposure to logical statements that will help us manipulate our data.
	- Mastering the CRUD operations of any language makes us a valuable developer and makes the work easier for us to deal with huge amounts of information.

Insert One Document
			db.collectionName.insertOne({
				"fieldA": "valueA",
				"fieldB": "valueB"
			});

		Insert Many Documents
			db.collectionName.insertMany([
				{
					"fieldA": "valueA",
					"fieldB": "valueB"
				},
				{
					"fieldA": "valueA",
					"fieldB": "valueB"
				}
			]);

*/



// insert documents (create)
db.users.insertOne({
	"firstName": "Janie",
	"lastName": "Jardeleza",
	"mobileNumber": "+639123456789",
	"email": "janiejardeleza@gmail.com",
	"company": "Zuit",
});

db.users.insertMany([
		{
			firstName: "Stephen",
			lastName: "Hawkings",
			age: 76,
			contact: {
				phone: "87654321",
				email: "setphenhawkings@gmail.com"
			},
			courses: ["python", "react", "php", "css"],
			department: "none"
		},
		{
			firstName: "Niel",
			lastName: "Armstorng",
			age: 82,
			contact: {
				phone: "98765432",
				email: "nielarmstorng@gmail.com"
			},
			courses: ["react", "laravel", "sass"],
			department: "none"
		}
	]);

// find document (read/retrieve)

/*

	Syntax:
	-db.collectionName.find() - find all
	-db.collectionName.find({field: value});
	-db.collectionName.findOne({field:value}) -first document thatwill match the carteria
	-db.collectionName.findOne({}) - find first document

*/

db.users.find();
db.users.find({"firstName": "Stephen"});

//Mini Activity
	/*
		1. Make a new collection with the name "courses"
		2. Insert the following fields and values

			name: Javascript 101
			price: 5000
			description: Introduction to Javascript
			isActive: true

			name: HTML 101
			price: 2000
			description: Introduction to HTML
			isActive: true
	*/
db.courses.insertMany([
	{
		name: "JavaScript 101",
		price: 5000,
		description: "Introduction to Javascript",
		isActive: true
	},
	{
		name: "HTML 101",
		price: 2000,
		description: "Introduction to HTML",
		isActive: true
	}
]);

db.users.findOne({});

// updating/replacing/modifying documents (update)

/*

	syntax:

	updating one document
		db.collectionName:updateOne(
			{
				field: value
			};
			{
				$set: {
					fieldTobeUpdated: value
				}
			}
		);
			-is to update firstmatching document in our collection

	updating/many documents
	db.collectionName.UpdateMany(
		{
			criteria: value
		},
		{
			$set: {
				fieldToBeUpdated: value
			}
		}
	);

	-update multiple document 

*/

db.users.insertOne({
	"firstName": "test",
	"lastName": "test",
	"mobileNumber": "+639123456789",
	"email": "test@gmail.com",
	"company": "test",
});

db.users.updateOne(
		{
			"firstName": "test"
		},
		{
			$set: {
				"firstName": "Bill",
				"lastName": "Gates",
				"mobileNumber": "123456789",
				"email": "billagtes@mail.com",
				"company": "Microsoft",
				"status": "active"
			}
		}
	);

/*
	Mini Activity:
		- Use updateOne() to change the isActive status of a course into false.
		-Use the updateMany() to set and add “enrollees” with a value of 10.
*/

db.courses.updateOne(
		{
			"name": "JavaScript 101"
		},
		{
			$set: {
				"isActive": false,
			}
		}
	);

db.courses.updateMany(
		{},
		{
			$set:{
				"enrollees": 10
			}
		}
	);

db.courses.updateMany(
		{},
		{
			$rename:{
				"department": "dept"
			}
		}
	);