import axios from "axios";

export async function patchVisit(visit) {
    await axios.post(`http://localhost:8080/visits`, {
        "visitDate": visit.visitDate,
        "visitStart": "10:00:00",
        "visitEnd": visit.visitEnd,
        "doctor": {
            "doctorId": visit.doctorId
        },
        "specialization": {
            "specializationId": 1
        }
    })
}