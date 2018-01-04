// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var my_planes = [
{
	make:"Gulfstream" ,
	model:"G650" ,
	jet: true,
},
{
	make:"Cessna" ,
	model:"172" ,
	jet: false,
},
{
	make:"Cessna" ,
	model:"C750" ,
	jet: true,
},
{
	make:"Bombardier" ,
	model:"GL5T" ,
	jet: true,
},
{
	make:"Piper" ,
	model:"PA34" ,
	jet: false,
}
];

//removing all airplanes from the list before seeding again
db.Airplane.remove({}, function(err, airplanes){
	if(err){console.log('Experienced a problem removing ',err);}
	else{
		db.Airplane.create(my_planes, function(err, myAirplanes){
			if(err){return console.log('Had problems seeding planes ', err);}
			console.log('Seeded Planeas');
			process.exit();
		});
	}
});