package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Doctorspecialization;

import java.util.List;

public interface DoctorspecializationRepository extends JpaRepository<Doctorspecialization,Long> {
    List<Doctorspecialization> findBySpecialization_nameAndDoctor_city_nameOrderByDoctor_lastNameAscDoctor_firstNameAsc(String specializationName, String cityName);
    List<Doctorspecialization> findByDoctor_doctorIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(Long doctorId);





    List<Doctorspecialization> findBySpecialization_specializationIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(Long specializationId);
    List<Doctorspecialization> findByDoctor_city_cityIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(Long  cityId);
    List<Doctorspecialization> findBySpecialization_specializationIdAndDoctor_city_cityIdOrderByDoctor_lastNameAscDoctor_firstNameAsc(Long specializationName, Long cityName);

}
