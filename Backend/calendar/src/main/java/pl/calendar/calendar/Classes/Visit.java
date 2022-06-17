package pl.calendar.calendar.Classes;

import lombok.*;

import javax.persistence.*;

import java.sql.Date;
import java.sql.Time;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity(name="visit")
public class Visit {
    @Id
    private Long visitId;
    @Column(name = "doctor_id")
    private Long doctorId;
    private Long patientId;
    private Long visitStatusId;
    private Date visitDate;
    private Time visitStart;
    private Time visitEnd;
    private Long specializationId;


    @OneToMany(mappedBy = "doctorId")
    private Set<pl.calendar.calendar.Classes.Doctor> doctor;









    //@OneToMany(mappedBy = "doctorId")
    //private Set<Doctor> doctor;


    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor visit;

    //@ManyToOne
    //private pl.calendar.calendar.Classes.Doctor doctor;


    //laczy visitId z patient id
    //@OneToMany(mappedBy = "patientId")
    //private Set<Patient> pat;
    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor visit;

    //ok--but tablica
    //@OneToMany(mappedBy = "doctorId")
    //@JoinColumn(name = "doctor_id", referencedColumnName = "doctor_id")
    //private Set<pl.calendar.calendar.Classes.Doctor> doctor;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor visit;


   // @OneToOne
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor doctor;


    //@OneToOne(mappedBy = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor doctor;

    //@OneToOne
    //@MapsId
    //@JoinColumn(name = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor doctor;

    //private pl.calendar.calendar.Classes.Doctor doctor;



    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    //private pl.calendar.calendar.Classes.Doctor doctor;

    /*
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctorId", referencedColumnName = "doctorId")
    private pl.calendar.calendar.Classes.Doctor doctor;
     */

}
