package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Visitstatus;

import java.util.List;

public interface VisitstatusRepository extends JpaRepository<Visitstatus, Long> {

}
