db.fruits.insertMany([
			{
				name : "Apple",
				color : "Red",
				stock : 20,
				price: 40,
				supplier_id : 1,
				onSale : true,
				origin: [ "Philippines", "US" ]
			},

			{
				name : "Banana",
				color : "Yellow",
				stock : 15,
				price: 20,
				supplier_id : 2,
				onSale : true,
				origin: [ "Philippines", "Ecuador" ]
			},

			{
				name : "Kiwi",
				color : "Green",
				stock : 25,
				price: 50,
				supplier_id : 1,
				onSale : true,
				origin: [ "US", "China" ]
			},

			{
				name : "Mango",
				color : "Yellow",
				stock : 10,
				price: 120,
				supplier_id : 2,
				onSale : false,
				origin: [ "Philippines", "India" ]
			}
		]);

// MongoDB aggregation method

// Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data


// single-purpose aggregation operations
// if we only need simple agregations with only 1 stage
db.fruits.count();

/*
	-for "$match" is used to pass documents that meet the specified conditions
		Syntax: {$match: {"field": "value"}}

	-foe "$group" is used to group the elements together and field-value pairs using the data from the grouped elements
		Syntax: {$group: {"-id": "value", "fieldResult": "valueResult"}}
*/

// pipelines with multiple stages

db.fruits.aggregate([
		{
			$match: {
				"onSale": true
			}
		},
		{$group: 
			{
				"_id": "$supplier_id", //group by suppliers
				"total": {
					$sum: "$stock" // total values of all stocks
				}
			}
		}
	]);

// field projection with aggregation
// $project can be used aggregating data to include/exclude field fro, the returned results

/*

	Syntax:
		{$project: {"field": 1/0}}

*/

db.fruits.aggregate([
		{$match: {"onSale": true}},
		{$group: {"_id": "$supplier_id", "total": {$sum: "$stock"}}},
		{$project: {"_id": 0}}
	]);

// MINI-ACTIVITY
/*
	aggeregate all fruits that has a stock greater than or equal 20
	group by supplier id 
	show the sum of all stocks
		{$sort: {"fieldToStart": 1/-1}}
*/

db.fruits.aggregate([
		{$match: {"stock": {$gte: 20}}},
		{$group: {"_id": "$supplier_id", "total": {$sum: "$stock"}}},
	]);

db.fruits.aggregate([
		{$match: {"onSale": true}},
		{$group: {"_id": "$supplier_id", "total": {$sum: "$stock"}}},
		{$sort: {"total": -1}}
	]);

db.fruits.aggregate([
		{$match: {"onSale": true}},
		{$group: {"_id": "$supplier_id", "total": {$max: "$stock"}}},
		{$sort: {"total": -1}}
	]);

db.fruits.aggregate([
		{$match: {"onSale": true}},
		{$group: {"_id": "$supplier_id", "total": {$min: "$stock"}}},
		{$sort: {"total": -1}}
	]);

db.fruits.aggregate([
		{$match: {"onSale": true}},
		{$group: {"_id": "$supplier_id", "total": {$avg: "$stock"}}},
		{$sort: {"total": -1}}
	]);

// computation for aggregated results
// use in group staging
/*
	$sum - to total the values
	$avg - to total avg of values
	$min - minimum value of the field
	$max - maximum value of the field

	Syntax:
		$group: { 
			"_id": "fieldToBeGrouped",
			"fieldForResults": { $sum/max/min/avg: "$fieldToGetResults"} 
		}
*/

//agregaating results based on array fields
/*
	- The "$unwind" deconstructs an array field from a collection/field with an array value to output a result for each element.
		Syntax:
			{$unwind: "$field"}
*/

db.fruits.aggregate([
	{$unwind: "$origin"}
]);

db.fruits.aggregate([
	{$unwind: "$origin"},
	{$group: {"_id": "$origin", "kinds": {$sum: 1}}}
]);

// ======== schema design ===========

db.owners.insertOne({
	"name": "John Smith",
	"contact": "09123456789"
});

// Reference data model
db.suppliers.insertOne({
	"name": "ABC fruits",
	"contact": "09987654321",
	"owner_id": <owner_id>
});

// embedded data model
db.suppliers.insertOne({
	"name": "DEF fruits",
	"contact": "90876543456",
	"address": {
		{
			"street": "123 San Jose St",
			"city": "Manila"
		},
		{
			"street": "456 gil Puyar",
			"city": "Makati"
		}
	}
});

