// S29 Activity Template:

// Use this database sample:
db.users.insertMany([
	{
		"firstName": "Stephen",
		"lastName": "Hawking",
		"age": 76,
		"email": "stephenhawking@mail.com",
		"department": "HR"
	},
		{
		"firstName": "Niel",
		"lastName": "Armstrong",
		"age": 82,
		"email": "nielarmstrong@mail.com",
		"department": "HR"
	},
	{
		"firstName": "Bill",
		"lastName": "Gates",
		"age": 65,
		"email": "billgates@mail.com",
		"department": "Operations"
	},
	{
		"firstName": "Jane",
		"lastName": "Doe",
		"age": 21,
		"email": "johndoe@mail.com",
		"department": "HR"
	}
]);

// Activity Proper:

/*
	1.)  Find users with the letter “s” in their first name or “d” in their last name.
			a. Use the $or operator.
			b. Show only the firstName and lastName fields and hide the _id field.

*/

// Code here:

db.users.find({
			$or: [
				{
					"firstName": {
						$regex: "s",
						$options: '$i'
					}
				},
				{
					"lastName": {
						$regex: "d",
						$options: '$i'
					}
				}
			],
		},
		{
				"_id": 0,
				"firstName": 1,
				"lastName": 1,
		}

		);

/*
	2.) Find users who are from the HR department and their age is greater than or equal to 70.
			a. Use the $and operator
*/

// Code here:

db.users.find({
			$and: [
				{
					"department": "HR" 
				},
				{
					"age": {
						$gte: 70
					}
				}
			]
		});
/*
	3.) Find users with the letter e in their first name and has an age of less than or equal to 30.
			a. Use the $and, $regex and $lte operators
*/

// Code here:

db.users.find({
			$and: [
				{
					"firstName": {
						$regex: "e",
						$options: '$i'
					}  
				},
				{
					"age": {
						$lte: 30
					}
				}
			]
		});
