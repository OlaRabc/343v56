package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Message;
import pl.calendar.calendar.Classes.Visit;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
   List<Message> findFirst5ByPatientIdAndIsReadOrderByMessageIdDesc(Long pacientId, String isRead);

}
