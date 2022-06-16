package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="doctor")
public class Doctor {
    @Id
    private Long doctorId;
    private String firstName;
    private String lastName;
    private String pwz;
    private Long cityId;
    private String street;
    private String localNumber;

}
