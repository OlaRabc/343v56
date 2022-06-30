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
export async function getVisitByPatientIdAndVisitDateBetween(id,dateStart,dateEnd) 
{
	let tmpResponse;
	await axios.get(`http://localhost:8080/visits/patient/${id}/${dateStart}/${dateEnd}`)
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}
export async function getVisitByVisitId(id) 
{
	let tmpResponse;
	await axios.get(`http://localhost:8080/visits/${id}`)
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}
