package com.baloot.baloot.controllers.commodities;

import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.domain.Baloot.Commodity.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/commodities")
public class commoditiesController {

    @GetMapping("/")
    public String getCommodities() throws IOException{
        return "total commodities : " + Baloot.getInstance().getBalootCommodities().size();
    }

    @GetMapping("/{commodityId}")
    public String getCommodity(@PathVariable String commodityId) throws IOException {
        try {
            Commodity commodity = Baloot.getInstance().getBalootCommodity(Integer.parseInt(commodityId));
            return String.format("commodity id : %s, \n commodity name : %s, \n provider id : %s, price : %s, \n categories : %s, \n rating : %s, \n in stock : %s, \n total comments : %s",
                    commodity.getId(), commodity.getName(), commodity.getProviderId(), commodity.getPrice(), commodity.getCategoriesAsString(), commodity.getRating(), commodity.getInStock(), commodity.getComments().size());
        }
        catch (Exception e) {
            return e.getMessage();
        }
    }
}
