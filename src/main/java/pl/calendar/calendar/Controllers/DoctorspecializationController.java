package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
    public List<Doctorspecialization> getAllCities(){
        return doctorspecializationRepository.findAll();
    }
}
