package pl.calendar.calendar;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PatientRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

   public Patient getPatientById(Integer patientId)
    {
        return jdbcTemplate.queryForObject("SELECT id, firstName, lastName, city, personalId, mail, phoneNumber FROM calendar.patient WHERE id=?;",BeanPropertyRowMapper.newInstance(Patient.class),patientId);
    }
}
