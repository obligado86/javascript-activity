db.inventory.insertMany([
		{
			"name": "Javascript for Beginners",
			"author": "James Doe",
			"price": 5000,
			"stocks": 50,
			"publisher": "JS Publishing House"
		},
		{
			"name": "HTML and CSS",
			"author": "John Thomas",
			"price": 2500,
			"stocks": 38,
			"publisher": "NY Publishers"
		},
		{
			"name": "Web Development Fundamentals",
			"author": "Noah Jimenez",
			"price": 3000,
			"stocks": 10,
			"publisher": "Big Idea Publishing"
		},
		{
			"name": "Java Programming",
			"author": "David Michael",
			"price": 10000,
			"stocks": 100,
			"publisher": "JS Publishing House"
		}
	]);

// comparison  query operators
// $gt operator - Matches the values that are greater than a specified value.
// $gte operator - Matches the values that are greater than or equal to a specified value.

/*

	Syntax:
		for $gt:
			db.collectionName.find(
				{
					"field": {$gt: "value"}
				}
			);
			for $gte:
				db.collectionName.field({"field": {$gte: "value"}});

*/

db.inventory.find(
	{
		"stocks": { $gte: 50}
	}
);

db.inventory.find(
	{
		"stocks": { $gt: 500}
	}
);


// $lt operator - Matches the values that are less than a specified value.
// $lte operator - Matches the values that are less than or equal to a specified value.
/*

	Syntax:
		for $lt:
			bd.collectionName.find(
				{
					"field": {$lt: "value"}
				}
			);
		for $lte:
			bd.collectionName.find(
				{
					"field": {$lte: "value"}
				}
			);

*/

db.inventory.find(
		{
			"stocks": {$lt: 50}
		}
	);

db.inventory.find(
		{
			"stocks": {$lte: 50}
		}
	);

// $ne operator - Matches all values that are "NOT" equal to a specified value.

/*
		Syntax:
			for $ne:
				bd.collectionName.find(
					{
						"field": {$ne: "value"}
					}
				);
*/

db.inventory.find(
		{
			"stocks": {$ne: 50}
		}
	);

// $eq operator - Matches all values that are equal to a specified value.

/*
		Syntax:
			for $eq:
				bd.collectionName.find(
					{
						"field": {$eq: "value"}
					}
				);
*/

db.inventory.find(
		{
			"stocks": {$eq: 50}
		}
	);

// $in operator - Matches any of the values specified in an array.
/*
		Syntax:
			bd.collectionName.find(
				{
					"field": 
						{
							$in: [value1, value2]
						}
				}
			);
*/

db.inventory.find(
		{
			"price": {
				$in: [10000,5000]
			}
		}
	);

// $nin operator - Matches none of the values specified in an array.
/*
		Syntax:
			bd.collectionName.find(
				{
					"field": 
						{
							$nin: [value1, value2]
						}
				}
			);
*/

db.inventory.find(
		{
			"price": {
				$nin: [10000,5000]
			}
		}
	);

db.inventory.find(
		{
			"price": {$gt: 2000} && {$lt: 4000}
		}
	);
// Mini Activity:
/*
	Mini-Activity:
		1. In the inventory collection, return all the documents that have the price equal or less than 4000.
		2. In the inventory collection, return all the documents that have stocks of 50 and 100

*/

db.inventory.find(
		{
			"price": {$lte: 4000}
		}
	);

db.inventory.find(
		{
			"stocks": {
				$in: [50, 100]
			}
		}
	);

// logical  Query Operator
/*
	$or operator - Joins query clauses with a logical OR and returns all documents that match the conditions of either clause.

	Syntax:
		db.collectionName.find({
			$or: [
				{"fieldA": "valueA"},
				{"fieldB": "valueB"}
			]
		})
*/
db.inventory.find({
			$or: [
				{"name": "HTML and CSS"},
				{"publisher": "JS Publishing House"}
			]
		});

db.inventory.find({
			$or: [
				{"author": "James Doe"},
				{"price": {
					$lte: 5000
				}}
			]
		});

db.inventory.find({
	$or: [
			{"stocks": {
				$nin: [10, 50]
			}},
			{
				"stocks": {
					$gte: 50
				}
			}
		]
});

// $and operator - Joins query clauses with logical AND; returns all documents that match the conditions of both clauses.
/*

Syntax:
		db.collectionName.find({
			$and: [
				{"fieldA": "valueA"},
				{"fieldB": "valueB"}
			]
		})
*/

db.inventory.find({
			$and: [
				{
					"stocks": {
						$ne: 50
					}
				},
				{
					"price": {
						$ne: 5000
					}
				}
			]
		});

// field Projection
// Inclusion - Matches the document according to the given criteria and returns included field/s.

/*

Syntax:
		db.collectionName.find({
			{ criteria (the key-value pair) }
			{ "field": 1 }
		})
*/

db.inventory.find(
			{
				"publisher": "JS Publishing House"
			},
			{
				"name": 1,
				"author": 1,
				"price": 1
			}
		);

// Exclusion - Matches documents with given criteria and returns fields that were not excluded

/*

Syntax:
		db.collectionName.find({
			{ criteria (the key-value pair) }
			{ "field": 0 }
		})
*/

db.inventory.find(
			{
				"author": "Noah Jimenez"
			},
			{
				"price": 0,
				"stocks": 0
			}
		);

//combine
db.inventory.find(
			{
				"price": { $lte: 5000}
			},
			{
				"_id": 0,
				"name": 1,
				"author": 1
			}
		);

// Evaluation Query Operation

// $regex operator (regular expression) - selects documents where values match a specified regular expression.

/*
Syntax:
		db.collectionName.find({
			{
					"field": $regex: {'pattern'
							$options: "optionValue"}
			},
		})
*/
// case sensitive
db.inventory.find({
		"author": {
				$regex: "M"
			}
	});

// case insensitivr
db.inventory.find({
		"author": {
				$regex: "M",
				$options: '$i'
			}
	});

/*
	Mini Activity:
		- in the inventory collections, find a "name" of a book/s with letters "java" in it and has a "price" of greater than or equal to 5000.
			-- use $and, $regex and $gte operators

*/
db.inventory.find({
		$and: [
				{
					"name": {$regex: "Java"}
				},
				{
					"price": {
						$gte: 5000
					}
				}
			]
	});