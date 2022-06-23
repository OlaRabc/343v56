package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.VisitRepository;
import pl.calendar.calendar.Repository.VisitstatusRepository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/visits")
public class VisitController {
    @Autowired
    public VisitRepository visitRepository;

    @GetMapping("")
    public ResponseEntity<List<Visit>> getAllVisits() {
        return ResponseEntity.ok(visitRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVisitById(
            @PathVariable("id") Long id){
        return ResponseEntity.ok(visitRepository.findById(id));
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<List<Visit>> getByDoctorId(
            @PathVariable("id") Long id){
        return ResponseEntity.ok(visitRepository.findByDoctor_doctorId(id));
    }

    @GetMapping("/doctor/{id}/{visitDate}")
    public ResponseEntity<List<Visit>> getByDoctorIdAndVisitDate(
            @PathVariable("id") Long id,
            @PathVariable("visitDate") Date visitDate) {
        return ResponseEntity.ok(visitRepository.findByDoctor_doctorIdAndVisitDate(id, visitDate));
    }

    @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}")
    public ResponseEntity<List<Visit>> getByDoctorIdAndVisitDateBetween(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd){
       return ResponseEntity.ok(visitRepository.findByDoctor_doctorIdAndVisitDateBetween(id, dateStart, dateEnd));
    }

    @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}/{visitStatus}")
    public ResponseEntity<List<Visit>> getByDoctorIdAndVisitDateBetweenAndVisitStatus(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd,
            @PathVariable("visitStatus") Long visitStatus ){
        return ResponseEntity.ok(visitRepository.findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusId(id, dateStart, dateEnd, visitStatus));
    }


    @GetMapping("/patient/{id}/{visitDate}")
    public ResponseEntity<List<Visit>> getByPatientIdAndVisitDate(
            @PathVariable("id") Long id,
            @PathVariable("visitDate") Date visitDate){
        return ResponseEntity.ok(visitRepository.findByPatient_patientIdAndVisitDate(id, visitDate));
    }

    @GetMapping("/patient/{id}/{dateStart}/{dateEnd}")
    public ResponseEntity<List<Visit>> getByPatientIdAndVisitDateBetween(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd){
        return ResponseEntity.ok(visitRepository.findByPatient_patientIdAndVisitDateBetween(id, dateStart, dateEnd));
    }

   /* @GetMapping("/firstFreeVisit/{id}/{visitStatus}")
    public List<Visit> getByDoctorIdAndVisitDateBetweenAndVisitStatus(
            @PathVariable("id") Long id,
            @PathVariable("visitStatus") Long visitStatus ){
        java.sql.Date sqlDateNow = new java.sql.Date(new java.util.Date().getTime());
        return visitRepository.findFirstByDoctor_doctorIdAndVisitStatusId(id, visitStatus/*, sqlDateNow);
    }*/

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVisit(@PathVariable("id") Long id) {
        visitRepository.deleteById(id);
        return ResponseEntity.ok("");
    }
}

