package pl.calendar.calendar.Classes;

import lombok.*;
import org.apache.tomcat.jni.Time;

import javax.persistence.Entity;
import javax.persistence.Id;

import java.util.Date;

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
    //private Date visitDate;
    //private Date visitStart;
    //private Time visitEnd;
    private Long specializationId;

}
