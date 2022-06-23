package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.City;

public interface CityRepository extends JpaRepository <City,Long> {
    void deleteByName(String name);

}
