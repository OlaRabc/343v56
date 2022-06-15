package pl.calendar.calendar;

import lombok.*;

import java.sql.Time;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Visit {
    private Integer visitId;
    private Integer doctorId;
    //private Integer patientId;
    private Integer visitStatusId;
    private Date visitDate;
    private Time visitStart;
    private Time visitEnd;

    private Integer patientId;
    private String firstName;
    private String lastName;
    private String mail;
    private String phoneNumber;
/*
    private Integer  doctorId;
    private String doctorFirstName;
    private String doctorLastName;
    */

}
