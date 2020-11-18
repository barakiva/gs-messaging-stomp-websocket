package com.example.messagingstompwebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class QuestionController {

    @MessageMapping("/questions")
    public String processQuestion(String message){
        return message.toUpperCase();
    }
}
