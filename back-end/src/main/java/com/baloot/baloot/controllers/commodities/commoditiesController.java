package com.baloot.baloot.controllers.commodities;

import com.baloot.baloot.domain.Baloot.Comment.Comment;
import com.baloot.baloot.domain.Baloot.Exceptions.CommodityNotExistsException;
import com.baloot.baloot.domain.Baloot.Baloot;
import com.baloot.baloot.domain.Baloot.Commodity.*;
import com.baloot.baloot.domain.Baloot.Provider.Provider;
import com.baloot.baloot.services.commodities.CommentService;
import com.baloot.baloot.services.commodities.RecommendationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/commodities")
public class commoditiesController {

    @GetMapping("/")
    public String getCommodities() throws IOException{
        return "total commodities : " + Baloot.getInstance().getBalootCommodities().size();
    }

    @GetMapping("/{commodityId}")
    public ResponseEntity getCommodity(@PathVariable String commodityId) throws IOException {
        if(!Baloot.getInstance().userIsLoggedIn())
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User must be logged in!");
        System.out.println("recieved" + commodityId);
        try {
            Map<String, Object> responseMap = new HashMap<>();
            String loggedInUsername = Baloot.getInstance().getLoggedInUsername();
            Commodity commodity = Baloot.getInstance().getBalootCommodity(Integer.parseInt(commodityId));
            Map<Integer, Comment> comments = CommentService.getCommodityComments(Integer.parseInt(commodityId));
            Provider provider = Baloot.getInstance().getBalootProvider(commodity.getProviderId());
            List<Commodity> recommendedCommodities = RecommendationService.getRecommendedCommodities(Integer.parseInt(commodityId));
            responseMap.put("loggedInUsername", loggedInUsername);
            responseMap.put("commodity", commodity);
            responseMap.put("comments", comments);
            responseMap.put("providerName", provider.getName());
            responseMap.put("recommended", recommendedCommodities);
            return ResponseEntity.status(HttpStatus.OK).body(responseMap);
        }
        catch (CommodityNotExistsException | NumberFormatException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
