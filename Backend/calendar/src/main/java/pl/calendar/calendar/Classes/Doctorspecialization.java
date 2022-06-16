package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="doctorspecialization")
public class Doctorspecialization {
    @Id
    private Long id;
    private Long doctorId;
    private Long specializationId;

}
