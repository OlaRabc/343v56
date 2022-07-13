package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Doctorspecialization;
import pl.calendar.calendar.Classes.Specialization;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.DoctorRepository;
import pl.calendar.calendar.Repository.DoctorspecializationRepository;
import pl.calendar.calendar.Repository.SpecializationRepository;
import pl.calendar.calendar.Repository.VisitRepository;

import java.sql.Date;
import java.util.List;

import static java.util.Objects.isNull;

@RestController
@RequestMapping("/doctorspecializations")
public class DoctorspecializationController {
    Date currentDate = new Date(System.currentTimeMillis());
    @Autowired
    public DoctorspecializationRepository doctorspecializationRepository;
    @Autowired
    public DoctorRepository doctorRepository;
    @Autowired
    public VisitRepository visitRepository;

    @GetMapping("")
    public ResponseEntity<List<Doctorspecialization>> getAllDoctorSpecializations() {
        return ResponseEntity.ok(doctorspecializationRepository.findAll());
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<?> getAllDoctorSpecializations(@PathVariable("id") Long id) {
        if(!doctorRepository.existsById(id)) return (ResponseEntity<?>) ResponseEntity.badRequest().body("Doctor not found");
        return ResponseEntity.ok(doctorspecializationRepository.findByDoctor_doctorIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(id));
    }

    @GetMapping("/specialization/{id}") /*/*/
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("id") Long id) {
       List <Doctorspecialization> dsList=doctorspecializationRepository.findBySpecialization_specializationIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(id);
        for (Doctorspecialization ds : dsList) {
            Doctor d=ds.getDoctor();

            Visit v= visitRepository.findFirst1ByDoctor_doctorIdAndVisitStatusIdAndSpecialization_specializationIdAndVisitDateAfterOrderByVisitDateAsc(
                    d.getDoctorId(),
                    1L,
                    id,
                    currentDate);
            if(!isNull(v)){
                ds.setFirstFreeDate(v.getVisitDate());
            }

        }

       return ResponseEntity.ok(dsList);
    }



    @GetMapping("/specialization/{specialization}/city/{city}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("specialization") Long specialization, @PathVariable("city") Long city) {
        List <Doctorspecialization> dsList=doctorspecializationRepository.findBySpecialization_specializationIdAndDoctor_city_cityIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(specialization, city);
        for (Doctorspecialization ds : dsList) {
            Doctor d=ds.getDoctor();

            Visit v= visitRepository.findFirst1ByDoctor_doctorIdAndVisitStatusIdAndSpecialization_specializationIdAndVisitDateAfterOrderByVisitDateAsc(
                    d.getDoctorId(),
                    1L,
                    specialization,
                    currentDate);
            if(!isNull(v)){
                ds.setFirstFreeDate(v.getVisitDate());
            }

        }
        return ResponseEntity.ok(dsList);
    }
}
