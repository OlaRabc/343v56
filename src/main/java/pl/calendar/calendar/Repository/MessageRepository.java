package pl.calendar.calendar.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.calendar.calendar.Classes.Message;

public interface MessageRepository extends JpaRepository<Message,Long> {
}
