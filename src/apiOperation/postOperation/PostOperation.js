import axios from "axios";

export async function patchVisits(visits) {
    let tmp = []
    visits.map((visit) => {
        tmp.push({
            visitDate: visit.visitDate,
            visitStart: visit.visitStart,
            visitEnd: visit.visitEnd,
            doctor: {
                doctorId: visit.doctorId
            },
            specialization: {
                specializationId: visit.specializationId
            }
        })
    })
    await axios.post(`http://localhost:8080/visits`, tmp).catch(function (error) {
        console.log(error.message);
      })
}