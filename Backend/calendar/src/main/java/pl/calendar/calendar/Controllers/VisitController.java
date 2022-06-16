package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.VisitRepository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/visits")
public class VisitController {
    @Autowired
    public VisitRepository visitRepository;


    @GetMapping("")
    public List<Visit> getAllVisits() {
        return visitRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Visit> getVisitById(@PathVariable("id") Long id){
        return visitRepository.findById(id);
    }
    @GetMapping("/doctor/{id}/{visitDate}")
    public List<Visit> getByDoctorIdAndVisitDate(@PathVariable("id") Long id,@PathVariable("visitDate") Date visitDate){
        return visitRepository.findByDoctorIdAndVisitDate(id, visitDate);
    }

   @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}")
    public List<Visit> getByVisitDateBetween(@PathVariable("id") Long id, @PathVariable("dateStart") Date dateStart, @PathVariable("dateEnd") Date dateEnd){
       return visitRepository.findByDoctorIdAndVisitDateBetween(id, dateStart, dateEnd);
    }

}

