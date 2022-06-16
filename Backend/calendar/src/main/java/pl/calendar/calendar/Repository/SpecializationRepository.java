package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Specialization;

public interface SpecializationRepository extends JpaRepository<Specialization,Long> {
}
