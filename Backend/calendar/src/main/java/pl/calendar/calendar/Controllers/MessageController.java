package pl.calendar.calendar.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.calendar.calendar.Classes.*;
import pl.calendar.calendar.Repository.MessageRepository;

import java.sql.Date;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    public MessageRepository messageRepository;

    @GetMapping("")
    public ResponseEntity<List<Message>> getAllMessages() {
        return ResponseEntity.ok(messageRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMessageById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(messageRepository.findById(id));
    }
    @GetMapping("/patient/{id}")
    public ResponseEntity<?> getByPatientId(@PathVariable("id") Long id) {
        return ResponseEntity.ok(messageRepository.findByPatientIdAndIsRead(id, "false"));
    }

}
