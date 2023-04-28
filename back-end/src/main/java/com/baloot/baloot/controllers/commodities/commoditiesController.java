package com.baloot.baloot.controllers.commodities;

import com.baloot.baloot.domain.Baloot.Exceptions.CommodityNotExistsException;
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
    public ResponseEntity getCommodity(@PathVariable String commodityId) throws IOException {
        try {
            Commodity commodity = Baloot.getInstance().getBalootCommodity(Integer.parseInt(commodityId));
            return ResponseEntity.status(HttpStatus.OK).body(commodity);
        }
        catch (CommodityNotExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
