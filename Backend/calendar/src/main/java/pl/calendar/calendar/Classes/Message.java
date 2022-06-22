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
    private Long msg_id;
    //private Long visit_id;
    private String is_read;
    private Long new_status;

    @ManyToOne
    @JoinColumn(name = " visit_id")
    private  Visit visit;
}
