package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="visitstatus")
public class Visitstatus {
    @Id
    private Long visit_statusId;
    private String visitStatus;

}
