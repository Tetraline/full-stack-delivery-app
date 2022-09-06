package com.delivery.deliveryapp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class DeliveryController {
    List<Seller> sellers = new ArrayList<>();

    //@GetMapping("/welcome")
    //public Seller getSeller() {
    //    Seller s = new Seller(1, 11.61538, 104.916113, "Pizza Place");
    //    return s;
    //}

    //public static Map<String, Object> parameters(Object obj) {
    //    Map<String, Object> map = new HashMap<>();
    //    for (Field field : obj.getClass().getDeclaredFields()) {
    //        //field.setAccessible(true)
    //        try {
    //            map.put(field.getName(), field.get(obj));
    //        } catch (Exception e) {]
    //        }
    //        return map;
    //    }
    //}

    @GetMapping("/location/")
    public ResponseEntity getSellers(@RequestParam float lat, @RequestParam float lng,
                                     @RequestParam("category") SellerCategory category) {
        List<HashMap<String, String>> responseSellers = new ArrayList<>();
        for (Seller s : sellers) {
            HashMap<String, String> map = new HashMap<>();
            map.put("id", String.valueOf(s.getId()));
            map.put("name", s.getName());
            map.put("category", String.valueOf(s.getCategory()));
            map.put("distance", String.valueOf(Math.floor(10 * Math.random())));
            responseSellers.add(map);
        }

        System.out.println(category);
        System.out.println(lat);
        System.out.println(lng);
        System.out.println(sellers);
        return ResponseEntity.status(HttpStatus.OK).body(responseSellers);
    }

    @PostMapping("/addSeller")
    public ResponseEntity addSeller(@RequestBody Seller seller) {
        sellers.add(seller);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }
}
