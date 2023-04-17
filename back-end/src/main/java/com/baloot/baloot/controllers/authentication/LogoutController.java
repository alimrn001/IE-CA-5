package com.baloot.baloot.controllers.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.services.authentication.LogoutService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class LogoutController {

    @GetMapping("/logout") // must be actually @PostMapping
    public String informLogout() {
        try {
            return LogoutService.informLogout();
        }
        catch (Exception e) {
            return e.getMessage();
        }
    }

}
