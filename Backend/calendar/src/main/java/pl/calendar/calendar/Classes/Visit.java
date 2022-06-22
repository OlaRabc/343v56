package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="visit")
public class Visit {
    @Id
    private Long visitId;
    private Long visitStatusId; //??
    private Date visitDate;
    private Time visitStart;
    private Time visitEnd;

    @ManyToOne
    @JoinColumn(name = "doctorId")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patientId")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "specializationId")
    private Specialization specialization;

}
