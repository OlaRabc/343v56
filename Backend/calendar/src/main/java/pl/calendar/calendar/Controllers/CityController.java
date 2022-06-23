package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Repository.CityRepository;

import java.util.List;

@RestController
@RequestMapping(value = "/cities")
public class CityController {
    @Autowired
    public CityRepository cityRepository;

    @GetMapping("")
    public ResponseEntity<List<City>> getAllCities(){
        return ResponseEntity.ok(cityRepository.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable("id") Long id) {
        cityRepository.deleteById(id);
        return ResponseEntity.ok("");
    }

}
