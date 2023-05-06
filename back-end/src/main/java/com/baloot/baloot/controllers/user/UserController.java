package com.baloot.baloot.controllers.user;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.domain.Baloot.User.User;
import com.baloot.baloot.domain.Baloot.Commodity.Commodity;
import com.baloot.baloot.domain.Baloot.Provider.Provider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.ProviderNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @GetMapping("/user")
    public ResponseEntity getUserData() throws IOException {
        if(!Baloot.getInstance().userIsLoggedIn())
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User must be logged in!");
        try {
            System.out.println("reached user !");
            String loggedInUsername = Baloot.getInstance().getLoggedInUsername();
            User user = Baloot.getInstance().getBalootUser(loggedInUsername);
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("userInfo", user);
            return ResponseEntity.status(HttpStatus.OK).body(responseMap);
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}