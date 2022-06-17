package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

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
    private Long cityId;
    private String mail;
    private String phoneNumber;

    //ok
    //@OneToMany(mappedBy = "patientId")
    //private Set<Visit> visits;
}
