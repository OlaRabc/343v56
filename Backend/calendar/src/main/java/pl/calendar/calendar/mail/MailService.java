package pl.calendar.calendar.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



 @Service
public class MailService  {
    @Autowired
     private JavaMailSender javaMailSender;

    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendSimpleEmail(String to, String subject, String content) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(to);
         msg.setFrom("miroslaw.mlotek@onet.pl");
        msg.setSubject(subject);
        msg.setText(content);

        javaMailSender.send(msg);
    }
}
