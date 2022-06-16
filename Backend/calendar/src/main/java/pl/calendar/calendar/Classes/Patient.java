package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="patient")
public class Patient {
    @Id
    private Long  patientId;
    private String firstName;
    private String lastName;
    private String city;
    private String mail;
    private String phoneNumber;
}
