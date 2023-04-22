package com.baloot.baloot.controllers.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.services.authentication.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
//@CrossOrigin("*")
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String, Object> payLoad) {
        System.out.println("username and pass is : " + payLoad.get("username") + " - " + payLoad.get("password"));
        return ResponseEntity.ok("ok");
    }

//    @GetMapping("/login") // must be actually @PostMapping
//    public String informLogin() {
//        try {
//            return LoginService.informLogin();
//        }
//        catch (Exception e) {
//            return e.getMessage();
//        }
//    }

}
