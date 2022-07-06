package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doctorId;
    private String firstName;
    private String lastName;
    private String pwz;
    private String street;
    private String localNumber;

    @ManyToOne
    @JoinColumn(name = "cityId")
    private City city;

}
