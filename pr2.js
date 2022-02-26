var data = true

var promise = new Promise(function(resolve,reject)
{
	if(data)
		resolve()
	else
		reject()
});

promise.then(function()      //function inside then is run as resolve  
{
	console.log('Success')
})
.catch(function()          //function inside catch is run as reject
{
	console.log('Failed')
})