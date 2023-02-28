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

//2. Use the count operator to count the total number of fruits on sale.

db.fruits.count({"onSale": true});

db.fruits.aggregate([
	{$match: {"onSale": true}},
	{$group {"_id": "$onSale", "fruitsOnSale": {$sum: "$onSale"}}},
	{$project: {"fruitsOnSale": 1}}
	]);

//3. Use the count operator to count the total number of fruits with stock more than 20.

db.fruits.count({})

//4. Use the average operator to get the average price of fruits onSale per supplier.


//5. Use the max operator to get the highest price of a fruit per supplier.

//6. Use the min operator to get the lowest price of a fruit per supplier.