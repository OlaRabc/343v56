package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Doctor;

public interface DoctorRepository extends JpaRepository <Doctor,Integer> {
}
