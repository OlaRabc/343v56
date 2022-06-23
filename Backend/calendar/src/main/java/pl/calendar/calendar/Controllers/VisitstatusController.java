package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Classes.Visitstatus;
import pl.calendar.calendar.Repository.PatientRepository;
import pl.calendar.calendar.Repository.VisitstatusRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/visitstatuses")
public class VisitstatusController {
    @Autowired
    public VisitstatusRepository visitstatusRepository;


    @GetMapping("")
    public ResponseEntity<List<Visitstatus>> getAllVisits(){
        return ResponseEntity.ok(visitstatusRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVisitstatusById(@PathVariable("id") Long id){
        return ResponseEntity.ok(visitstatusRepository.findById(id));
    }
}
