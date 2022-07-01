package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.DoctorRepository;
import pl.calendar.calendar.Repository.VisitRepository;
import pl.calendar.calendar.Repository.VisitstatusRepository;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/visits")
public class VisitController {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
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

    @PostMapping("")
    @ResponseBody
    public ResponseEntity<?> postVisit(@RequestBody Visit visit) throws ParseException {
        visit.setVisitStatusId(1L);
        visit.setPatient(null);

        visitRepository.saveAndFlush(visit);
        return ResponseEntity.ok("");
    }

    @PatchMapping("/{id}/status/{status}/patient/{patient}")
    @ResponseBody
    public ResponseEntity<?> patchVisit(
            @PathVariable("id") Long id,
            @PathVariable("status") Long status,
            @PathVariable("patient") Long patient){
        Visit v=visitRepository.getById(id);
        if (status == 1L) {
            v.setVisitStatusId(1L);
            v.setPatient(null);
        }
        if (status == 2L) {
            v.setVisitStatusId(2L);
            //setPatient
        }
        if (status == 3L) {
            v.setVisitStatusId(3L);
        }
        if (status == 4L) {
            v.setVisitStatusId(4L);
        }
        if (status == 4L) {
            v.setVisitStatusId(5L);
        }//5L del
        visitRepository.saveAndFlush(v);
        return ResponseEntity.ok("");
    }
}

