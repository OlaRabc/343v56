import axios from "axios";

export async function getCities() 
{
	let tmpResponse;
	await axios.get('http://localhost:8080/cities')
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}
export async function getSpecializations() 
{
	let tmpResponse;
	await axios.get('http://localhost:8080/specializations')
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}