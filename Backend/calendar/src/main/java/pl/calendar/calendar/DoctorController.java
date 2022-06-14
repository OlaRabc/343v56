package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    DoctorRepository doctorRepository;

    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.getAllDoctors();
    }

    @GetMapping("/doctors/{doctorId}")
    public Doctor getById(@PathVariable("doctorId") int doctorId){
        return doctorRepository.getDoctorById(doctorId);
    }

    @GetMapping("/doctors/{specialization}/{city}")
    public Doctor getDoctorBySpecializationAndCity(@PathVariable("specialization") String specialization, @PathVariable("city") Integer city){
        return doctorRepository.getDoctorBySpecializationAndCity(specialization, city);
    }
}
