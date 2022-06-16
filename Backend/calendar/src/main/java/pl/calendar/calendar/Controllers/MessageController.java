package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Message;
import pl.calendar.calendar.Repository.MessageRepository;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    public MessageRepository messageRepository;

    @GetMapping("")
    public List<Message> getAllCities(){
        return messageRepository.findAll();
    }
}
