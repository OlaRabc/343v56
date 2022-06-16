package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Repository.CityRepository;
import pl.calendar.calendar.Repository.DoctorRepository;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
    @Autowired
    public DoctorRepository doctorRepository;

    @GetMapping("")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }
}
