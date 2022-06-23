package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Doctorspecialization;
import pl.calendar.calendar.Repository.DoctorspecializationRepository;

import java.util.List;

@RestController
@RequestMapping("/doctorspecializations")
public class DoctorspecializationController {
    @Autowired
    public DoctorspecializationRepository doctorspecializationRepository;

    @GetMapping("")
    public ResponseEntity<List<Doctorspecialization>> getAllDoctorSpecializations(){
        return  ResponseEntity.ok(doctorspecializationRepository.findAll());
    }

    @GetMapping("/specialization/{name}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("name") String name){
        return  ResponseEntity.ok(doctorspecializationRepository.findBySpecialization_name(name));
    }

    @GetMapping("/city/{name}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorByCity(@PathVariable("name") String name){
        return ResponseEntity.ok(doctorspecializationRepository.findByDoctor_city_name(name));
    }

    @GetMapping("/specialization/{specialization}/city/{city}")
    public ResponseEntity<List<Doctorspecialization>> getDoctorBySpecializationId(@PathVariable("specialization") String specialization, @PathVariable("city") String city){
        return ResponseEntity.ok(doctorspecializationRepository.findBySpecialization_nameAndDoctor_city_name(specialization, city));
    }
}
