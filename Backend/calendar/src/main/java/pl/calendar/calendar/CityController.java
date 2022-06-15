package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cites")
public class CityController {
    @Autowired
    CityRepository cityRepository;

    @GetMapping("")
    public List<City> getAllCity(){
        return cityRepository.getAllCity();
    }

    @GetMapping("/{cityId}")
    public City getById(@PathVariable("cityId") int cityId){
        return cityRepository.getCityById(cityId);
    }

}
