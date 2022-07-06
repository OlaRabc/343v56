package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Doctorspecialization;
import pl.calendar.calendar.Repository.DoctorRepository;
import pl.calendar.calendar.Repository.DoctorspecializationRepository;
import pl.calendar.calendar.Repository.SpecializationRepository;

import java.util.List;

@RestController
@RequestMapping("/doctorspecializations")
public class DoctorspecializationController {
    @Autowired
    public DoctorspecializationRepository doctorspecializationRepository;
    @Autowired
    public DoctorRepository doctorRepository;
    @Autowired
    public SpecializationRepository specializationRepository;

    @GetMapping("")
    public ResponseEntity<List<Doctorspecialization>> getAllDoctorSpecializations() {
        return ResponseEntity.ok(doctorspecializationRepository.findAll());
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<?> getAllDoctorSpecializations(@PathVariable("id") Long id) {
        if(!doctorRepository.existsById(id)) return (ResponseEntity<?>) ResponseEntity.badRequest().body("Doctor not found");

        return ResponseEntity.ok(doctorspecializationRepository.findByDoctor_doctorIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(id));
    }

    @GetMapping("/specialization/{id}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("id") Long id) {

        return ResponseEntity.ok(doctorspecializationRepository.findBySpecialization_specializationIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(id));
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<List<Doctorspecialization>> findByDoctor_city_name(@PathVariable("id") Long id) {
        return ResponseEntity.ok(doctorspecializationRepository.findByDoctor_city_cityIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(id));
    }

    @GetMapping("/specialization/{specialization}/city/{city}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("specialization") Long specialization, @PathVariable("city") Long city) {
        return ResponseEntity.ok(doctorspecializationRepository.findBySpecialization_specializationIdAndDoctor_city_cityIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(specialization, city));
    }
}
