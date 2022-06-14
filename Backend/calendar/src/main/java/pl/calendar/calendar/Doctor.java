package pl.calendar.calendar;

import lombok.*;

import java.util.Objects;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    private Integer doctorId;
    private String firstName;
    private String lastName;
    private String pwz;
    private Integer cityId;
    private String specialization;
    private String street;
    private String localNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doctor doctor = (Doctor) o;
        return Objects.equals(doctorId, doctor.doctorId) && Objects.equals(firstName, doctor.firstName) && Objects.equals(lastName, doctor.lastName) && Objects.equals(pwz, doctor.pwz) && Objects.equals(cityId, doctor.cityId) && Objects.equals(specialization, doctor.specialization) && Objects.equals(street, doctor.street) && Objects.equals(localNumber, doctor.localNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(doctorId, firstName, lastName, pwz, cityId, specialization, street, localNumber);
    }
}
