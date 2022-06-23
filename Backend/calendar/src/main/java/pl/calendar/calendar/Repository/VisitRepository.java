package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Classes.Visitstatus;

import java.sql.Date;
import java.util.List;

public interface VisitRepository extends JpaRepository<Visit,Long> {
    List<Visit> findByDoctor_doctorId(Long doctorId);
    List<Visit> findByDoctor_doctorIdAndVisitDate(Long id, Date visitDate);
    List<Visit> findByDoctor_doctorIdAndVisitDateBetween(Long id, Date startVisitDate, Date endVisitDate);
    List<Visit> findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusId(Long id, Date startVisitDate, Date endVisitDate, Long visitStatus);
    List<Visit> findByPatient_patientIdAndVisitDate(Long id, Date visitDate);
    List<Visit> findByPatient_patientIdAndVisitDateBetween(Long id, Date startVisitDate, Date endVisitDate);

    //virst free date
    //List<Visit> findFirstByDoctor_doctorIdAndVisitStatusId/*StartDateAfterOrderByVisitDate*/(Long id, Long visitStatus/*, Date date*/);
}
