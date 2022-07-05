import axios from "axios";

export async function patchVisit(visit) {
    await axios.post(`http://localhost:8080/visits/one`, {
        "visitDate": visit.visitDate,
        "visitStart": visit.visitStart,
        "visitEnd": visit.visitEnd,
        "doctor": {
            "doctorId": visit.doctorId
        },
        "specialization": {
            "specializationId": 1
        }
    })
}