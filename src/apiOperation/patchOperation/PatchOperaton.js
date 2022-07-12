import axios from "axios";
const link="http://localhost:8080";

export async function patchVisit(visitId,newStatus,patientId) {
	await axios.patch(`${link}/visits/${visitId}/status/${newStatus}/patient/${patientId}`)
}