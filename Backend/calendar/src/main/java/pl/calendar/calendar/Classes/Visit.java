package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

import java.sql.Date;
import java.sql.Time;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="visit")
public class Visit {
    @Id
    private Long visit_id;
    //private Long doctor_id;
    //private Long patient_id;
    private Long visit_status_id; //??
    private Date visit_date;
    private Time visit_start;
    private Time visit_end;
    //private Long specialization_id;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "specialization_id")
    private Specialization specialization;

}
