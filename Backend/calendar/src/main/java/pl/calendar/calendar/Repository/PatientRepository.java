package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Patient;

public interface PatientRepository extends JpaRepository <Patient,Long>{
}
