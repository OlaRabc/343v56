package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {
    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/patients/{patientId}")
    public Patient getPatientById(@PathVariable("patientId") Integer patientId)
    {
        return patientRepository.getPatientById(patientId);
    }
}
