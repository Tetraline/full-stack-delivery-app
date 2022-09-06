package com.delivery.deliveryapp;

public class Seller {
    private int id;
    private double lat;
    private double lng;
    private String name;

    private SellerCategory category;

    public Seller(int id, double lat, double lng, String name, SellerCategory category) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.category = category;
    }

    public SellerCategory getCategory() {
        return category;
    }

    public void setCategory(SellerCategory category) {
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
