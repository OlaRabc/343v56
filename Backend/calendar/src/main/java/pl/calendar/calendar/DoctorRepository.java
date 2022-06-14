package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DoctorRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Doctor> getAllDoctors(){

        return jdbcTemplate.query("SELECT doctorId, firstName, lastName, pwz, cityId, specialization, street, localNumber FROM calendar.doctor;", BeanPropertyRowMapper.newInstance(Doctor.class));
    }
    public Doctor getDoctorById(Integer doctorId)
    {
        return jdbcTemplate.queryForObject("SELECT doctorId, firstName, lastName, pwz, cityId, specialization, street, localNumber FROM calendar.doctor WHERE doctorId=?; ",BeanPropertyRowMapper.newInstance(Doctor.class),doctorId);
    }
    public List<Doctor> getDoctorsByIdAndSpecialization(Integer doctorId, String specialization){

        return jdbcTemplate.query("SELECT doctorId, firstName, lastName, pwz, cityId, specialization, street, localNumber FROM calendar.doctor WHERE cityId=? AND specialization=?;", BeanPropertyRowMapper.newInstance(Doctor.class),doctorId, specialization);
    }
}
