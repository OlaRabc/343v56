import axios from "axios";

export async function patchVisit(visitId,newStatus,patientId) {
	await axios.patch(`http://localhost:8080/visits/${visitId}/status/${newStatus}/patient/${patientId}`)
}