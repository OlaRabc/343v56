package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Specialization;

import java.util.List;

public interface SpecializationRepository extends JpaRepository<Specialization,Long> {
    List<Specialization> findAllByOrderByName();
}
