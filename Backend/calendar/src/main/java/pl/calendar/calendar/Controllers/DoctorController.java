package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Repository.DoctorRepository;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
    @Autowired
    public DoctorRepository doctorRepository;

    @GetMapping("")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return ResponseEntity.ok(doctorRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDoctorById(@PathVariable("id") Long id) {

        return ResponseEntity.ok(doctorRepository.findById(id));
    }


}
