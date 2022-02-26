
//Async-await using .then().catch()

async function myFetch()
{
	let response = await fetch('coffee.jpg');

	if(!response.ok)
	{
		throw new Error(`HTTP error $(response.status)`)
	}
	else
	{
		return await response.blob();
	}
}

//function calling
myFetch().then((blob)=>
{
	let ObjectURL = URL.createObjectURL(blob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
})
.catch((e)=>console.log(e));