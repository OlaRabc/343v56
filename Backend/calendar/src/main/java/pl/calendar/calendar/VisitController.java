package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/visits")
public class VisitController {
    @Autowired
    VisitRepository visitRepository;
    @GetMapping("/doctors/{doctorId}/{firstOfM}/{lastOfM}")
    public List<Visit> getVisitByDoctorId(@PathVariable("doctorId") int doctorId, @PathVariable("firstOfM") Date firstOfM, @PathVariable("lastOfM") Date lastOfM){
        return visitRepository.getVisitByDoctorId(doctorId, firstOfM, lastOfM);
    }
    @GetMapping("/patients/{patientId}/{firstOfM}/{lastOfM}")
    public List<Visit> getVisitByPatientId(@PathVariable("patientId") int patientId, @PathVariable("firstOfM") Date firstOfM, @PathVariable("lastOfM") Date lastOfM){
        return visitRepository.getVisitByPatientId(patientId, firstOfM, lastOfM);
    }

}
