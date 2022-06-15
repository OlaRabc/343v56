package pl.calendar.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class VisitRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Visit> getVisitByDoctorId(int doctorId, Date firstOfM, Date lastOfM){
        return jdbcTemplate.query("SELECT visit.visitId, visit.doctorId, visit.visitStatusId,  visit.visitDate, visit.visitStart, visit.visitEnd, " +
                " patient.patientId, patient.firstName, patient.lastName, patient.mail, patient.phoneNumber " +
                "from visit " +
                "LEFT JOIN patient " +
                "ON patient.patientId=visit.patientId " +
                "Where doctorId=? AND visit.visitDate>? AND  visit.visitDate<?;", BeanPropertyRowMapper.newInstance(Visit.class),doctorId, firstOfM, lastOfM);
    }

    public List<Visit> getVisitByPatientId(int patientId, Date firstOfM, Date lastOfM){
        return jdbcTemplate.query("SELECT visit.visitId, visit.doctorId, visit.visitStatusId,  visit.visitDate, visit.visitStart, visit.visitEnd, " +
                " patient.patientId, patient.firstName, patient.lastName, patient.mail, patient.phoneNumber " +
                "from visit " +
                "LEFT JOIN patient " +
                "ON patient.patientId=visit.patientId " +
                "Where visit.patientId=? AND visit.visitDate>? AND  visit.visitDate<?;", BeanPropertyRowMapper.newInstance(Visit.class),patientId, firstOfM, lastOfM);

    }
    public List<Visit> getVisitByDoctorIdAndVisitStatus(int doctorId,int visitStatus, Date firstOfM, Date lastOfM){
        return jdbcTemplate.query("SELECT visit.visitId, visit.doctorId, visit.visitStatusId,  visit.visitDate, visit.visitStart, visit.visitEnd, " +
                " patient.patientId, patient.firstName, patient.lastName, patient.mail, patient.phoneNumber " +
                "from visit " +
                "LEFT JOIN patient " +
                "ON patient.patientId=visit.patientId " +
                "Where doctorId=? AND visit.visitStatusId=? AND visit.visitDate>? AND  visit.visitDate<?;", BeanPropertyRowMapper.newInstance(Visit.class),doctorId,visitStatus, firstOfM, lastOfM);
    }
}