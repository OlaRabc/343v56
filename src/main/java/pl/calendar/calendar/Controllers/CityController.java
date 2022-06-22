package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Repository.CityRepository;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {
    @Autowired
    public CityRepository cityRepository;

    @GetMapping("")
    public List<City> getAllCities(){
        return cityRepository.findAll();
    }
}
