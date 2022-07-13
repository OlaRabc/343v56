package pl.calendar.calendar.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Doctor;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Classes.Visit;
import pl.calendar.calendar.Repository.VisitRepository;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

@Component
public class MailController {
    public static Date addDays(Date date, int days) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DATE, days);
        return new Date(c.getTimeInMillis());
    }
    Date currentDate = new java.sql.Date(new java.util.Date().getTime());
    Date futureDate = this.addDays(currentDate, 1);
    @Autowired
    public VisitRepository visitRepository;
    private MailService mailService;


    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    //@Scheduled(fixedRate = 60000, initialDelay = 5000)
    @Scheduled(cron = "0 0 0 * * *")
    public void sendEmail() {
        System.out.println("@@@@@@@@@@@@");
        List<Visit> visitList=visitRepository.findByVisitDateAndVisitStatusId(futureDate,3L);
        for(Visit visit:visitList){
            Patient p=visit.getPatient();
            Doctor d=visit.getDoctor();
            City c=d.getCity();
            String content="Na jutro masz zaplanowaną wizytę.\n Szczeguły wizyty: "+
                    visit.getVisitDate()+", "+ visit.getVisitStart()+"-"+visit.getVisitEnd()+
                    ", "+c.getName()+" "+d.getStreet()+" "+d.getLocalNumber();
            mailService.sendSimpleEmail(p.getMail(), "Wizyta!!!",content );

        }

    }
}
