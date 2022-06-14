package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CityController {
    @Autowired
    CityRepository cityRepository;

    @GetMapping("/cites")
    public List<City> getAllCity(){
        return cityRepository.getAllCity();
    }

    @GetMapping("/cites/{cityId}")
    public City getById(@PathVariable("cityId") int cityId){
        return cityRepository.getCityById(cityId);
    }

}
