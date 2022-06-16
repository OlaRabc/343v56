package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.Specialization;
import pl.calendar.calendar.Classes.Visitstatus;
import pl.calendar.calendar.Repository.SpecializationRepository;
import pl.calendar.calendar.Repository.VisitstatusRepository;

import java.util.List;

@RestController
@RequestMapping("/specializations")
public class SpecializationController {
    @Autowired
    public SpecializationRepository specializationRepository;


    @GetMapping("")
    public List<Specialization> getAllSpecializations() {
        return specializationRepository.findAll();
    }

}