package com.delivery.deliveryapp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class DeliveryController {
    List<Seller> sellers = new ArrayList<>();

    //@GetMapping("/welcome")
    //public Seller getSeller() {
    //    Seller s = new Seller(1, 11.61538, 104.916113, "Pizza Place");
    //    return s;
    //}

    @GetMapping("/location/")
    public ResponseEntity getSellers(@RequestParam float lat, @RequestParam float lng, @RequestParam("category") SellerCategory category) {
        System.out.println(category);
        System.out.println(lat);
        System.out.println(lng);
        return ResponseEntity.status(HttpStatus.OK).body(sellers);
    }

    @PostMapping("/addSeller")
    public ResponseEntity addSeller(@RequestBody Seller seller) {
        sellers.add(seller);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }
}
