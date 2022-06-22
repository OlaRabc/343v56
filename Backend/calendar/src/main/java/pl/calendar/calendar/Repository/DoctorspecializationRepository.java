package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.calendar.calendar.Classes.Doctorspecialization;

import java.util.List;

public interface DoctorspecializationRepository extends JpaRepository<Doctorspecialization,Long> {
    List<Doctorspecialization> findBySpecialization_name(String specializationName);
    List<Doctorspecialization> findByDoctor_city_name(String cityName);
    List<Doctorspecialization> findBySpecialization_nameAndDoctor_city_name(String specializationName, String cityName);

    List<Doctorspecialization> findBySpecialization_specializationId(Long specializationId);
    List<Doctorspecialization> findByDoctor_city_cityId(Long  cityId);
    List<Doctorspecialization> findBySpecialization_specializationIdAndDoctor_city_cityId(Long specializationName, Long cityName);

}
