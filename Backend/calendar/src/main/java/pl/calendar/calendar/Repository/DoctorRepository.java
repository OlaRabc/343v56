package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.calendar.calendar.Classes.Doctor;

import java.util.List;

public interface DoctorRepository extends JpaRepository <Doctor,Long> {

}