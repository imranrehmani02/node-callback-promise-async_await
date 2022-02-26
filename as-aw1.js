
//**       ASYNC-AWAIT       **//


//  async-await make promise easier to write.
//async makes a js function wait for a promise.
//await makes a js function wait for a promise.
//response.json returns a promise.

async function demo()
{
	console.log('inside demo function');

	const response = await fetch('https://api.github.com/users');
	console.log('Before response')

	const users = await response.json();
	console.log('Users resolved');
	return users;
}

console.log('Before calling demo')
const a = demo()
console.log('After calling demo')
console.log(a)
a.then(data=>console.log('Data :- ',data))
console.log('Last line of JS')