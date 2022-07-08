export const patientPrototype = {
  patientId: null,
  firstName: null,
  lastName: null,
  mail: null,
  phoneNumber: null,
  cityId: {
    cityId: null,
    name: null
  }
}
export const visitObjectPrototype = {
  visitId: null,
  visitStatusId: null,
  visitDate: null,
  visitStart: null,
  visitEnd: null,
  doctor: {
    doctorId: null,
    firstName: null,
    lastName: null,
    pwz: null,
    street: null,
    localNumber: null,
    city: {
      cityId: null,
      name: null
    }
  },
  patient: patientPrototype,
  specialization: {
    specializationId: null,
    name: null,
    shortName: null
  }
}