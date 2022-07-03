package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Visit;

import java.util.List;

public interface CityRepository extends JpaRepository <City,Long> {
    List<City> findAllByOrderByName();

}
