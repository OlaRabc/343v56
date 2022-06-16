package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="message")
public class Message {
    @Id
    private Long msgId;
    private Long doctorId;
    private Long patientId;
    private Long visitId;
    private String isRead;
    private Long newStatus;
}
