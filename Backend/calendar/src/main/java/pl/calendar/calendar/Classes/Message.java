package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;
    private Long doctorId;
    private String isRead;
    private Long newStatusId;
    private Long patientId;
    private Date visitDate;
}