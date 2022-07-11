package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Message;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.DoctorRepository;
import pl.calendar.calendar.Repository.PatientRepository;
import pl.calendar.calendar.Repository.VisitRepository;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


@RestController
@RequestMapping("/visits")
public class VisitController {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    @Autowired
    public VisitRepository visitRepository;
    @Autowired
    public PatientRepository patientRepository;
    @Autowired
    public DoctorRepository doctorRepository;

    @GetMapping("")
    public ResponseEntity<List<Visit>> getAllVisits() {
        return ResponseEntity.ok(visitRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVisitById(
            @PathVariable("id") Long id) {
        return ResponseEntity.ok(visitRepository.findById(id));
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<List<Visit>> getByDoctorId(
            @PathVariable("id") Long id) {
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
            @PathVariable("dateEnd") Date dateEnd) {
        return ResponseEntity.ok(visitRepository.findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusIdBetween(id, dateStart, dateEnd, 1L, 4L));
    }

    @GetMapping("/doctor/{id}/{dateStart}/{dateEnd}/{visitStatus}")
    public ResponseEntity<List<Visit>> getByDoctorIdAndVisitDateBetweenAndVisitStatus(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd,
            @PathVariable("visitStatus") Long visitStatus) {
        return ResponseEntity.ok(visitRepository.findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusId(id, dateStart, dateEnd, visitStatus));
    }


    @GetMapping("/patient/{id}/{visitDate}")
    public ResponseEntity<List<Visit>> getByPatientIdAndVisitDate(
            @PathVariable("id") Long id,
            @PathVariable("visitDate") Date visitDate) {
        return ResponseEntity.ok(visitRepository.findByPatient_patientIdAndVisitDate(id, visitDate));
    }


    @GetMapping("/patient/{id}/{dateStart}/{dateEnd}")
    public ResponseEntity<List<Visit>> getByPatientIdAndVisitDateBetween(
            @PathVariable("id") Long id,
            @PathVariable("dateStart") Date dateStart,
            @PathVariable("dateEnd") Date dateEnd) {
        return ResponseEntity.ok(visitRepository.findByPatient_patientIdAndVisitDateBetweenAndVisitStatusIdBetween(id, dateStart, dateEnd, 1L, 5L));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVisit(@PathVariable("id") Long id) {
        visitRepository.deleteById(id);
        return ResponseEntity.ok("");
    }


    @PostMapping("")
    @ResponseBody
    public ResponseEntity<?> postOneDayVisit(@RequestBody List<Visit> newVisitList) throws ParseException {
        Date currentDate = new Date(System.currentTimeMillis());
        for (Visit newVisit : newVisitList) {
            Date date2 = newVisit.getVisitDate();
            if (!(date2.after(currentDate))) {
                return (ResponseEntity<?>) ResponseEntity.badRequest().body("Date after current date");
            }
            Doctor d = newVisit.getDoctor();
            List<Visit> oldVisitList = visitRepository.findByDoctor_doctorIdAndVisitDate(d.getDoctorId(), newVisit.getVisitDate());

            for (Visit oldVisit : oldVisitList) {
                if (!(oldVisit.getVisitStart().after(newVisit.getVisitStart()))
                        && oldVisit.getVisitEnd().after(newVisit.getVisitStart())) {
                    return (ResponseEntity<?>) ResponseEntity.badRequest().body("Visitat at " + oldVisit.getVisitDate() + ", " + oldVisit.getVisitStart() + " - " + oldVisit.getVisitEnd() + " already exist ");
                }
                if (newVisit.getVisitEnd().after(oldVisit.getVisitStart())
                        && !(newVisit.getVisitEnd().after(oldVisit.getVisitEnd()))) {
                    return (ResponseEntity<?>) ResponseEntity.badRequest().body("Visitat at " + oldVisit.getVisitDate() + ", " + oldVisit.getVisitStart() + " - " + oldVisit.getVisitEnd() + " already exist ");
                }
                if (!(newVisit.getVisitStart().after(oldVisit.getVisitStart()))
                        && !(oldVisit.getVisitStart().after(newVisit.getVisitEnd()))
                        && !(newVisit.getVisitStart().after(oldVisit.getVisitEnd()))
                        && !(oldVisit.getVisitEnd().after(newVisit.getVisitEnd()))) {
                    return (ResponseEntity<?>) ResponseEntity.badRequest().body("Visitat at " + oldVisit.getVisitDate() + ", " + oldVisit.getVisitStart() + " - " + oldVisit.getVisitEnd() + " already exist ");
                }
            }
            newVisit.setVisitStatusId(1L);
            newVisit.setPatient(null);

        }
        visitRepository.saveAllAndFlush(newVisitList);
        return ResponseEntity.ok("");
    }

    @CrossOrigin
    @PatchMapping("/{id}/status/{status}/patient/{patient}")
    @ResponseBody
    public ResponseEntity<?> patchVisit(
            @PathVariable("id") Long id,
            @PathVariable("status") Long status,
            @PathVariable("patient") Long patient) {
        Visit v = visitRepository.getById(id);
        Date currentDate = new Date(System.currentTimeMillis());
        Date date2 = v.getVisitDate();
        Patient p=v.getPatient();
        Doctor d=v.getDoctor();
        if (date2.after(currentDate)) {
            if (status == 1L) {//free
                v.setVisitStatusId(1L);
                v.setPatient(null);
                visitRepository.saveAndFlush(v);
                return ResponseEntity.ok("");
            }
            if (status == 2L) { //toAccept
                v.setVisitStatusId(2L);
                v.setPatient(patientRepository.findById(patient).get());
                visitRepository.saveAndFlush(v);
                return ResponseEntity.ok("");
            }
            if (status == 3L) { //acepted
                v.setVisitStatusId(3L);
                visitRepository.saveAndFlush(v);
                return ResponseEntity.ok("");
            }
            if (status == 4L) { //removed
                v.setVisitStatusId(4L);
                v.setPatient(null);
                visitRepository.saveAndFlush(v);
                return ResponseEntity.ok("");
            }
            if (status == 5L) { //del
                v.setVisitStatusId(5L);
                visitRepository.saveAndFlush(v);
                return ResponseEntity.ok("");
            }


        }
        return (ResponseEntity<?>) ResponseEntity.badRequest().body("Date after current date");
    }
}

