package com.baloot.baloot;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.domain.Baloot.Commodity.Commodity;
import com.baloot.baloot.domain.Baloot.Exceptions.NoLoggedInUserException;
import com.baloot.baloot.services.BalootDataService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
public class BalootApplication {

    public static void main(String[] args) {
        try {
            BalootDataService.getInstance().importBalootDataFromAPI();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        //System.out.println("total users : " + Baloot.getInstance().getBalootUsers().size());
        SpringApplication.run(BalootApplication.class, args);
    }

    @GetMapping("/")
    public ResponseEntity getBalootCommoditiesList() throws IOException {
        if(!Baloot.getInstance().userIsLoggedIn()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new NoLoggedInUserException().getMessage());
        }
        Map<Integer, Commodity> allCommodities = Baloot.getInstance().getBalootCommodities();
        Map<String, Object> map = new HashMap<>();
        map.put("loggedInUsername", Baloot.getInstance().getLoggedInUsername());
        map.put("commodities", allCommodities);
        return ResponseEntity.status(HttpStatus.OK).body(map);
    }

}