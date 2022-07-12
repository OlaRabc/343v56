import axios from "axios";

const link="http://localhost:8080";
export async function getCities() {
	let tmpResponse;
	await axios.get(`${link}/cities`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getSpecializations() {
	let tmpResponse;
	await axios.get(`${link}/specializations`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getDoctorSpecializations(id) {
	let tmpResponse;
	await axios.get(`${link}/doctorspecializations/doctor/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}

export async function getVisitByVisitId(id) {
	let tmpResponse;
	await axios.get(`${link}/visits/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getPatientById(id) {
	let tmpResponse;
	await axios.get(`${link}/patients/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getDoctrsBySpecialization(id) {
	let tmpResponse;
	await axios.get(`${link}/doctorspecializations/specialization/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getDoctorById(id) {
	let tmpResponse;
	await axios.get(`${link}/doctors/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getMessageByPatientId(id) {
	let tmpResponse;
	await axios.get(`${link}/messages/patient/${id}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getDoctrsBySpecializationAndCity(specialization, city) {
	let tmpResponse;
	await axios.get(`${link}/doctorspecializations/specialization/${specialization}/city/${city}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getVisitByPatientIdAndVisitDateBetween(id, dateStart, dateEnd) {
	let tmpResponse;
	await axios.get(`${link}/visits/patient/${id}/${dateStart}/${dateEnd}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getVisitByDoctorIdAndVisitDateBetween(id, dateStart, dateEnd) {
	let tmpResponse;
	await axios.get(`${link}/visits/doctor/${id}/${dateStart}/${dateEnd}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getVisitByDoctorIdAndVisitDateBetweenAndVisitStatus(id, dateStart, dateEnd, visitStatus) {
	let tmpResponse;
	await axios.get(`${link}/visits/doctor/${id}/${dateStart}/${dateEnd}/${visitStatus}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}
export async function getVisitByDoctorIdAndVisitDateBetweenAndVisitStatusAndSpecializationId(id, dateStart, dateEnd, visitStatus, specializationId) {
	let tmpResponse;
	await axios.get(`${link}/visits/doctor/${id}/${dateStart}/${dateEnd}/${visitStatus}/${specializationId}`)
		.then(function (response) {
			tmpResponse = response.data;
			return (tmpResponse);
		})
	return tmpResponse;
}

