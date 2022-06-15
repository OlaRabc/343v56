package pl.calendar.calendar;

import lombok.*;

import java.util.Objects;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    private Integer patientId;
    private String firstName;
    private String lastName;
    private String city;
    private String personalId;
    private String mail;
    private String phoneNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Patient patient = (Patient) o;
        return Objects.equals(patientId, patient.patientId) && Objects.equals(firstName, patient.firstName) && Objects.equals(lastName, patient.lastName) && Objects.equals(city, patient.city) && Objects.equals(personalId, patient.personalId) && Objects.equals(mail, patient.mail) && Objects.equals(phoneNumber, patient.phoneNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(patientId, firstName, lastName, city, personalId, mail, phoneNumber);
    }
}
