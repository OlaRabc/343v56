package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Visitstatus;

public interface VisitstatusRepository extends JpaRepository<Visitstatus, Long> {
}
