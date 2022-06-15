package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    @Autowired
    DoctorRepository doctorRepository;

    @GetMapping("")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.getAllDoctors();
    }

    @GetMapping("/{doctorId}")
    public Doctor getById(@PathVariable("doctorId") int doctorId){
        return doctorRepository.getDoctorById(doctorId);
    }

    @GetMapping("/doctors/{doctorId}/{specialization}")
    public List<Doctor>getDoctorsByIdAndSpecialization(@PathVariable("doctorId") int doctorId, @PathVariable("specialization") String specialization){
        return doctorRepository.getDoctorsByIdAndSpecialization(doctorId, specialization);
    }
}
