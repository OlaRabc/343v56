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
    private Long doctor_id;
    private String first_name;
    private String last_name;
    private String pwz;
    //private Long cityId;
    private String street;
    private String local_number;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

}
