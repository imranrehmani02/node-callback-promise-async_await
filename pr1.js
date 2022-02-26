

//**       PROMISE       **//

// Promise :- A Promise is an object which takes a callback and execute it asynchronously.
// 			A Promise is considered easier to use and maintain than callbacks.

// 			A Promise did not remove the use of callbacks, but it made the changing of 
// 			functions straight forword and simplified the code it much easier to read.


// 	Promise :- resolve
// 				reject
// 				pending (Promise is pending while executing)


// 	-----------------------------------------------------------------------------------


const passengers = [
	{name : 'Anand Jain', city : 'Indore'},
	{name : 'Saqlain Rehmani', city : 'Bhopal'}
]

function bookPassenger(passenger)
{
	return new Promise((resolve,reject)=>
	{
		setTimeout(function()
		{
			passengers.push(passenger);
			console.log('Passenger has been booked');
			console.log();
			const error = false;
			if(!error)
			{
				resolve()
			}
			else
			{
				reject()
			}
		},2000)
	})
}

function getPassengers()
{
	setTimeout(function()
	{
		passengers.forEach(function(passenger)
		{
			console.log('Name : '+passenger.name+', City : '+passenger.city)
		})
		console.log('Passengers have been fetched.');
	},2000)
}


let passenger = {name : 'Naved Khan', city : 'Badwani'}

bookPassenger(passenger).then(getPassengers).catch(function()
{
	console.log('Error');
})