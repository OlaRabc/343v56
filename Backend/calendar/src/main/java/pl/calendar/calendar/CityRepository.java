package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CityRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<City> getAllCity()
    {
        return jdbcTemplate.query("SELECT cityId,name FROM calendar.city", BeanPropertyRowMapper.newInstance(City.class));
    }
    public City getCityById(Integer cityId)
    {
        return jdbcTemplate.queryForObject("SELECT cityId, name FROM calendar.city WHERE cityId=?; ",BeanPropertyRowMapper.newInstance(City.class), cityId);
    }

}
