package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long msgId;
    private String isRead;
    private Long newStatus;

    @ManyToOne
    @JoinColumn(name = " visitId")
    private Visit visit;
}
