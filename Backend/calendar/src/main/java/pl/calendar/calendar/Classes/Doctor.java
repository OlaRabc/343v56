package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

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


    //
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Visit visit;


    //ok        w patent - tablica z wizytami
    //@OneToMany(mappedBy = "doctorId")
    //private Set <pl.calendar.calendar.Classes.Visit> visits;



}
