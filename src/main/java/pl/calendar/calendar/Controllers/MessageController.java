package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.calendar.calendar.Classes.City;
import pl.calendar.calendar.Classes.Message;
import pl.calendar.calendar.Classes.Patient;
import pl.calendar.calendar.Repository.MessageRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    public MessageRepository messageRepository;

    @GetMapping("")
    public List<Message> getAllMessages(){
        return messageRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessageById(@PathVariable("id") Long id){
        return messageRepository.findById(id);
    }
}