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
    public Optional<Visit> getVisitById(
            @PathVariable("id") Long id){
        return visitRepository.findById(id);
    }

    @GetMapping("/doctor/{id}")
    public List<Visit> getByDoctorId(
            @PathVariable("id") Long id){
        return visitRepository.findByDoctor_doctorId(id);
    }

    @GetMapping("/doctor/{id}/{visitDate}")
    public List<Visit> getByDoctorIdAndVisitDate(
            @PathVariable("id") Long id,
            @PathVariable("visitDate") Date visitDate){
        return visitRepository.findByDoctor_doctorIdAndVisitDate(id, visitDate);
    }

    @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}")
    public List<Visit> getByDoctorIdAndVisitDateBetween(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd){
       return visitRepository.findByDoctor_doctorIdAndVisitDateBetween(id, dateStart, dateEnd);
    }

    @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}/{visitStatus}")
    public List<Visit> getByDoctorIdAndVisitDateBetweenAndVisitStatus(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd,
            @PathVariable("visitStatus") Long visitStatus ){
        return visitRepository.findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusId(id, dateStart, dateEnd, visitStatus);
    }


    @GetMapping("/patient/{id}/{visitDate}")
    public List<Visit> getByPatientIdAndVisitDate(
            @PathVariable("id") Long id,
            @PathVariable("visitDate") Date visitDate){
        return visitRepository.findByPatient_patientIdAndVisitDate(id, visitDate);
    }

    @GetMapping("/patient/{id}/{dateStart}/{dateEnd}")
    public List<Visit> getByPatientIdAndVisitDateBetween(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd){
        return visitRepository.findByPatient_patientIdAndVisitDateBetween(id, dateStart, dateEnd);
    }

    @GetMapping("/firstFreeVisit/{id}/{visitStatus}")
    public List<Visit> getByDoctorIdAndVisitDateBetweenAndVisitStatus(
            @PathVariable("id") Long id,
            @PathVariable("visitStatus") Long visitStatus ){
        java.sql.Date sqlDateNow = new java.sql.Date(new java.util.Date().getTime());
        return visitRepository.findFirstByDoctor_doctorIdAndVisitStatusIdStartDateAfterOrderByVisitDate(id, visitStatus, sqlDateNow);
    }
}

