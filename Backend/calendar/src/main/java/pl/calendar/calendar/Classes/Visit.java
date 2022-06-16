package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

import java.sql.Date;
import java.sql.Time;
import java.time.ZonedDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="visit")
public class Visit {
    @Id
    private Long visitId;
    private Long doctorId;
    private Long patientId;
    private Long visitStatusId;
    private Date visitDate;
    private Time visitStart;
    private Time visitEnd;
    private Long specializationId;

}
