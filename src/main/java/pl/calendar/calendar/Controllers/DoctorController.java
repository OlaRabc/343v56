package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Repository.CityRepository;
import pl.calendar.calendar.Repository.DoctorRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
    @Autowired
    public DoctorRepository doctorRepository;

    @GetMapping("")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Doctor> getDoctorById(@PathVariable("id") Long id){
        return doctorRepository.findById(id);
    }
}