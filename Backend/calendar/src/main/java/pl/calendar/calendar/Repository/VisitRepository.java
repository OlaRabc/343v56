package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Visit;

public interface VisitRepository extends JpaRepository<Visit,Long> {
}
