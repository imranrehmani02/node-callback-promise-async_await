function Oddeven()
{
	var num = 20;
	return new Promise(function(resolve,reject)
	{
		if(num%2==0)
			resolve('Even Number')
		else
			reject('Odd Number')
	})
}

Oddeven().then((msg)=>
{
	console.log(msg)
})
.catch((msg)=>
{
	console.log(msg)
})