package com.baloot.baloot.controllers.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.services.authentication.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class LoginController {

    @GetMapping("/login")
    public String informLogin() {
        try {
            return LoginService.informLogin();
        }
        catch (Exception e) {
            return e.getMessage();
        }
    }

}
