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
    private Long  patient_id;
    private String first_name;
    private String last_name;
    //private Long city_id;
    private String mail;
    private String phone_number;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
}
