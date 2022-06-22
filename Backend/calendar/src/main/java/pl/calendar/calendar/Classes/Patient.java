package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="patient")
public class Patient {
    @Id
    private Long patientId;
    private String firstName;
    private String lastName;
    private String mail;
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "cityId")
    private City city;
}
