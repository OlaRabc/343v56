package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="doctorspecialization")
public class Doctorspecialization {
    @Id
    private Long id;
    //private Long doctor_id;
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    //private Long specialization_id;
    @ManyToOne
    @JoinColumn(name = "specialization_id")
    private Specialization specialization;
}
