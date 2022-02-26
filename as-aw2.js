

//Async-await using try catch

async function myFetch()
{
	try{
		let response = await fetch('coffee.jpg')

		if(!response.ok)
		{
			throw new Error(`HTTP error : $(response.status)`)
		}
		else
		{
			let myBlob = await response.blob();
			let objectURL = URL.createObjectURL(myBlob);
			let image = document.createElement('img');
			image.src = objectURL;
			document.body.appendChild(image);
		}
	}
	catch(e)
	{
		console.log(e)
	}
}

//function calling
myFetch()