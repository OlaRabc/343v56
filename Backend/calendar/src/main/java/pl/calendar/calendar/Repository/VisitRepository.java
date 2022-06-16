package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Visit;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.List;

public interface VisitRepository extends JpaRepository<Visit,Long> {
    List<Visit> findByDoctorId(Long doctorId);
    List<Visit> findByDoctorIdAndVisitDate(Long id, Date visitDate);
    List<Visit> findByDoctorIdAndVisitDateBetween(Long id, Date startVisitDate, Date endVisitDate);

}
