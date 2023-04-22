package com.baloot.baloot.controllers.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.services.authentication.LogoutService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class LogoutController {

    @PostMapping("/logout") // must be actually @PostMapping
    public ResponseEntity informLogout() {
        try {
            LogoutService.handleLogout();
            return ResponseEntity.ok("ok");
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

}
