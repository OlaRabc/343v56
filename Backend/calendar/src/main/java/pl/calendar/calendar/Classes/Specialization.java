package pl.calendar.calendar.Classes;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="specialization")
public class Specialization {
    @Id
    private Long specializationId;
    private String name;

}
