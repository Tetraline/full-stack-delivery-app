package com.delivery.deliveryapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DeliveryController {

    @GetMapping("/welcome")
    public Map<String, String> getSeller() {
        HashMap<String, String> seller = new HashMap<>();
        seller.put("name", "Pizza Place");
        seller.put("lon", "104.916113");
        seller.put("lat", "11.61538");
        seller.put("ID", "1");
        return seller;
    }

    @GetMapping("/location/")
    public List<Map<String, String>> getSellers(@RequestParam float lat, @RequestParam float lon) {
        List<Map<String, String>> sellers = new ArrayList<>();
        sellers.add(getSeller());
        sellers.add(getSeller());
        sellers.add(getSeller());
        return sellers;
    }

}
