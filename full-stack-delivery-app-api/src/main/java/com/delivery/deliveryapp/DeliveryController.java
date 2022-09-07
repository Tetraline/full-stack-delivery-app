package com.delivery.deliveryapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
public class DeliveryController {
    @Autowired
    SellerRepository sellerRepository;

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
    public ResponseEntity getSellers(@RequestParam float lat, @RequestParam float lng, @RequestParam("category") SellerCategory category) {
        List<HashMap<String, String>> responseSellers = new ArrayList<>();
        for (Seller s : sellerRepository.findAll()) {
            double distance = calculateDistance(lat, lng, s);
            if (distance < 10) {
                HashMap<String, String> map = new HashMap<>();
                map.put("name", s.getName());
                map.put("description", String.valueOf(s.getDescription()));
                map.put("distance", String.format("%.0f", distance) + " km");
                map.put("time", calculateDeliveryTime(distance));
                responseSellers.add(map);
            }
        }
        responseSellers.sort(Comparator.comparing((HashMap<String, String> s) -> Integer.parseInt(s.get("distance").split(" ")[0])));
        return ResponseEntity.status(HttpStatus.OK).body(responseSellers);
    }

    @PostMapping("/addSeller")
    public ResponseEntity addSeller(@RequestBody Seller seller) {
        // TODO: Figure out how to catch exceptions here?
        sellerRepository.save(seller);
        String responseJSON = "{\"name\":\"" + seller.getName() + "\"}";
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseJSON);
    }

    private int calculateDistance(float lat, float lng, Seller s) {
        // lat2 = s.getLat == sLatRadi
        // lat1 = lat == latRadi
        // lon2 = s.getLng
        // lon1 = lon
        // modified from https://www.geeksforgeeks.org/haversine-formula-to-find-distance-between-two-points-on-a-sphere/
        double dLat = Math.toRadians(s.getLat() - lat);
        double dLng = Math.toRadians(s.getLng() - lng);

        // convert to radians
        double latRadi = Math.toRadians(lat);
        double sLatRadi = Math.toRadians(s.getLat());

        // apply formulae
        double a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLng / 2), 2) * Math.cos(latRadi) * Math.cos(sLatRadi);
        double rad = 6371;
        double c = 2 * Math.asin(Math.sqrt(a));
        return (int) Math.round(rad * c);
    }

    private String calculateDeliveryTime(double distance) {
        // Delivery cyclists move at about 0.5 km per minute
        double speed = 0.5; // km per minute
        double time = distance / speed; // minutes
        time = 5 * Math.round(time / 5);
        // Restaurants take about 10 minutes to cook food
        time = time + 10;
        return (int) time + "-" + (int) (time + 5) + " min";
    }
}
