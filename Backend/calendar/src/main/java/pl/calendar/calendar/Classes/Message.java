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
@Entity(name="message")
public class Message {
    @Id
    private Long msgId;
    private String isRead;
    private Long newStatus;

    @ManyToOne
    @JoinColumn(name = " visitId")
    private  Visit visit;
}
