package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name = "visitstatus")
public class Visitstatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long visit_status_id;
    private String visit_status;

}
