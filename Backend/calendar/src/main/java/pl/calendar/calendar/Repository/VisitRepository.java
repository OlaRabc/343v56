package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Visit;

import java.sql.Date;
import java.util.List;

public interface VisitRepository extends JpaRepository<Visit,Long> {
    List<Visit> findByDoctor_doctorId(Long doctorId);
    List<Visit> findByDoctor_doctorIdAndVisitDate(Long id, Date visitDate);
    List<Visit> findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusIdBetween(Long id, Date startVisitDate, Date endVisitDate, Long visitStatus1, Long visitStatus2);
    List<Visit> findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusId(Long id, Date startVisitDate, Date endVisitDate, Long visitStatus);
    List<Visit> findByDoctor_doctorIdAndVisitDateBetweenAndVisitStatusIdAndSpecialization_specializationId(Long id, Date startVisitDate, Date endVisitDate, Long visitStatus,Long specializationId);
    List<Visit> findByPatient_patientIdAndVisitDate(Long id, Date visitDate);
    List<Visit> findByPatient_patientIdAndVisitDateBetweenAndVisitStatusIdBetween(Long id, Date startVisitDate, Date endVisitDate, Long visitStatus1, Long visitStatus2);

    Visit findFirst1ByDoctor_doctorIdAndVisitStatusIdAndSpecialization_specializationIdAndVisitDateAfterOrderByVisitDateAsc(Long doctorId, Long visitStatus, Long specializationId, Date date);
    List<Visit> findByVisitDateAndVisitStatusId(Date visitDate, Long visitStatusId);
}
