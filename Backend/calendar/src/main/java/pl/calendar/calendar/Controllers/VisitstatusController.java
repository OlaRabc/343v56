package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Classes.Visitstatus;
import pl.calendar.calendar.Repository.PatientRepository;
import pl.calendar.calendar.Repository.VisitstatusRepository;

import java.util.List;

@RestController
@RequestMapping("/visitstatuses")
public class VisitstatusController {
    @Autowired
    public VisitstatusRepository visitstatusRepository;


    @GetMapping("")
    public List<Visitstatus> getAllVisits(){
        return visitstatusRepository.findAll();
    }
}
