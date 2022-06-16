package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Specialization;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.VisitRepository;

import java.util.List;

@RestController
@RequestMapping("/visits")
public class VisitController {
    @Autowired
    public VisitRepository visitRepository;


    @GetMapping("")
    public List<Visit> getAllVisits() {
        return visitRepository.findAll();
    }
}
