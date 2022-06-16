package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Repository.PatientRepository;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {
    @Autowired
    public PatientRepository patientRepository;


    @GetMapping("")
    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }
}
