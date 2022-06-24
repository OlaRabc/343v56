import axios from "axios";

export async function getCities() 
{
    console.log("tmpResponse");
	let tmpResponse;
	await axios.get('http://localhost:8080/cities')
	.then(function (response) {
		tmpResponse=response.data;
        console.log("tmpResponse");
		return(tmpResponse);
	})
	return tmpResponse;
}