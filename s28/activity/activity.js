//Insert a single room (insertOne method) with the following details:
db.rooms.insertOne({
	name: "single",
	accomodates: 2,
	price: 1000,
	description: "A simple room with all the basic necessities",
	roomsAvailable: 10,
	isAvailable: false
});


//Insert multiple rooms (insertMany method) with the following details:
db.rooms.insertMany([
		{
			name: "double",
			accomodates: 3,
			price: 2000,
			description: "A room fit for a small family going on a vacation",
			roomsAvailable: 5,
			isAvailable: false
		},
		{
			name: "queen",
			accomodates: 4,
			price: 4000,
			description: "A room with a queen sized bed perfect for a simple getaway",
			roomsAvailable: 15,
			isAvailable: false
		}
	]);

//Use the find method to search for a room with the name double.
db.rooms.find({"name": "double"});

//Use the updateOne method to update the queen room and set the available rooms to 0.
db.rooms.updateOne(
		{
			"name": "queen"
		},
		{
			$set: {
				"roomsAvailable": 0
			}
		}
	);

//Use the deleteMany method rooms to delete all rooms that have 0 availability.

db.rooms.deleteMany({"roomsAvailable": 0});
